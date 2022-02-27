import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import PropTypes from "prop-types";

export default function Loader({ loading }) {
    if (!loading) { return false; }

    return (
        <Backdrop style={{ zIndex: 10 }} open={loading}>
            <CircularProgress />
        </Backdrop>
    );
}

Loader.defaultProps = {
    loading: false
}

Loader.propTypes = {
    loading: PropTypes.bool
}
