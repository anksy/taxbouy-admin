import { Route, Redirect } from "react-router-dom";

export function PublicRoute({ component: Component, isUserLoggedIn, ...rest }) {
    return (
        <Route {...rest} render={props => (
            (isUserLoggedIn) ? (
                <Redirect to={{
                    /**specify the route on which user will redirect if the user is logged in 
                     * and trying to access Without Login route*/
                    pathname: '/',
                    state: { from: props.location }
                }} />
            ) : (
                    <Component {...props} />
                )
        )} />
    );
}

export function PrivateRoute({ component: Component, isUserLoggedIn, dispatch, ...rest }) {
    return (
        <Route {...rest} render={props => (
            (isUserLoggedIn) ? (
                <Component dispatch={dispatch} {...props} />
            ) : (
                    <Redirect to={{
                        /**specify the route on which you want to redirect in case of not logged in */
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
                )
        )} />
    );
}