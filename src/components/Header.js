import { useState } from 'react';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
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
                    <NavItem>
                        <NavLink to={'user'}>{isAuthenticated ? 'Usuário' : 'Menu'}</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;