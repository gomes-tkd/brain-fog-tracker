import React, { useState } from "react";
import { Button, Form, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import RangeInput from "./RangeInput";
import DateTimeInput from "./DateTimeInput";
import { editSymptom, getSymptoms } from "../Firebase";

const EditSymptomButton = ({ id, setSymptoms }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fogginess, setFogginess] = useState(0);
  const [anxiety,setAnxiety] = useState(0);
  const [headache, setHeadache] = useState(0);
  const [fatigue, setFatigue] = useState(0);
  const [gut, setGut] = useState(0);
  const [date, setDate] = useState(new Date());

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  async function handleSubmit(e) {
    e.preventDefault();
    await editSymptom(id, fogginess, anxiety, headache, fatigue, gut, date);
    await getSymptoms(setSymptoms);
    toggleModal();
  }

  return (
    <>
      <Button color={"light"} className={"me-4"} onClick={toggleModal}>
        Edit
      </Button>

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          EDIT SYMPTOM
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <RangeInput label={"Fogginess"} id={"fogginess"} value={fogginess} setValue={setFogginess} />
            <RangeInput label={"Anxiety"} id={"anxiety"} value={anxiety} setValue={setAnxiety} />
            <RangeInput label={"Headache"} id={"headache"} value={headache} setValue={setHeadache} />
            <RangeInput label={"Fatigue"} id={"fatigue"} value={fatigue} setValue={setFatigue} />
            <RangeInput label={"Gut"} id={"gut"} value={gut} setValue={setGut} />
            <DateTimeInput label={"Date"} id={"date"} value={date} setValue={setDate} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary">
              Save
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default EditSymptomButton;