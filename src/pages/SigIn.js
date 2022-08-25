import { useState } from 'react';
import { ReactComponent as SignInImg } from '../assets/imgs/lock_FILL0_wght100_GRAD200_opsz24.svg';
import {Button, Col, Container, FormGroup, Input, Row} from 'reactstrap';
import { createUser} from "../Firebase";
import { NavLink } from "react-router-dom";

const SigIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <Container
            className={'mt-5'}
            fluid
        >
            <Row>
                <Col
                    className="text-center"
                    md={{
                        offset: 4,
                        size: 4
                    }}
                    sm="12"
                >
                    <SignInImg />
                    <h1 className={'mt-4'}>Sign up</h1>
                    <form onSubmit={handleSubmit}  className={'mt-4'}>
                        <FormGroup>
                            <Input
                                className={'mt-4'}
                                type={'email'}
                                placeholder={'Email Address *'}
                                onChange={({ target }) => setEmail(target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className={'mt-3'}
                                type={'password'}
                                placeholder={'Password *'}
                                onChange={({target}) => setPassword(target.value)}
                            />
                        </FormGroup>
                        <Button
                            className={'mt-4 mb-3'}
                            onClick={() => createUser(email, password)}
                            color={'primary'}
                        >
                            SIGN UP
                        </Button>
                    </form>
                    {error && (
                        <p style={{color: '#f00'}}>
                            There is no user record corresponding to this identifier. The user may have been deleted.
                        </p>
                    )}
                    <NavLink
                        to={'/login'}
                    >
                        Log in
                    </NavLink>
                </Col>
            </Row>
        </Container>
    );
};

export default SigIn;