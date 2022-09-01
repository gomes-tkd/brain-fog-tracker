import React from 'react';
import { Col, Container, Row } from "reactstrap";
import DeleteSymptomButton from "./DeleteSymptomButton";
import EditSymptomButton from "./EditSymptomButton";

const SymptomsList = ({ symptoms, setSymptoms }) => {
  function sortByDate(s1, s2) {
    return s2.date.getTime() - s1.date.getTime();
  }

  return (
    <Container>
      {
        symptoms && symptoms
          .sort(sortByDate)
          .map(({ id, fogginess, anxiety, headache, fatigue, gut }) => (
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
              <EditSymptomButton id={id} setSymptoms={setSymptoms} />
            </Col>
            <Col>
              <DeleteSymptomButton />
            </Col>
          </Row>
        ))
      }
    </Container>
  );
};

export default SymptomsList;