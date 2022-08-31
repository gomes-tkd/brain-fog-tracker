import React from 'react';
import { Col, Container, Row } from "reactstrap";
import DeleteSymptomButton from "./DeleteSymptomButton";
import SymptomEditButton from "./SymptomEditButton";

const SymptomsList = ({ symptoms, setSymptoms }) => (
  <Container>
    {
      symptoms && symptoms.map(({id, fogginess, anxiety, headache, fatigue, gut}) => (
        <Row
          key={id}
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
            <SymptomEditButton id={id} setSymptoms={setSymptoms} />
          </Col>
          <Col>
            <DeleteSymptomButton />
          </Col>
        </Row>
      ))
    }
  </Container>
);

export default SymptomsList;