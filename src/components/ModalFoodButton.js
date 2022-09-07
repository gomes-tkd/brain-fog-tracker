import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row }  from "reactstrap";
import DateTimeInput from "./DateTimeInput";
import {auth, getFoods, registerFood} from "../Firebase";

const ModalFoodButton = ({ setFoodsList }) => {
  const [foods, setFoods] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState(new Date());

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

  const toggleModal = () => setIsModalOpen(!isModalOpen);

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
    await registerFood(foods, date);
    await getFoods(setFoodsList, auth.currentUser.uid);
    setDate(new Date());
    setFoods([]);
    toggleModal();
  }

  return (
    <div>
      <Button color={"primary"} className={"me-3"} onClick={toggleModal}>
        Food
      </Button>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>NEW FOODS</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody className={"text-center"}>
            <Container>
              <Row>
                { foodItems.map(food => (
                  <Col md={4} sm={6} key={food} className={"pb-3"}>
                    <Button
                      color="primary"
                      outline
                      block
                      onClick={() => onCheckBoxBtnClick(food)}
                      active={foods.includes(food)}
                    >
                      { food }
                    </Button>
                  </Col>
                ))
                }
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
    </div>
  );
}

export default ModalFoodButton;
