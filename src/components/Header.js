import { useState } from 'react';
import { logOut } from "../Firebase";
import {
    Collapse, DropdownItem, DropdownMenu, DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink, UncontrolledDropdown
} from "reactstrap";

const Header = ({ isAuthenticated }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar
            color={'primary'}
            expand={'md'}
            container
            light
        >
            <NavbarBrand className={'text-white'}>Fog Tracker</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className={'me-auto'} navbar>
                </Nav>
                <Nav navbar>
                    <NavItem>
                        <NavLink href={'#'} className={'text-white'}>Link</NavLink>
                    </NavItem>
                    { isAuthenticated ? (
                        <UncontrolledDropdown inNavbar>
                            <DropdownToggle nav caret className={'text-white'}>
                                Account
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    <button
                                        onClick={logOut}
                                    >
                                        Sair
                                    </button>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    ) : (
                        <NavItem>
                            <NavLink href={'/signup'}>Menu</NavLink>
                        </NavItem>
                    )}
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;