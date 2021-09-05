import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Container, HorizontalLine, ParentText, Text, Field, KidContainer, ImmuStatus, FieldFlex } from "../../styles/usersStyle";
const temporaryKid = [
    {
        id: 1,
        kidName: "CharlesBoy",
        sex: "Male",
        noImmun: 3,
        status: "Pending",
    },
    {
        id: 2,
        kidName: "Precious",
        sex: "Female",
        noImmun: 0,
        status: "Completed",
    },
    {
        id: 3,
        kidName: "Boysco",
        sex: "Male",
        noImmun: 4,
        status: "Pending",
    },
    {
        id: 4,
        kidName: "Katty",
        sex: "Female",
        noImmun: 0,
        status: "Completed",
    },
];
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 30 + rand();
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: "#cc952f",
        color: "white",
        height: "20px",
        "&:hover": {
            backgroundColor: "wheat",
        },
        marginBottom: "3px",
        marginLeft: "23px",
    },
    paper: {
        position: "absolute",
        width: 600,
        backgroundColor: theme.palette.background.paper,

        padding: theme.spacing(2, 4, 3),
    },
    radioBox: {
        color: "#cc952f !important",
    },
    textField: {
        width: "33rem",
    },
}));
const ViewUser = () => {
    const classes = useStyles();
    const location = useLocation();
    const [userData, setUserData] = useState(null);
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [isTelephoneCheck, setIsTelephoneCheck] = useState(false);
    const [isEmailCheck, setIsEmailCheck] = useState(false);
    const [message, setMessage] = useState("");
    const [activeId, setActiveId] = useState(null);
    const [immuLeft, setImmuLeft] = useState(null);
    const [disableMessageButt, setDisableMessageButt] = useState(true);

    useEffect(() => {
        const data = () => {
            setUserData(location && location.state && location.state.userData);
            console.log(location.state.userData);
            if (location && location.state && location.state.userData && location.state.userData.telephone) {
                setIsTelephoneCheck(true);
            }
            if (location && location.state && location.state.userData && location.state.userData.email) {
                setIsEmailCheck(true);
            }
        };
        data();
        const loading = setInterval(() => {
            if (progress < 100) {
                setProgress((prevProgress) => prevProgress + 10);
            }
        }, 800);
        setTimeout(() => {
            clearInterval(loading);
            setIsLoading(false);
        }, 1000);

        return () => {
            clearInterval(loading);
        };
    }, [location]);

    const handleOpen = (id, immNo) => {
        setOpen(true);
        setActiveId(id);
        setImmuLeft(immNo);
    };

    const handleClose = () => {
        setOpen(false);
        setActiveId(null);
        setMessage("");
        setImmuLeft(null);
    };

    const radioChange = (event, type) => {
        console.log(event.target.checked);
        console.log(type);
        if (type === "telephone") {
            setIsTelephoneCheck(event.target.checked);
        } else {
            setIsEmailCheck(event.target.checked);
        }

        // if (event.target.value) {
        //     setIsTelephoneCheck(event.target.checked);
        // } else {
        //     setIsTelephoneCheck(true);
        // }
    };
    const messageChange = (e) => {
        setMessage(e.target.value);
        if (e.target.value.length > 0) {
            setDisableMessageButt(false);
        } else {
            setDisableMessageButt(true);
        }
    };
    const messageOnBlur = () => {
        console.log("hey i dey leave you oo");
        ///just if any message
        if (message.length > 0) {
            setDisableMessageButt(false);
        } else {
            setDisableMessageButt(true);
        }
    };
    const sendMessage = () => {
        ///gather the entire data and send to the server
        //mock server.
        let data = {
            kidId: activeId,
            parentId: userData.id,
            noImmun: immuLeft,
            sendToTele: isTelephoneCheck,
            sendToEmail: isEmailCheck,
        };
        console.log("send kid reminder", data);
    };
    const modalBody = (
        <div style={modalStyle} className={classes.paper}>
            <section>
                <label>Telephone</label>
                <Checkbox checked={isTelephoneCheck} onChange={(e) => radioChange(e, "telephone")} inputProps={{ "aria-label": "primary checkbox" }} className={classes.radioBox} />
                <label>Email</label>
                <Checkbox checked={isEmailCheck} onChange={(e) => radioChange(e, "email")} inputProps={{ "aria-label": "primary checkbox" }} className={classes.radioBox} />
            </section>
            <div style={{ marginTop: "1rem" }}>
                <TextField id="outlined-multiline-static" multiline rows={4} variant="outlined" value={message} onChange={messageChange} className={classes.textField} onBlur={messageOnBlur} />
            </div>
            <div style={{ marginTop: "13px", paddingLeft: "34%" }}>
                <Button size="small" className={classes.button} disableRipple onClick={sendMessage} disabled={disableMessageButt}>
                    Send Message
                </Button>
            </div>
        </div>
    );
    //get id for route params pass states via link or better still nav link
    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">
                {modalBody}
            </Modal>
            <Paper elevation={3} style={{ minHeight: "25rem", paddingBottom: "1px", paddingLeft: "6px", paddingRight: "6px" }}>
                <Container>
                    <ParentText>Parent/Guardian Details</ParentText>
                    <HorizontalLine />
                    <Field>
                        Name:<Text>{`${userData && userData.firstName}`}</Text>
                        <Text>{`${userData && userData.otherName ? userData.otherName : ""}`}</Text>
                    </Field>
                    <Field>
                        Email:<Text>{userData && userData.email}</Text>
                    </Field>
                    <Field>
                        Phone Number:<Text>{userData && userData.telephone}</Text>
                    </Field>
                    <Field>
                        Number of Kids:<Text>{userData && userData.noKids}</Text>
                    </Field>
                </Container>
                <KidContainer>
                    {isLoading && <CircularProgress style={{ color: "#ea9f11", marginLeft: "24rem" }} />}
                    <ParentText>Kids Details</ParentText>
                    <HorizontalLine />
                    {temporaryKid.map((value, key) => (
                        <Paper elevation={1} style={{ color: "#ea9f11" }} key={key}>
                            <Field>
                                Name:<Text>{value.kidName}</Text>
                            </Field>
                            <Field>
                                Sex:<Text>{value.sex}</Text>
                            </Field>
                            <Field>
                                Number of Immunization Left:<Text>{value.noImmun}</Text>
                            </Field>
                            <Field>
                                Immunization Status:
                                <ImmuStatus status={value.status} style={{ flex: "none" }}>
                                    {value.status}
                                </ImmuStatus>
                                {value.status === "Pending" ? (
                                    <Button size="small" className={classes.button} disableRipple onClick={() => handleOpen(value.id, value.noImmun)}>
                                        Send Message
                                    </Button>
                                ) : null}
                            </Field>
                        </Paper>
                    ))}
                </KidContainer>
            </Paper>
        </div>
    );
};

export default ViewUser;
