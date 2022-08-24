import { useState } from 'react';
import { ReactComponent as SignInImg } from '../assets/imgs/lock_FILL0_wght100_GRAD200_opsz24.svg';
import { Button, FormGroup, Input } from 'reactstrap';
import { createUser} from "../Firebase";
import { NavLink } from "react-router-dom";

const SigIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        alert('usuário criado!');
    }



    return (
        <div>
            <SignInImg />
            <h1>Sign up</h1>
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
                    onClick={() => createUser(email, password)}
                    className={'w-25'}
                    color={'primary'}
                >
                    SIGN UP
                </Button>
            </form>
            <NavLink to={'/login'}>Log in</NavLink>
        </div>
    );
};

export default SigIn;