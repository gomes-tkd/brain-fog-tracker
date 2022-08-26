import React from 'react';
import { logOut } from "../Firebase";

const UserPage = () => {
    return (
        <button onClick={logOut}>
            sair
        </button>
    );
};

export default UserPage;