import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import { AddAlertSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        width: ({ width }) => width,
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}));

const Alerts = ({ alertType, message, alertWidth }) => {
    const classes = useStyles({ width: alertWidth });

    return (
        <div className={classes.root}>
            <Alert severity={alertType}>{message}</Alert>
        </div>
    );
};

export default Alerts;
