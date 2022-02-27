import { Switch, Route } from "react-router-dom";
//import { PublicRoute, PrivateRoute } from "./types";

import BeforeLoginLayout from "../layout/BeforeLogin";
import AfterLoginLayout from "../layout/AfterLogin";

// import Loader from "../components/loader";

export default function Routes() {
    const isLoggedIn = !!localStorage.getItem("token");
    return (
        <>
            <Switch>
                <Route component={BeforeLoginLayout} path='/login' exact isUserLoggedIn={isLoggedIn} />
                <Route component={AfterLoginLayout} path='/' isUserLoggedIn={isLoggedIn} />
            </Switch>
            {/* <Loader /> */}
        </>
    )
}
