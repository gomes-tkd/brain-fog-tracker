import React, {useState} from 'react';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { getBeverages, removeBeverages } from "../Firebase";

const DeleteBeveragesButton = ({ id , setBeverages}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);


  return (
    <>
      <Button className={"me-3"} color={"danger"} onClick={toggleModal}>
        Delete
      </Button>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalBody toggle={toggleModal}>
          Are you sure you want to delete this beverages list?
        </ModalBody>
        <ModalFooter>
          <Button
            color={"danger"}
            onClick={async () => {
              await removeBeverages(id);
              await getBeverages(setBeverages);
            }}
          >
            DELETE
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteBeveragesButton;