import { Redirect, Route } from "react-router-dom";


function PrivateRoute({ access, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                ({ location }) => access
                    ? (children)
                    : (<Redirect to={{ pathname: '/', state: { from: location } }} />
                    )
            } />
    );
}


export default PrivateRoute;