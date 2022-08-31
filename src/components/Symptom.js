import React, { useEffect, useState } from 'react';
import { getSymptoms } from "../Firebase";
import {Button, Col, Container, Row} from "reactstrap";

const Symptom = () => {
    const [symp, setSymp] = useState([]);

    useEffect(() => {
        getSymptoms(setSymp);
    }, []);

    return (
        <Container>
            <Row>
                <Col >
                    {
                        (symp || []).map(({id, fogginess, anxiety, headache, fatigue, gut}) => {
                            return (
                                <Row key={id}
                                     className={"shadow p-3 mb-3 bg-white rounded pt-3 pb-3 text-center align-items-center justify-content-center"}
                                >
                                    <Col>Fogginess: {fogginess}</Col>
                                    <Col>Anxiety: {anxiety}</Col>
                                    <Col>Headache: {headache}</Col>
                                    <Col>Fatigue: {fatigue}</Col>
                                    <Col>gut: {gut}</Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col>
                                        <Button color={'light'} block>Edit</Button>
                                    </Col>

                                    <Col>
                                        <Button color={'danger'} block>DELETE</Button>
                                    </Col>
                                </Row>
                            );
                        })
                    }
                    <Col>

                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default Symptom;