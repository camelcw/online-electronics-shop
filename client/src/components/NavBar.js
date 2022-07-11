import React, {useContext} from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button, Container} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Container>
            <Navbar bg="primary" variant="dark">
                <NavLink to={SHOP_ROUTE}>TatShop</NavLink>
                {user.isAuth 
                ?
                    <Nav className="ml-auto">
                        <Button onClick={() => navigate(ADMIN_ROUTE)}>Admin</Button>
                        <Button onClick={() => navigate(LOGIN_ROUTE)}>Exit</Button>
                    </Nav>
                :   <Nav className="ml-auto">
                        <Button>Authentication</Button>
                    </Nav>
                }
            </Navbar>
        </Container>
    );
};

export default observer(NavBar);