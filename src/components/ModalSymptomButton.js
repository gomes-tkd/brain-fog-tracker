import { useState } from 'react';
import {auth, getSymptoms, registerSymptom} from "../Firebase";
import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import RangeInput from "./RangeInput";
import DateTimeInput from "./DateTimeInput";

const ModalSymptomButton = ({ setSymptoms }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fogginess, setFogginess] = useState(0);
  const [anxiety,setAnxiety] = useState(0);
  const [headache, setHeadache] = useState(0);
  const [fatigue, setFatigue] = useState(0);
  const [gut, setGut] = useState(0);
  const [date, setDate] = useState(new Date());

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await registerSymptom(fogginess, anxiety, headache, fatigue, gut, date);
    await getSymptoms(setSymptoms);
    setFogginess(0);
    setAnxiety(0);
    setHeadache(0);
    setFatigue(0);
    setGut(0);
    setDate(new Date());
    toggleModal();
  }

  return (
    <>
      <Button color={"primary"} onClick={toggleModal}>
        Symptom
      </Button>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          NEW SYMPTOM
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <RangeInput label={"Fogginess"} id={"fogginess"} value={fogginess} setValue={setFogginess} />
            <RangeInput label={"Anxiety"} id={"anxiety"} value={anxiety} setValue={setAnxiety} />
            <RangeInput label={"Headache"} id={"headache"} value={headache} setValue={setHeadache} />
            <RangeInput label={"Fatigue"} id={"fatigue"} value={fatigue} setValue={setFatigue} />
            <RangeInput label={"Gut"} id={"gut"} value={gut} setValue={setGut} />
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

export default ModalSymptomButton;