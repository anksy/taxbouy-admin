import React from 'react';
import PropTypes from "prop-types";
import { StyledButton } from "./styles";

const Button = ({ children, ...props }) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
}

Button.defaultProps = {
    variant: "filled",
    color: "primary",
    type: "button",
    fullWidth: true,
    disabled: false
}

Button.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
}

export default Button;