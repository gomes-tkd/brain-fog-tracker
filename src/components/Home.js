import React, { useState } from 'react';
import {
    Button,
    Col,
    Container, Form,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from "reactstrap";
import { registerSymptom } from "../Firebase";
import Symptoms from "../pages/Symptoms";

const Home = () => {

    const [modal, setModal] = useState(false);
    const [fogginess, setFogginess] = useState(0);
    const [anxiety,setAnxiety] = useState(0);
    const [headache, setHeadache] = useState(0);
    const [fatigue, setFatigue] = useState(0);
    const [gut, setGut] = useState(0);
    const date = new Date();

    const toggle = () => setModal(!modal);

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <main>
            <Container>
                <Row className={"mt-5"}>
                    <Col
                        className={"text-center mt-5"}
                        md={{
                            offset: 3,
                            size: 6
                        }}
                        sm="12"
                    >
                        <Button color={'primary'} onClick={toggle}>
                            Symptom
                        </Button>
                    </Col>
                </Row>
            </Container>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    NEW SYMPTOM
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <Symptoms label={'Fogginess'} id={'fogginess'} value={fogginess} setValue={setFogginess} />
                        <Symptoms label={'Anxiety'} id={'anxiety'} value={anxiety} setValue={setAnxiety} />
                        <Symptoms label={'Headache'} id={'headache'} value={headache} setValue={setHeadache} />
                        <Symptoms label={'Fatigue'} id={'fatigue'} value={fatigue} setValue={setFatigue} />
                        <Symptoms label={'Gut'} id={'gut'} value={gut} setValue={setGut} />
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