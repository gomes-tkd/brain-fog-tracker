import { useState } from 'react';
import { ReactComponent as SignInImg } from "../assets/imgs/lock_FILL0_wght100_GRAD200_opsz24.svg";
import { Button, FormGroup, Input } from "reactstrap";
import { logInUser } from "../Firebase";
import { NavLink } from "react-router-dom";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <SignInImg />
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                        className={'w-25'}
                        type={'email'}
                        placeholder={'Email Address *'}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        className={'w-25'}
                        type={'password'}
                        placeholder={'Password *'}
                        onChange={({target}) => setPassword(target.value)}
                    />
                </FormGroup>
                <Button
                    onClick={() => logInUser(email, password)}
                    className={'w-25'}
                    color={'primary'}
                >
                    LOG IN
                </Button>
            </form>
            {error && <p style={{color: '#f00'}}>{ error }</p>}

            <NavLink to={'/login'}>Reset your password</NavLink>
            <NavLink to={'/signup'}>Sign up</NavLink>
        </div>
    );
};

export default LogIn;
