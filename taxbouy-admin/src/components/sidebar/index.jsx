import React from 'react';
import { Link } from 'react-router-dom';
import { AccountBox, AccountTree, Apps, ContactSupport, Group, Lock, Receipt, ShoppingBasket, TrackChanges } from "@material-ui/icons";
import * as sc from "./styles";

export default function Sidebar() {
    const appName = localStorage.getItem("shopname");
    return (
        <sc.StyledSidebar data-color="purple" data-background-color="white">
            <sc.BrandSidebar>
                <h1 className="logo-wrapper">
                    <span className="brand-logo">
                        <span className="logo-text hide-on-med-and-down">{appName}</span>
                    </span>
                </h1>
            </sc.BrandSidebar>

            <ul className="sidenav sidenav-fixed">
                <li className="bold">
                    <Link className="waves-effect active" to={"/"}>
                        <Apps />
                        <span className="menu-title">Dashboard</span>
                    </Link>
                </li>
                <li className="navigation-header">
                    <Link className="navigation-header-text" to={"/"}>Users</Link>
                </li>
                <li className="bold">
                    <Link className="waves-effect" to={"/"}>
                        <Group />
                        <span className="menu-title">Admin</span>
                    </Link>
                </li>
                <li className="bold">
                    <Link className="waves-effect" to={"/"}>
                        <Group />
                        <span className="menu-title">CA</span>
                    </Link>
                </li>
                <li className="bold">
                    <Link className="waves-effect" to={"/"}>
                        <Group />
                        <span className="menu-title">Customers</span>
                    </Link>
                </li>
                <li className="navigation-header">
                    <Link className="navigation-header-text" to={"/"} >Services</Link>
                </li>
           
                <li className="bold">
                    <Link className="waves-effect" to={"/"}>
                        <AccountTree />
                        <span className="menu-title">ITRS</span>
                    </Link>
                </li>
                <li className="bold">
                    <Link className="waves-effect" to={"/"}>
                        <ShoppingBasket />
                        <span className="menu-title">Questionnaire</span>
                    </Link>
                </li>
                <li className="bold">
                    <Link className="waves-effect" to={"/"}>
                    <Receipt />
                        <span className="menu-title">Orders</span>
                    </Link>
                </li>
                <li className="navigation-header">
                    <Link className="navigation-header-text" to={"/"} >Roles & Permissions</Link>
                </li>
                <li className="bold">
                    <Link className="waves-effect" to={"/"} >
                        <TrackChanges />
                        <span className="menu-title">Roles</span>
                    </Link>
                </li>
                <li className="navigation-header">
                    <Link className="navigation-header-text"to={"/"} >Support</Link>
                </li>
                <li className="bold">
                    <Link className="waves-effect" to={"/"}>
                        <ContactSupport />
                        <span className="menu-title">Queries</span>
                    </Link>
                </li>
                  <li className="navigation-header">
                    <Link className="navigation-header-text" to={"/"}>My Account</Link>
                </li>
                <li className="bold">
                    <Link className="waves-effect" to={"/"}>
                        <AccountBox />
                        <span className="menu-title">My Profile</span>
                    </Link>
                </li>
                <li className="bold">
                   {/*  <a className="waves-effect" href=""
                    onClick={() => {
                        localStorage.clear("token");
                        window.location.reload();
                    }}>
                        <Lock />
                        <span className="menu-title">Logout</span>
                    </a> */}
                </li>
            </ul>
        </sc.StyledSidebar>
    );
}