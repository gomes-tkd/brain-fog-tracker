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
            color={'light'}
            expand={'md'}
            container
            light
        >
            <NavbarBrand>Fog Tracker</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className={'me-auto'} navbar>
                </Nav>
                <Nav navbar>
                    <NavItem>
                        <NavLink href={'#'}>Link</NavLink>
                    </NavItem>
                    { isAuthenticated ? (
                        <UncontrolledDropdown inNavbar>
                            <DropdownToggle nav caret>
                                Menu
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