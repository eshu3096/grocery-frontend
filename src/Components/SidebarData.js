import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import PermMediaIcon from '@material-ui/icons/PermMedia';

export const SideberData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/home"
    },
    {
        title: "Mailbox",
        icon: <MailIcon/>,
        link: "/mailbox"
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/dashboard"
    },
    {
        title: "Grocery",
        icon: <LocalGroceryStoreIcon/>,
        link: "/Grocery"
    },
    {
        title: "Images",
        icon: <PermMediaIcon/>,
        link: "/images"
    }
]