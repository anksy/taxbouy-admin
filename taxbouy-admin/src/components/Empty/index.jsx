import React from 'react';
import { Alert } from "@material-ui/lab";
import * as sc from "./styles";
// import NodataSrc from "../../assets/images/nodata.jpg";

export default function EmptyState() {
    return (
        <sc.NoDataWrapper>
            {/* <img src={NodataSrc} alt="no-data" width="400px" /> */}
            <Alert severity="info" variant="filled" elevation={4}>Uf Oh! We don't have data to load here.</Alert>
        </sc.NoDataWrapper>
    );
}