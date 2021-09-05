import React, { useEffect, useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { UserDetailsContext } from "../../utilities/context/context";
import { LoginContainer, LoginCardContainer, LoginAlert } from "../../styles/loginStyle";
import Alerts from "../../utilities/alert/Alerts";
import { dashboardUrl } from "../../utilities/constants";

const useStyles = makeStyles({
    root: {
        width: "30%",
        marginLeft: "37%",
        backgroundColor: "#35384f",
    },
    button: {
        marginLeft: "43%",
        backgroundColor: "#cc952f",
        color: "white",
        "&:hover": {
            backgroundColor: "wheat",
        },
    },
    title: {
        fontSize: 14,
        color: "white",
    },
    pos: {
        marginBottom: 12,
    },
    form: {
        "& > *": {
            width: "40ch",
        },
    },
    labelText: {
        "& .MuiFormLabel-root": {
            color: "#cc952f",
        },
    },
});

const ValidationTextField = withStyles({
    root: {
        "& input:valid + fieldset": {
            borderColor: "green",
            borderWidth: 2,
        },
        "& input:invalid + fieldset": {
            borderColor: "red",
            borderWidth: 2,
        },
        "& input:valid:focus + fieldset": {
            borderLeftWidth: 6,
            padding: "4px !important", // override inline-style
        },
    },
})(TextField);

const ManagementLogin = (props) => {
    const { history } = props;
    const [error, setError] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const { userDetails, setUserDetails } = useContext(UserDetailsContext);
    const classes = useStyles();
    useEffect(() => {
        console.log(userDetails);
        console.log("what about are the all things");
        setUserDetails({ ...userDetails, name: "mmk" });
    }, [userDetails.name]);

    const handleOnChange = (e) => {
        if (e.target.id === "name") {
            setName(e.target.value);
        }
        if (e.target.id === "password") {
            setPassword(e.target.value);
        }
    };

    const handleSubmit = () => {
        console.log(password.length);
        if (name.length <= 0) {
            setError("Name cannot be empty");
        } else if (password.length <= 0) {
            setError("Password cannot be empty");
        } else {
            setError(null);
            //
            let data = {
                name: name,
                password: password,
                login: true,
            };
            console.log({ data });
            //set the auth
            if (password === "Password12" && name === "mmk") {
                setUserDetails({ ...userDetails, name: "mmk", login: true });
                window.localStorage.setItem("user", JSON.stringify(data));
                setTimeout(() => {
                    //redirect
                    history.push(dashboardUrl);
                    console.log("i dey login");
                }, 3000);
            }
        }
    };
    return (
        <LoginContainer>
            {console.log(error)}
            <LoginCardContainer>
                <Card variant="outlined" className={classes.root}>
                    <CardContent>
                        <Typography color="textSecondary" className={classes.title} component="h2" gutterBottom>
                            Welcome to Admin Portal
                        </Typography>
                        {error && error.length > 0 ? (
                            <LoginAlert>
                                <Alerts alertType={"error"} message={"Error Message"} alertWidth={"90%"} />
                            </LoginAlert>
                        ) : null}

                        <form className={classes.form} noValidate autoComplete="off">
                            <TextField
                                id="name"
                                label="Name"
                                variant="filled"
                                className={classes.labelText}
                                style={{
                                    backgroundColor: "white",
                                    marginBottom: "2rem",
                                }}
                                InputProps={{
                                    style: {
                                        color: "black",
                                    },
                                }}
                                onChange={(e) => handleOnChange(e)}
                            />
                            <TextField
                                id="password"
                                label="Password"
                                variant="filled"
                                type="password"
                                className={classes.labelText}
                                style={{
                                    backgroundColor: "white",
                                }}
                                InputProps={{
                                    style: {
                                        color: "black",
                                    },
                                }}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </form>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className={classes.button} disableRipple onClick={() => handleSubmit()}>
                            Login
                        </Button>
                    </CardActions>
                </Card>
            </LoginCardContainer>
        </LoginContainer>
    );
};

export default withRouter(ManagementLogin);
