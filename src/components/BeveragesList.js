import React from 'react';
import {Badge, Button, Col, Container, Row} from "reactstrap";

const BeveragesList = ({ beverages, setBeverages, date, setDate }) => {
  function sortByDate(b1, b2) {
    return b2.date.toDate().getTime() - b1.date.toDate().getTime();
  }

  return (
    <Container>
      <h2>Beverages</h2>
      {beverages && beverages
      .sort(sortByDate)
      .map(beverage => (
        <Row
          key={beverage.id}
          className={"shadow px-2 mb-3 bg-white rounded align-items-center"}
        >
          <Col className={"py-3"} lg={8}>
            <Badge
              color="dark"
              pill
              className={"text-dark px-4 py-2"}
            >
              Dark
            </Badge>
          </Col>
          <Col lg={4}>
            <div className={"d-flex justify-content-end"}>
              <Button>EDIT</Button>
              <Button>DELETE</Button>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default BeveragesList;