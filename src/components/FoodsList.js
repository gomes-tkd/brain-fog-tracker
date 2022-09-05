import React from 'react';
import { Badge, Col, Container, Row } from "reactstrap";
import DeleteFoodButton from "./DeleteFoodButton";
import EditFoodButton from "./EditFoodButton";

const FoodsList = ({ foodsList, setFoodsList }) => {

  function sortByDate(f1, f2) {
    return f2.date.toDate().getTime() - f1.date.toDate().getTime();
  }

  return (
    <Container>
      <h2>Foods</h2>
      {foodsList && foodsList
      .sort(sortByDate)
      .map((foods) => {
        return (
          <Row
            key={foods.id}
            className={"shadow px-2 mb-3 bg-white rounded align-items-center"}
          >
            <Col lg={8}>
              {foods.foods.map((food) => (
                <Badge
                  pill
                  color={"light"}
                  className={"text-dark px-4 py-2"}
                >
                  {food}
                </Badge>
              ))}
            </Col>
            <Col className={"py-3"} lg={4}>
              <div className={"d-flex justify-content-end"}>
                <EditFoodButton setFoodsList={setFoodsList} id={foods.id} />
                <DeleteFoodButton id={foods.id} setFoodsList={setFoodsList} />
              </div>
            </Col>
          </Row>
        )})}
    </Container>
  )
};

export default FoodsList;