import React from 'react';
import PropTypes from "prop-types";
import { FormControl, TextField } from "@material-ui/core";

const Textfield = ({ name, label, variant, placeholder, inputProps, value, onChange, error, helperText, fullWidth, disabled, multiline, rows }) => {
    return (
        <FormControl fullWidth={fullWidth}>
            <TextField
                name={name}
                label={label}
                variant={variant}
                placeholder={placeholder}
                inputProps={inputProps}
                value={value}
                onChange={onChange}
                error={error}
                helperText={helperText}
                fullWidth={fullWidth}
                disabled={disabled}
                multiline={multiline}
                rows={rows}
            />
        </FormControl>
    );
}

Textfield.defaultProps = {
    variant: "outlined",
    fullWidth: true,
    disabled: false,
    placeholder: "",
    inputProps: {},
    error: false,
    helperText: "",
    value: "",
    multiline: false,
    rows: 3,
    onChange: () => { }
}

Textfield.propTypes = {
    variant: PropTypes.string,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    inputProps: PropTypes.object,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
}

export default Textfield;