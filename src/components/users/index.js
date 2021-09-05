import React from "react";
import { withRouter } from "react-router";
import { viewUserUrl } from "../../utilities/constants";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CustomizedTables from "../../utilities/tables/Table";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    menuItem: {
        marginTop: "1rem",
        marginBottom: "1rem",
    },
    button: {
        backgroundColor: "#cc952f",
        color: "white",
        height: "20px",
        "&:hover": {
            backgroundColor: "wheat",
        },
    },
}));
const temporaryData = [
    { id: 1, firstName: "uwem", otherName: "okon", telephone: "08023123567", email: "mmmk@gmail.com", noKids: 2, status: "pending" },
    {
        id: 2,
        firstName: "uwem",
        otherName: null,
        telephone: "08023123567",
        email: "mmmk@gmail.com",
        noKids: 20,
        status: "completed",
    },
    {
        id: 3,
        firstName: "gloria",
        otherName: "mfon",
        telephone: "08023123567",
        email: null,
        noKids: 20,
        status: "pending",
    },
];
const ManageUsers = (props) => {
    const { history } = props;
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(false);
    const [activeState, setActive] = React.useState(null);
    const handleClick = (event) => {};

    const handleClose = () => {
        // setAnchorEl(true);
        setActive(null);
    };
    const pageSizeChange = (size) => {
        console.log(size);
    };
    const showDropDown = (row) => {
        console.log(row);
        setAnchorEl(true);
        setActive(row.id);
    };
    const navigate = (data) => {
        console.log("ya ya coco yombo", data.row);
        console.log(history);
        history.push({
            pathname: `/users/view/${data.id}`,
            state: { userData: data.row },
        });
    };
    const columns = [
        { field: "id", hide: true },
        {
            headerName: "First Name",
            field: "firstName",
            width: 150,
        },
        {
            headerName: "Other Name",
            field: "otherName",
            width: 200,
            sortable: false,
            renderCell: (params) => {
                if (params.value === null) {
                    return <span>None</span>;
                } else {
                    return params.value;
                }
            },
        },
        {
            headerName: "Telephone",
            field: "telephone",
            width: 200,
            sortable: false,
        },
        {
            headerName: "Email",
            field: "email",
            width: 200,
            sortable: false,
            renderCell: (params) => {
                if (params.value === null) {
                    return <span>None</span>;
                } else {
                    return params.value;
                }
            },
        },
        {
            headerName: "No of Kids",
            field: "noKids",
            width: 100,
            sortable: false,
        },
        {
            headerName: "Status",
            field: "status",
            width: 100,
            sortable: false,
            renderCell: (params) => {
                if (params.value === "pending") {
                    return <span style={{ color: "red" }}>Pending</span>;
                } else {
                    return <span style={{ color: "green" }}>Completed</span>;
                }
            },
        },
        {
            headerName: "Actions",
            field: "action",
            width: 100,
            sortable: false,
            renderCell: (params) => {
                return (
                    <div key={params.id}>
                        <Button size="small" className={classes.button} disableRipple onClick={() => navigate(params)}>
                            Action
                        </Button>
                        {/* <MoreVertIcon style={{ color: "wheat", marginLeft: "21px", cursor: "pointer" }} onClick={() => showDropDown(params)} />

                        {activeState === params.id && (
                            <ClickAwayListener onClickAway={() => handleClose()}>
                                <Paper elevation={6} style={{ position: "absolute", height: "5rem", width: "9rem", top: "3rem" }}>
                                    <MenuItem>View</MenuItem>
                                    <MenuItem>Send Reminder</MenuItem>
                                </Paper>
                            </ClickAwayListener>
                        )} */}

                        {/* <Menu id="user-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} keepMounted>
                                <MenuItem onClick={handleClose}>View</MenuItem>
                                <MenuItem onClick={handleClose}>Send Reminder</MenuItem>
                            </Menu> */}
                    </div>
                );
            },
        },
    ];

    return <CustomizedTables data={temporaryData} iconType="usersIcon" columns={columns} disableColumnMenu={true} disableColumnFilter={true} pageSize={10} pageSizeChange={pageSizeChange} />;
};

export default withRouter(ManageUsers);
