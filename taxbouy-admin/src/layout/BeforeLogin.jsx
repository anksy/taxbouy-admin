import React from "react";
import { Switch ,Route} from "react-router-dom";
import { useSelector } from "react-redux";
import * as sc from "./styles.js";
//import { PublicRoute } from "../routes/types";

import Login from "../containers/Users";
import Snackbar from "../components/snackbar";
import Loader from "../components/loader";

function BeforeLoginLayout() {
    const toastr = useSelector(state => state.application.toastr);
    const isLoading = useSelector(state => state.application.loading);

    return (
        <sc.AppWrapper className="login-bg">
            <Switch>
                <Route component={Login} path='/login' exact />
            </Switch>

            <Snackbar toastr={toastr} />
            <Loader loading={isLoading} />
        </sc.AppWrapper>
    );
}

export default BeforeLoginLayout;
