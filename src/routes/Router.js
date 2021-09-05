import React from "react";
import { Switch, Route } from "react-router-dom";
import ManagementLogin from "../components/login/Login";
import ManagementDashBoard from "../components/dashboard/";
import ManageEvents from "../components/events/";
import ManageUsers from "../components/users/";
import ViewUser from "../components/users/ViewSpecificUsers";
import ProtectedRoute from "./ProtectedRoute";
import { dashboardUrl, loginUrl, userUrl, eventUrl, viewUserUrl } from "../utilities/constants";
const Routes = (props) => {
    const storeData = JSON.parse(window.localStorage.getItem("user"));
    //storeData && storeData.login;
    return (
        <div>
            <Switch>
                <Route exact={true} path={loginUrl} component={ManagementLogin} />
                <ProtectedRoute exact path={dashboardUrl} component={ManagementDashBoard} />
                <ProtectedRoute exact path={userUrl} component={ManageUsers} />
                <ProtectedRoute exact path={eventUrl} component={ManageEvents} />
                <ProtectedRoute exact path={viewUserUrl} component={ViewUser} />
            </Switch>
        </div>
    );
};
export default Routes;
