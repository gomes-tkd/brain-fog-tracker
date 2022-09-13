import React from "react";
import { Col, Container, Row } from "reactstrap";
import format from "date-fns/format";
import DeleteSymptomButton from "./DeleteSymptomButton";
import EditSymptomButton from "./EditSymptomButton";
import SymptomsChart from "../Charts/SymptomsChart";

const SymptomsList = ({ symptoms, setSymptoms }) => {
  function sortByDate(s1, s2) {
    return s2.date.toDate().getTime() - s1.date.toDate().getTime();
  }

  return (
    <Container>
      <h2>Symptoms</h2>
      {symptoms && symptoms
      .sort(sortByDate)
      .map(({ id, fogginess, anxiety, headache, fatigue, gut, date }) => (
        <Row
          key={id}
          className={"shadow bg-white rounded mb-3 px-2"}
        >
          <Col className={"py-3"}>
            <div className={"d-flex flex-row flex-wrap align-items-center"}>
              {[
                { label: "Fogginess", value: fogginess },
                { label: "Anxiety", value: anxiety },
                { label: "Headache", value: headache },
                { label: "Fatigue", value: fatigue },
                { label: "Gut", value: gut },
              ].map(({ label, value }) => (
                <div className={"me-4 pt-2"}>
                  {label}: {value}
                </div>
              ))}
            </div>

          </Col>
          <Col className={"py-3"} lg={4}>
            <div className={"d-flex flex-row justify-content-end"}>
              {format(date.toDate(), "Pp")}
              <EditSymptomButton id={id} setSymptoms={setSymptoms} />
              <DeleteSymptomButton id={id} setSymptoms={setSymptoms} />
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default SymptomsList;