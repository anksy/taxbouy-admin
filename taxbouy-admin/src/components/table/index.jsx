import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from "@material-ui/core";
import { Edit, Delete, ToggleOff, ToggleOn } from "@material-ui/icons";
import Empty from "../../components/Empty";
import Placeholder from "../../components/placeholder";
import Pagination from "../../components/pagination";

export default function MuiTable({ columns, rows, isFetching, deleteAction, deactivateAction, editAction }) {
    const getValue = (row, column) => {
        if (column.field.includes("||")) {
            const fields = column.field.split("||");
            return fields.map(fld => row[fld]).join("\n");
        }

        if (typeof row[column.field] === "boolean") {
            return column.values[row[column.field] ? 0 : 1];
        }

        if (column.type === "date") {
            return moment(row[column.field]).format("lll");
        }

        if (column.prefix) {
            return column.prefix + " " + row[column.field];
        }

        return row[column.field];
    }

    const onPageChange = (_, newPage) => {
        console.log(newPage)
    }

    const perPageChange = (event) => {
        console.log(parseInt(event.target.value, 10))
    }

    return (
        <>
            {!rows.length && !isFetching && <Empty />}

            <Placeholder isLoading={isFetching}>
                {rows.length > 0 && <>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    {columns.map(column => <TableCell width={column.width} key={column.field}>{column.header}</TableCell>)}
                                    {(deleteAction || deactivateAction || editAction) && <TableCell>Actions</TableCell>}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <TableRow key={row.id}>
                                        {columns.map(column => <TableCell key={`${column.field}_${row.id}_${index}`}>
                                            {getValue(row, column)}
                                        </TableCell>)}

                                        {(deleteAction || deactivateAction || editAction) && <TableCell>
                                            {deactivateAction && <IconButton onClick={() => deactivateAction(row)}>
                                                {!row["is_active"] ? <ToggleOff fontSize="small" className="red" /> : <ToggleOn fontSize="small" className="green" />}
                                            </IconButton>}
                                            {editAction && <IconButton onClick={() => editAction(row)}>
                                                <Edit fontSize="small" />
                                            </IconButton>}
                                            {deleteAction && <IconButton onClick={() => deleteAction(row.id)}>
                                                <Delete fontSize="small" />
                                            </IconButton>}
                                        </TableCell>}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Pagination page={0} total={rows.length} onPageChange={onPageChange} perPageChange={perPageChange} />
                </>}
            </Placeholder>
        </>
    );
}

MuiTable.defaultProps = {
    rows: [],
    isFetching: false,
    deleteAction: undefined,
    editAction: undefined,
    deactivateAction: undefined,
}

MuiTable.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array,
    isFetching: PropTypes.bool,
    deleteAction: PropTypes.func,
    editAction: PropTypes.func,
    deactivateAction: PropTypes.func,
}