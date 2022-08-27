import { useState } from 'react';
import { ReactComponent as SignUpImg } from '../assets/imgs/lock_FILL0_wght200_GRAD0_opsz48.svg';
import { Button, Col, Container, FormGroup, Input, Row } from 'reactstrap';
import { createUser} from "../Firebase";
import { NavLink } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await createUser(email, password);
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
                    className='text-center'
                    md={{
                        offset: 4,
                        size: 4
                    }}
                    sm='12'
                >
                    <SignUpImg />
                    <h2 className={'mt-4'}>Sign up</h2>
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
                            SIGN UP
                        </Button>
                    </form>
                    {error && <p style={{color: '#f00'}}>{error}</p>}
                    <NavLink to={'/'}>Log in</NavLink>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;
