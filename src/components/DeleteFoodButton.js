import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { getFoods, removeFood } from "../Firebase";

const DeleteFoodButton = ({ id, setFoodsList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <Button color={"danger"} onClick={toggleModal}>
        Delete
      </Button>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalBody toggle={toggleModal}>
          Are you sure you want to delete this foods list?
        </ModalBody>
        <ModalFooter>
          <Button
            color={"danger"}
            onClick={async () => {
              await removeFood(id);
              await getFoods(setFoodsList);
            }}
          >
            DELETE
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteFoodButton;