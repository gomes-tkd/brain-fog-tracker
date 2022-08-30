import React from 'react';
import { removeSymptom } from "../Firebase";
import { Button } from "reactstrap";

const DeleteSymp = ({ id}) => {
    return (
        <Button
            color={'danger'}
            onClick={async () => {
                await removeSymptom(id)
            }}
        >
            DELETE
        </Button>
    );
};

export default DeleteSymp;