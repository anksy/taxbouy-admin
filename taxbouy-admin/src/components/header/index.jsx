import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Select, MenuItem, FormControl } from "@material-ui/core";
import { AspectRatio, AccountCircle, Notifications } from "@material-ui/icons";
import * as sc from "./styles.js";

export default function Header({ stores }) {
    return (
        <sc.AppHeader>
            <div className="parts middle">
                <FormControl fullWidth>
                    <Select id="store-select" variant="standard" value="0">
                        <MenuItem value="0">Select a store</MenuItem>
                        {stores.map(store => <MenuItem key={store.id} value={store.id}>{store.store_location_name}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
            <div className="parts righty px2">
                <div className="icons-nav">
                    <IconButton>
                        <AspectRatio />
                    </IconButton>
                    <IconButton>
                        <Notifications />
                    </IconButton>
                    <IconButton>
                        <AccountCircle />
                    </IconButton>
                    <span>Ankit</span>
                </div>
            </div>
        </sc.AppHeader>
    );
}

Header.defaultProps = {
    stores: []
}

Header.propTypes = {
    stores: PropTypes.array
}