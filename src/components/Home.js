import React, { useState } from 'react';
import {
    Button,
    Col,
    Container, Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Row
} from "reactstrap";
import {registerSymptom} from "../Firebase";

const Home = () => {

    const [modal, setModal] = useState(false);
    const [fogginess, setFogginess] = useState('');
    const [anxiety,setAnxiety] = useState('');
    const [headache, setHeadache] = useState('');
    const [fatigue, setFatigue] = useState('');
    const [gut, setGut] = useState('');
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

            <Modal isOpen={modal} toggle={toggle} className={'align-items-center justify-content-center'}>
                <ModalHeader
                    toggle={toggle}
                    className={'align-items-center justify-content-center text-center'}
                >
                    NEW SYMPTOM
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row className={'align-items-center text-center justify-content-center'}>
                            <Label
                                for="fogginess"
                                size="md"
                                sm={3}
                            >
                                Fogginess
                            </Label>
                            <Col sm={6}>
                                <Input
                                    id="fogginess"
                                    name="fogginess"
                                    type="range"
                                    plaintext
                                    onChange={({ target }) => setFogginess(target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row className={'align-items-center text-center justify-content-center'}>
                            <Label
                                for="anxiety"
                                size="md"
                                sm={3}
                            >
                                Anxiety
                            </Label>
                            <Col sm={6}>
                                <Input
                                    id="anxiety"
                                    name="anxiety"
                                    type="range"
                                    onChange={({ target }) => setAnxiety(target.value)}
                                    plaintext
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row className={'align-items-center text-center justify-content-center'}>
                            <Label
                                for="headache"
                                size="md"
                                sm={3}
                            >
                                Headache
                            </Label>
                            <Col sm={6}>
                                <Input
                                    id="headache"
                                    name="headache"
                                    type="range"
                                    plaintext
                                    onChange={({ target }) => setHeadache(target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row className={'align-items-center text-center justify-content-center'}>
                            <Label
                                for="fatigue"
                                size="md"
                                sm={3}
                            >
                                Fatigue
                            </Label>
                            <Col sm={6}>
                                <Input
                                    id="fatigue"
                                    name="fatigue"
                                    type="range"
                                    plaintext
                                    onChange={({ target }) => setFatigue(target.value)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row className={'align-items-center text-center justify-content-center'}>
                            <Label
                                for="gut"
                                size="md"
                                sm={3}
                            >
                                Gut
                            </Label>
                            <Col sm={6}>
                                <Input
                                    id="gut"
                                    name="gut"
                                    type="range"
                                    plaintext
                                    onChange={({ target }) => setGut(target.value)}
                                />
                            </Col>
                        </FormGroup>
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