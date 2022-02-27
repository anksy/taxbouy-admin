import React from 'react';
import PropTypes from 'prop-types';
import { TablePagination } from '@material-ui/core';
import * as sc from "./styles";

export default function Pagination({ page, total, onPageChange, perPageChange }) {
    return (
        <sc.PaginationWrapper>
            <TablePagination
                component="div"
                count={total}
                page={page}
                onPageChange={onPageChange}
                rowsPerPage={5}
                onRowsPerPageChange={perPageChange}
            />
        </sc.PaginationWrapper>
    );
}

Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
}