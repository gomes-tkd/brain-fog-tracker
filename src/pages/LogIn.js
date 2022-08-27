import { useState } from 'react';
import { ReactComponent as SignInImg } from "../assets/imgs/lock_FILL0_wght200_GRAD0_opsz48.svg";
import { Button, Col, Container, FormGroup, Input, Row } from "reactstrap";
import { logInUser } from "../Firebase";
import { NavLink } from "react-router-dom";

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await logInUser(email, password);
        } catch (e) {
            setError(e.message)
        }
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
                    <h2 className={'mt-4'}>Log in</h2>
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
                            color={'primary'}
                            block
                        >
                            LOG IN
                        </Button>
                    </form>
                    {error && <p className={'text-danger mt-3'}>{ error }</p>}
                </Col>
            </Row >
            <Row className={'mt-3 text-center'}>
                <NavLink to={'/reset-password'}>Reset your password</NavLink>
            </Row>
            <Row className={'mt-3 text-center'}>
                <NavLink to={'/signup'}>Sign up</NavLink>
            </Row>
        </Container>
    );
};

export default LogIn;

