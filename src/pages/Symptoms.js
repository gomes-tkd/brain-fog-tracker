import React from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from 'reactstrap';

const Symptoms = () => {
    return (
        <Container>
            <Row className={'mt-3'}></Row>
            <Row className={'mt-3'}></Row>
            <Row>
                <Col className={'text-center mt-4'}>
                    <Button color={'primary mb-5 '}>SYMPTOM</Button>
                </Col>
            </Row>
            <Row className={'mt-4'}></Row>
            <Row className={'mt-4'}>
                <Col
                    className="bg-light border rounded text-center justify-content-center"
                    sm={{
                        offset: 3,
                        size: 6
                    }}
                >
                    <div>
                        <h4 className={'mt-4 mb-4'}>New symptom</h4>
                    </div>
                    <div>
                        <Form className={'justify-content-center'}>
                            <FormGroup row className={'align-items-center'}>
                                <Col>
                                    <Label
                                        for="fogginess"
                                        size="md"
                                        sm={2}
                                    >
                                        Fogginess
                                    </Label>
                                </Col>
                                <Col>
                                    <Input
                                        id="fogginess"
                                        name="fogginess"
                                        type="range"
                                        plaintext
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row  className={'align-items-center'}>
                                <Label
                                    for="anxiety"
                                    size="md"
                                    sm={2}
                                >
                                    Anxiety
                                </Label>
                                <Col sm={6}>
                                    <Input
                                        id="anxiety"
                                        name="anxiety"
                                        type="range"
                                        plaintext
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row className={'align-items-center'}>
                                <Label
                                    for="headache"
                                    size="md"
                                    sm={2}
                                >
                                    Headache
                                </Label>
                                <Col sm={6}>
                                    <Input
                                        id="headache"
                                        name="headache"
                                        type="range"
                                        plaintext
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row className={'align-items-center'}>
                                <Label
                                    for="fatigue"
                                    size="md"
                                    sm={2}
                                >
                                    Fatigue
                                </Label>
                                <Col sm={6}>
                                    <Input
                                        id="fatigue"
                                        name="fatigue"
                                        type="range"
                                        plaintext
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row className={'align-items-center'}>
                                <Label
                                    for="gut"
                                    size="md"
                                    sm={2}
                                >
                                    Gut
                                </Label>
                                <Col sm={6}>
                                    <Input
                                        id="gut"
                                        name="gut"
                                        type="range"
                                        plaintext
                                    />
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                    <Col className={'text-end mb-4'}>
                        <Button color={'primary'}>Save</Button>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default Symptoms;