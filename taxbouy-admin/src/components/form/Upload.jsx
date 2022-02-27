import React from 'react';
import PropTypes from "prop-types";
import { FormControl, Button } from "@material-ui/core";

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

const Upload = ({ text, name, value, onChange }) => {
    const onImageChange = async ({ target: { name, files } }) => {
        const [file] = files;
        const base64 = await toBase64(file);
        onChange(name, base64)
    }
    return (
        <FormControl fullWidth>
            <Button variant="contained" component="label" className="btn-upload">
                {text}
                <input name={name} type="file" hidden onChange={onImageChange} />
            </Button>

            {value && <>
                <br />
                <img src={value} alt="dataimage" width="150px" />
            </>}
        </FormControl>
    );
}

Upload.defaultProps = {
    text: "Choose & Upload image",
    value: "",
}

Upload.propTypes = {
    text: PropTypes.string,
    name: PropTypes.bool.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default Upload;