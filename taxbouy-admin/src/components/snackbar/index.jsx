import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { displayToastMessage } from "../../store/common/application.slice";

export default function Toastr({ toastr }) {
    const dispatch = useDispatch();

    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(displayToastMessage({
            open: false,
            type: "",
            message: ""
        }));
    };

    return (
        <div>
            <Snackbar open={toastr.open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity={toastr.type} elevation={6} variant="filled">
                    {toastr.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

Toastr.defaultProps = {
    toastr: {
        open: true,
        type: ""
    }
}

Toastr.propypes = {
    toastr: PropTypes.shape({
        open: PropTypes.bool,
        type: PropTypes.string,
        message: PropTypes.string.isRequired
    }),
}