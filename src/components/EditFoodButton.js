import React, { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from "reactstrap";
import DateTimeInput from "./DateTimeInput";
import {auth, editFood, getFoods} from "../Firebase";

const EditFoodButton = ({ setFoodsList, id }) => {
  const [foods, setFoods] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const foodItems = [
    "Bread",
    "Sugary",
    "Nuts",
    "Grains",
    "Veggie",
    "Fruit",
    "Beef",
    "Poultry",
    "Pork",
    "Fish"
  ];

  function onCheckBoxBtnClick(selected) {
    const index = foods.indexOf(selected);
    if (index < 0) {
      foods.push(selected);
    } else {
      foods.splice(index, 1);
    }
    setFoods([...foods]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await editFood(id, foods, date);
    await getFoods(setFoodsList, auth.currentUser.uid);
    toggleModal();
  }

  return (
    <>
      <Button className={"me-4"} color={"light"} onClick={toggleModal}>
        Edit
      </Button>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          EDIT FOOD
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Container>
              <Row>
                {foodItems.map(food => (
                  <Col md={4} sm={6} key={food} className={"pb-3"}>
                    <Button
                      color="primary"
                      outline
                      block
                      onClick={() => onCheckBoxBtnClick(food)}
                      active={foods.includes(food)}
                      value={foods}
                    >
                      {food}
                    </Button>
                  </Col>
                ))}
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <div className={"d-flex align-items-center justify-content-between w-100 "}>
              <DateTimeInput label={"Date"} id={"date"} value={date} setValue={setDate} />
              <Button color="primary">
                Save
              </Button>
            </div>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default EditFoodButton;