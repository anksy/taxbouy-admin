import React from 'react';
import PropTypes from "prop-types";
import { InputLabel, Select, MenuItem, FormControl, FormHelperText } from "@material-ui/core";

const Dropdown = ({ name, label, variant, inputProps, value, onChange, onBlur, error, helperText, fullWidth, disabled, options }) => {
    return (
        <FormControl variant={variant} fullWidth={fullWidth} error={error}>
            <InputLabel>{label}</InputLabel>
            <Select
                name={name}
                value={value}
                inputProps={inputProps}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
            >
                {options.map(opt => <MenuItem key={opt.value} value={opt.value}>{opt.label}</MenuItem>)}
            </Select>
            {error && helperText && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
}

Dropdown.defaultProps = {
    variant: "outlined",
    disabled: false,
    inputProps: {},
    error: false,
    helperText: "",
    value: "",
    fullWidth: true,
    onChange: () => { }
}

Dropdown.propTypes = {
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    error: PropTypes.bool,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}

export default Dropdown;