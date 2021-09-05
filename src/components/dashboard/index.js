import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { VictoryPie, VictoryContainer, VictoryBar, VictoryChart } from "victory";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import EventAvailableTwoToneIcon from "@material-ui/icons/EventAvailableTwoTone";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { TextHeader, Num } from "../../styles/dashBoardStyle";
const pieData = [
    { x: "Pending Reminder", y: 40 },
    { x: "Completed Reminder", y: 60 },
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "left",
        color: theme.palette.text.secondary,
        display: "flex",
    },
    icon: {
        width: "68px",
        height: "68px",
        color: "#ea9f11",
    },
    grid: {
        paddingLeft: "2rem",
    },
    formControl: {
        margin: theme.spacing(3),
        marginLeft: theme.spacing(10),
        minWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    dataPaper: {
        padding: theme.spacing(2),
        textAlign: "left",
        color: theme.palette.text.secondary,
    },
}));

const ManagementDashBoard = () => {
    const classes = useStyles();
    const [chartType, setChartType] = useState("Bar Chart");
    const [state, setState] = useState("Akwa Ibom ");
    const [showPie, setShowPie] = useState(true);

    const handleChange = (event) => {
        console.log(event.target.id);
        if (event.target.id === "state") {
            setState(event.target.value);
        } else {
            setChartType(event.target.value);
            console.log(event.target.value);
            if (event.target.value === "bar") {
                setShowPie(false);
            } else {
                setShowPie(true);
            }
        }
    };
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>
                        <Grid>
                            <ChildCareIcon className={classes.icon} />
                        </Grid>
                        <Grid className={classes.grid}>
                            <TextHeader>NO OF REGISTER KIDS</TextHeader>
                            <Num>40000</Num>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>
                        <Grid>
                            <PeopleOutlineTwoToneIcon className={classes.icon} />
                        </Grid>
                        <Grid className={classes.grid}>
                            <TextHeader>NO OF PARENTS</TextHeader>
                            <Num>4000</Num>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={4}>
                    <Paper className={classes.paper}>
                        <Grid>
                            <EventAvailableTwoToneIcon className={classes.icon} />
                        </Grid>
                        <Grid className={classes.grid}>
                            <TextHeader>NO OF EVENTS</TextHeader>
                            <Num>4000</Num>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.dataPaper}>
                        <FormControl className={classes.formControl} style={{ alignSelf: "flex-start" }}>
                            <InputLabel htmlFor="state">STATE/REGION</InputLabel>
                            <Select
                                native
                                value={state}
                                onChange={handleChange}
                                inputProps={{
                                    name: "state",
                                    id: "state",
                                }}
                            >
                                {/* <option aria-label="Akaw Ibom" value={state} /> */}
                                <option value="AkwaIbom">Akwa Ibom</option>
                                <option value="Lagos">Lagos</option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl} style={{ alignSelf: "flex-end" }}>
                            <InputLabel htmlFor="dataType">DATA TYPE</InputLabel>
                            <Select
                                native
                                value={chartType}
                                onChange={handleChange}
                                inputProps={{
                                    name: "dataType",
                                    id: "dataType",
                                }}
                            >
                                <option value="pie">Pie Chart</option>
                                <option value="bar">Bar Chart</option>
                            </Select>
                        </FormControl>
                        <div style={{ width: "669px", height: "450px", marginLeft: "13rem" }}>
                            {showPie ? (
                                <VictoryPie colorScale={["red", "orange"]} data={pieData} />
                            ) : (
                                <VictoryChart domainPadding={{ x: 150 }}>
                                    <VictoryBar
                                        data={pieData}
                                        style={{
                                            data: {
                                                fill: ({ datum }) => (datum.x === "Pending Reminder" ? "red" : "orange"),
                                            },
                                        }}
                                        x="x"
                                        y="y"
                                    />
                                </VictoryChart>
                            )}
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default ManagementDashBoard;
