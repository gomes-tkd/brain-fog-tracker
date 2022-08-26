import { useState } from 'react';
import { ReactComponent as SignUpImg } from '../assets/imgs/lock_FILL0_wght100_GRAD200_opsz24.svg';
import { Button, Col, Container, FormGroup, Input, Row } from 'reactstrap';
import { auth, createUser} from "../Firebase";
import { NavLink } from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function createNewUser() {

        if (!email || !password) {
            setError('Email or password is required');
            return;
        }

        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            if (!user) {
                setError('Something went wrong');

            }
        } catch (e) {
            const msg = e.message;
            const code = e.code;
            console.log(msg);
            console.log(code);
            setError('Email already exists');
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        try {
            createUser(email, password);
        } catch (e) {
            setError(e.message);
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
                    <SignUpImg />
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
                            color={'primary'}
                        >
                            SIGN UP
                        </Button>
                    </form>
                    {error && <p style={{color: '#f00'}}>{error}</p>}
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

export default SignUp;
