import React from 'react';
import { Button, Col, Container, Row } from "reactstrap";

const FoodsList = ({ foodsList, setFoodsList }) => {
  function sortByDate(f1, f2) {
    return f2.date.toDate().getTime() - f2.date.toDate().getTime();
  }

  return (
    <Container>
      <h2>Foods</h2>
      {foodsList && foodsList.map(({foods, id}) => (
        <Row
          key={id}
          className={"shadow p-3 mb-3 bg-white rounded pt-3 pb-3 text-center align-items-center justify-content-center"}
        >
          {foods.map(food => (
            <>
              <Col>
                {food}
              </Col>
            </>
          ))}
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <div className={"col d-flex"}>
            <Col>
              <Button>Edit</Button>
            </Col>
            <Col className={"ms-3"}>
              <Button>Delete</Button>
            </Col>
          </div>
        </Row>
      ))}
    </Container>
  );
};

export default FoodsList;