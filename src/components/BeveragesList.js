import React from 'react';
import {Badge, Col, Container, Row} from "reactstrap";
import DeleteBeveragesButton from "./DeleteBeveragesButton";
import EditBeveragesButton from "./EditBeveragesButton";

const BeveragesList = ({ beverages, setBeverages }) => {
  function sortByDate(b1, b2) {
    return b2.date.toDate().getTime() - b1.date.toDate().getTime();
  }

  console.log(beverages)

  return (
    <Container>
      <h2>Beverages</h2>
      {beverages && beverages
      .sort(sortByDate)
      .map(({beverages, id}) => (
        <Row
          key={id}
          className={"shadow px-2 mb-3 bg-white rounded align-items-center"}
        >
          <Col className={"py-3"} lg={8}>
            {beverages.map(beverage => (
              <Badge
                color="dark"
                pill
                className={"me-2 px-4 py-2"}
              >
                {beverage}
              </Badge>
            ))}
          </Col>
          <Col lg={4}>
            <div className={"d-flex justify-content-end"}>
              <EditBeveragesButton id={id} setBeveragesList={setBeverages} />
              <DeleteBeveragesButton id={id} setBeverages={setBeverages} />
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default BeveragesList;