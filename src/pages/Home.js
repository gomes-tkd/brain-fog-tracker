import React, {useEffect, useState} from 'react';
import {
  Button,
  Container, Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { getSymptoms, registerSymptom } from "../Firebase";
import RangeInput from "../components/RangeInput";
import DateTimeInput from "../components/DateTimeInput";
import SymptomsList from "../components/SymptomsList";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fogginess, setFogginess] = useState(0);
  const [anxiety,setAnxiety] = useState(0);
  const [headache, setHeadache] = useState(0);
  const [fatigue, setFatigue] = useState(0);
  const [gut, setGut] = useState(0);
  const [date, setDate] = useState(new Date());

  const [symptoms, setSymptoms] = useState([]);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  useEffect(() => {
    getSymptoms(setSymptoms);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await registerSymptom(fogginess, anxiety, headache, fatigue, gut, date);
    await getSymptoms(setSymptoms);
    toggleModal();
  }

  return (
    <main>
      <Container className={'justify-content-end d-flex'}>
        <Button color={'primary mt-4 mb-4'} onClick={toggleModal}>
          Symptom
        </Button>
      </Container>

      <SymptomsList symp={symptoms} />

      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          NEW SYMPTOM
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <RangeInput label={'Fogginess'} id={'fogginess'} value={fogginess} setValue={setFogginess} />
            <RangeInput label={'Anxiety'} id={'anxiety'} value={anxiety} setValue={setAnxiety} />
            <RangeInput label={'Headache'} id={'headache'} value={headache} setValue={setHeadache} />
            <RangeInput label={'Fatigue'} id={'fatigue'} value={fatigue} setValue={setFatigue} />
            <RangeInput label={'Gut'} id={'gut'} value={gut} setValue={setGut} />
            <DateTimeInput label={'Date'} id={'date'} value={date} setValue={setDate} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary">
              Save
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </main>
  );
};

export default Home;