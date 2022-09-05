import React from 'react';
import { Button, Col, Container, Row } from "reactstrap";
import DeleteFoodButton from "./DeleteFoodButton";
import EditFoodButton from "./EditFoodButton";

const FoodsList = ({ foodsList, setFoodsList }) => {
  function sortByDate(f1, f2) {
    return f2.date.toDate().getTime() - f2.date.toDate().getTime();
  }

  return (
    <Container>
      <h2>Foods</h2>
      {foodsList && foodsList.map((foods) => (
        <Row
          key={foods.id}
          className={"shadow p-3 mb-3 bg-white rounded pt-3 pb-3 text-center align-items-center justify-content-center"}
        >
          {foods.foods.map(food => (
            <>
              <Col>
                {food}
              </Col>
            </>
          ))}
      {foodsList && foodsList.map((foods) => {
        console.log(foods.foods);
        return (<Row
          key={foods.id}
          className={"shadow p-3 mb-3 bg-white rounded pt-3 pb-3 text-center align-items-center justify-content-center"}
        >
          {foods.foods.map((food) => <Col>{food}</Col>)}
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <div className={"col d-flex"}>
            <Col>
              <EditFoodButton setFoodsList={setFoodsList} id={foods.id} />
            </Col>
            <Col className={"ms-3"}>
              <DeleteFoodButton id={foods.id} setFoodsList={setFoodsList} />
            </Col>
          </div>
        </Row>)
      })}
    </Container>
  );
};

export default FoodsList;