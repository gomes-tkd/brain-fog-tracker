import React from 'react';
import { logOut } from "../Firebase";

const UserPage = () => {
    return (
        <button onClick={logOut}>
            Sair
        </button>
    );
};

export default UserPage;