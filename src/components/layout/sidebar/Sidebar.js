import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";

import menus from "../menu";

const SidebarContainer = styled.div`
    position: fixed;
    top: 0rem;
    height: 100%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: left;
    ${"" /* height: calc(100vh - 60px); */}
    width: ${(props) => (props.hideIcon ? "112px" : "270px")};
    background-color: #151826;
    color: #fff;
    @media (max-width: 375px) {
        width: 112px;
    }
`;

const SidebarMenu = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: column;
    list-style: none;
    width: 100%;
    padding: 0px 30px;
`;
const SidebarMenuItem = styled.li`
    display: flex;
    height: 40px;
    width: 100%;
    align-items: center;
    padding-left: 30px;
    &:hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: inset 3px 0 0 0 #ffffff;
        cursor: pointer;
    }
`;
const Icon = styled.svg`
    width: 20px;
    height: 20px;
`;

const SidebarMenuItemLabel = styled.p`
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
    text-align: left;
    padding: 12px 0px;
    color: #ffffff;
    margin-left: 20px;
    display: ${(props) => (props.hideIcon ? "none" : "inline")};
    @media (max-width: 375px) {
        display: none;
    }
`;

const MenuLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 16px;
    font-size: 18px;
    line-height: 1.5;
    font-weight: 600;
    height: 45px;
    color: #fff;
    margin: 0px 30px 30px 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #2e2e33;
`;

const MenuSignOut = styled.div`
    border-top: 1px solid #2e2e33;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 500;
    height: 45px;
    color: #fff;
    margin: 200px 30px 60px 30px;
    padding: 20px 0px 0px 30px;
`;
const CompanyText = styled.p`
    color: #fff;
    display: ${(props) => (props.hideIcon ? "none" : "inline")};
    @media (max-width: 375px) {
        display: none;
    }
`;
const StyledIcon = withStyles({
    root: {
        color: "wheat",
    },
})(DashboardIcon);

const styles = (theme) => ({
    icon: {
        color: "wheat",
    },
    text: {
        color: "wheat",
    },
    top: {
        marginTop: "1rem",
    },
    item: {
        cursor: "pointer",

        "&:hover": {
            backgroundColor: "#35384f",
            // borderStyle: "solid",
            // borderLeftColor: "#cc952f",
            // borderTop: "none !important",
            // borderBottom: "none !important",
            // borderRight: "none !important",
        },
    },
    divider: {
        borderTop: "1px solid wheat",
        marginTop: "3rem",
    },
    active: {
        backgroundColor: "#35384f",
        borderStyle: "solid",
        borderLeftColor: "#cc952f",
        borderTop: "none !important",
        borderBottom: "none !important",
        borderRight: "none !important",
    },
});
class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = { showIconOnly: false };
    }
    toggle = () => {
        this.setState({
            showIconOnly: !this.state.showIconOnly,
        });
    };

    render() {
        const { showIconOnly } = this.state;
        const { classes } = this.props;
        return (
            <SidebarContainer hideIcon={showIconOnly}>
                <Divider className={classes.divider} />
                <List className={classes.top}>
                    {menus.map((value, key) => (
                        <NavLink exact to={value.url} className="MuiListItem-root" activeClassName={classes.active} key={key}>
                            <ListItem className={classes.item}>
                                <ListItemIcon>
                                    <div className={classes.icon}> {value.icon}</div>
                                </ListItemIcon>

                                <ListItemText primary={value.name} className={classes.text} />
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </SidebarContainer>
        );
    }
}

export default withStyles(styles)(Sidebar);
