import { dashboardUrl, userUrl, eventUrl } from "../../utilities/constants";

import DashboardIcon from "@material-ui/icons/Dashboard";
import EventAvailableTwoToneIcon from "@material-ui/icons/EventAvailableTwoTone";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

const menus = [
    {
        name: "Dashboard",
        icon: <DashboardIcon />,
        url: dashboardUrl,
    },
    {
        name: "Users",
        icon: <PeopleOutlineTwoToneIcon />,
        url: userUrl,
    },
    {
        name: "Events",
        icon: <EventAvailableTwoToneIcon />,
        url: eventUrl,
    },
];

export default menus;
