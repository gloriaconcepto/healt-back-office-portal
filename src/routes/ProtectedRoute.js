import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Redirect, Route } from "react-router-dom";
import { UserDetailsContext } from "../utilities/context/context";
import SideBar from "../components/layout/sidebar/Sidebar";
import { Wrapper, Main } from "../styles/layoutStyle";
function ProtectedRoute({ component: Component, ...restOfProps }) {
    const { userDetails } = useContext(UserDetailsContext);
    const storeData = JSON.parse(window.localStorage.getItem("user"));
    console.log(storeData);
    const isAuthenticated = storeData && storeData.login;
    // const isAuthenticated = userDetails && userDetails.login;
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated ? (
                    <React.Fragment>
                        <div className="header1" />

                        <Wrapper>
                            <SideBar />
                            <Main>
                                <Component {...props} />{" "}
                            </Main>
                        </Wrapper>
                    </React.Fragment>
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
}

export default ProtectedRoute;

// <Route
// {...restOfProps}
// render={(props) =>
//     isAuthenticated ? (
//         <section className="container">
//             <SideBar className="grid-sidebar" />
//             <div className="content">
//             <Component {...props} />{" "}
//             </div>

//             <div className="header" />

//         </section>
//     ) : (
//         <Redirect to="/" />
//     )
// }
// />

{
    /* <Route
{...restOfProps}
render={(props) =>
    isAuthenticated ? (
        <section className="container1">
            <div className="header1" />
            <div className="left-sidebar">
                <SideBar />
            </div>

            <div className="main1">
                <Component {...props} />{" "}
            </div>
        </section>
    ) : (
        <Redirect to="/" />
    )
}
/> */
}
