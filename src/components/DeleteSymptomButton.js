import { useState } from "react";
import {auth, getSymptoms, removeSymptom} from "../Firebase";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const DeleteSymptomButton = ({ id, setSymptoms }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Button color="danger" onClick={toggle}>
        Delete
      </Button>

      <Modal isOpen={isModalOpen} toggle={toggle} >
        <ModalBody toggle={toggle}>
          Are you sure you want to delete this symptom?
        </ModalBody>
        <ModalFooter>
          <Button
            color={"danger"}
            onClick={async () => {
              await removeSymptom(id);
              await getSymptoms(setSymptoms, auth.currentUser.uid);
            }}
          >
            DELETE
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteSymptomButton;