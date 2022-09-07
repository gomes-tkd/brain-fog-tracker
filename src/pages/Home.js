import { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { getBeverages, getFoods, getSymptoms } from "../Firebase";
import SymptomsList from "../components/SymptomsList";
import ModalFoodButton from "../components/ModalFoodButton";
import FoodsList from "../components/FoodsList";
import BeveragesList from "../components/BeveragesList";
import ModalBeveragesButton from "../components/ModalBeveragesButton";
import ModalSymptomButton from "../components/ModalSymptomButton";

const Home = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [foodsList, setFoodsList] = useState([]);
  const [beverages, setBeverages] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    getSymptoms(setSymptoms);
    getFoods(setFoodsList);
    getBeverages(setBeverages);
  }, []);


  return (
    <main>
      <Container>
        <Row>
          <Col>
            <div className={"d-flex flex-row mt-4 justify-content-end"}>
              <ModalBeveragesButton setBeveragesList={setBeverages} />
              <ModalFoodButton date={date} setDate={setDate} setFoodsList={setFoodsList} />
              <ModalSymptomButton setSymptoms={setSymptoms} />
            </div>
          </Col>
        </Row>
      </Container>

      <SymptomsList symptoms={symptoms} setSymptoms={setSymptoms} />
      <FoodsList
        foodsList={foodsList}
        setFoodsList={setFoodsList}
        date={date} setDate={setDate}
      />
      <BeveragesList
        beverages={beverages}
        setBeverages={setBeverages}
        date={date}
        setDate={setDate}
      />

    </main>
  );
};

export default Home;