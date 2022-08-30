import React, {useEffect, useState} from 'react';
import {
    Button,
    Col,
    Container, Form,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from "reactstrap";
import { getSymptoms, registerSymptom } from "../Firebase";
import AddSymptom from "../pages/AddSymptom";
import DateTime from "../pages/DateTime";
import Symptom from "./Symptom";
import DeleteSymp from "./DeleteSymp";

const Home = () => {

    const [modal, setModal] = useState(false);
    const [fogginess, setFogginess] = useState(0);
    const [anxiety,setAnxiety] = useState(0);
    const [headache, setHeadache] = useState(0);
    const [fatigue, setFatigue] = useState(0);
    const [gut, setGut] = useState(0);
    const [date, setDate] = useState(new Date());

    const toggle = () => setModal(!modal);

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <main>
            <Container className={'justify-content-end d-flex'}>
                        <Button color={'primary mt-4 mb-4'} onClick={toggle}>
                            Symptom
                        </Button>
            </Container>

            <Symptom />

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    NEW SYMPTOM
                    <DeleteSymp />
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <AddSymptom label={'Fogginess'} id={'fogginess'} value={fogginess} setValue={setFogginess} />
                        <AddSymptom label={'Anxiety'} id={'anxiety'} value={anxiety} setValue={setAnxiety} />
                        <AddSymptom label={'Headache'} id={'headache'} value={headache} setValue={setHeadache} />
                        <AddSymptom label={'Fatigue'} id={'fatigue'} value={fatigue} setValue={setFatigue} />
                        <AddSymptom label={'Gut'} id={'gut'} value={gut} setValue={setGut} />
                        <DateTime label={'Date'} id={'date'} value={date} setValue={setDate} />
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => registerSymptom(fogginess, anxiety, headache, fatigue, gut, date)
                    } >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        </main>
    );
};

export default Home;