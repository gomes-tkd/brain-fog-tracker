import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { getBeverages, getFoods, getSymptoms } from "../Firebase";
import SymptomsList from "../components/SymptomsList";
import ModalFoodButton from "../components/ModalFoodButton";
import FoodsList from "../components/FoodsList";
import BeveragesList from "../components/BeveragesList";
import ModalBeveragesButton from "../components/ModalBeveragesButton";
import ModalSymptomButton from "../components/ModalSymptomButton";
import SymptomsChart from "../Charts/SymptomsChart";
import BeveragesChart from "../Charts/BeveragesChart";
import FoodsChart from "../Charts/FoodsChart";

const Home = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [foods, setFoods] = useState([]);
  const [beverages, setBeverages] = useState([]);
  const [date, setDate] = useState(new Date());



  useEffect( () => {
    getSymptoms(setSymptoms);
    getFoods(setFoods);
    getBeverages(setBeverages);
  }, []);


  return (
    <main>
      <Container>
        <Row>
          <Col>
            <div className={"d-flex flex-row mt-4 justify-content-end"}>
              <ModalBeveragesButton setBeveragesList={setBeverages} />
              <ModalFoodButton date={date} setDate={setDate} setFoodsList={setFoods} />
              <ModalSymptomButton setSymptoms={setSymptoms} />
            </div>
          </Col>
        </Row>
      </Container>

      <SymptomsList symptoms={symptoms} setSymptoms={setSymptoms} />
      <FoodsList
        foodsList={foods}
        setFoodsList={setFoods}
        date={date} setDate={setDate}
      />
      <BeveragesList
        beverages={beverages}
        setBeverages={setBeverages}
        date={date}
        setDate={setDate}
      />

      <SymptomsChart symptoms={symptoms} />
      <FoodsChart foods={foods} />
      <BeveragesChart beverages={beverages} />
    </main>
  );
};

export default Home;