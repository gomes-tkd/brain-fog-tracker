import { useState } from 'react';
import {Button, Col, Container, FormGroup, Input, Row} from "reactstrap";
import {ReactComponent as SignUpImg} from "../assets/imgs/lock_FILL0_wght200_GRAD0_opsz48.svg";
import {NavLink} from "react-router-dom";
import {resetPassword} from "../Firebase";

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await resetPassword(email);
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <div>
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
                        <h2 className={'mt-4'}>Password Reset</h2>
                        <form onSubmit={handleSubmit}  className={'mt-4'}>
                            <FormGroup>
                                <Input
                                    className={'mt-4'}
                                    type={'email'}
                                    placeholder={'Email Address *'}
                                    onChange={({ target }) => setEmail(target.value)}
                                />
                            </FormGroup>
                            <Button
                                className={'mt-4 mb-3'}
                                color={'primary'}
                                block
                            >
                                RESET
                            </Button>
                        </form>
                        {error && <p  className={'text-danger'}>{error}</p>}
                        <NavLink to={'/login'} > Log in </NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ResetPassword;