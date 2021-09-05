import React from "react";
//import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import { DataGrid } from "@material-ui/data-grid";

import GroupIcon from "@material-ui/icons/Group";
import DashboardIcon from "@material-ui/icons/Dashboard";

const useStyles = makeStyles({
    root: {
        "& .MuiDataGrid-columnsContainer": {
            backgroundColor: "#35384F",
        },
        "& .MuiDataGrid-root .MuiDataGrid-columnSeparator ": {
            display: "none",
        },
        "& .MuiDataGrid-root .MuiDataGrid-columnHeaderTitle ": {
            color: "wheat",
            fontSize: "0.9rem",
            fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"],
            fontWeight: "400",
            lineHeight: "1.5",
            letterSpacing: "0.00938em",
        },
        "& .MuiDataGrid-root .MuiDataGrid-window ": {
            overflowY: "hidden !important",
        },
    },
});

const CustomizedTables = (props) => {
    const { data, columns, disableColumnMenu, disableColumnFilter, pageSizeChange, pageSize, iconType } = props;
    const classes = useStyles();

    const CustomNoRowsOverlay = (icon) => {
        return (
            <div>
                {icon === "usersIcon" && (
                    <div style={{ marginTop: "5rem" }}>
                        <div>
                            <GroupIcon style={{ color: "wheat", fontSize: 34 }} />
                        </div>
                        <small style={{ marginTop: "3rem" }}>No Users Found</small>
                    </div>
                )}
                {icon === "eventIcon" && (
                    <div style={{ marginTop: "5rem" }}>
                        <div>
                            <DashboardIcon style={{ color: "wheat", fontSize: 34 }} />
                        </div>
                        <small style={{ marginTop: "3rem" }}>No Event's Found</small>
                    </div>
                )}
            </div>
        );
    };
    return (
        <div style={{ height: 250, width: "100%" }} className={classes.root}>
            {console.log(props)}
            <DataGrid
                columns={columns ? columns : []}
                rows={data ? data : []}
                disableColumnMenu={disableColumnMenu}
                disableColumnFilter={disableColumnFilter}
                pageSize={pageSize}
                onPageChange={(newPageSize) => pageSizeChange(newPageSize)}
                rowsPerPageOptions={[5, 10, 20]}
                pagination
                components={{
                    NoRowsOverlay: () => CustomNoRowsOverlay(iconType),
                }}
            />
        </div>
    );
};
export default CustomizedTables;
