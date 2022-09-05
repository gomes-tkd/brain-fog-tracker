import { useState } from 'react';
import { editBeverages } from "../Firebase";
import DateTimeInput from "./DateTimeInput";
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

const EditBeveragesButton = ({ id }) => {
  const [beverages, setBeverages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const beveragesList = [
    "Coffee",
    "Soft Drink",
    "Alcohol",
  ];

  function onCheckBoxBtnClick(selected) {
    const index = beverages.indexOf(selected);
    if (index < 0) {
      beverages.push(selected);
    } else {
      beverages.splice(index, 1);
    }
    setBeverages([...beverages]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await editBeverages(beverages, date, id);
    setBeverages([]);
    setDate(new Date());
    toggleModal();
  }

  return (
    <>
      <Button color={"primary"} className={"me-3"} onClick={toggleModal}>
        Edit Beverages
      </Button>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Beverages</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody className={"text-center"}>
            <Container>
              <Row>
                {beveragesList.map(beverage => (
                  <Col md={4} sm={6} key={beverage} className={"pb-3"}>
                    <Button
                      color="primary"
                      outline
                      block
                      onClick={() => onCheckBoxBtnClick(beverage)}
                      active={beverages.includes(beverage)}
                    >
                      { beverage }
                    </Button>
                  </Col>
                ))}
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <div className={"d-flex align-items-center justify-content-between w-100"}>
              <DateTimeInput label={"Date"} id={"date"} value={date} setValue={setDate} />
              <Button color="primary">
                Edit
              </Button>
            </div>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default EditBeveragesButton;