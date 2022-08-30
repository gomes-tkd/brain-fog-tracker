import { useState } from 'react';
import { removeSymptom } from "../Firebase";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const DeleteSymp = ({ id}) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <Button color="danger" onClick={toggle}>
                Delete
            </Button>

            <Modal isOpen={modal} toggle={toggle} >
                <ModalBody toggle={toggle}>
                    Are you sure want to delete this symptom?
                </ModalBody>
                <ModalFooter>
                    <Button
                        color={'danger'}
                        onClick={async () => {
                            await removeSymptom(id)
                        }}
                    >
                        DELETE
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default DeleteSymp;