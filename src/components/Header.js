import React from 'react';
import {Nav, Navbar, NavItem} from "reactstrap";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <Navbar
            className={styles.header}
        >
                Univentory
        </Navbar>
    );
};

export default Header;