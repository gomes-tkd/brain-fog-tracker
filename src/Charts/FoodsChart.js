import React from 'react';
import { HeatMapGrid } from 'react-grid-heatmap';
import format from "date-fns/format";

const FoodsChart = ({ foods }) => {
  function sortByDate(f1, f2) {
    return f1.date.toDate().getTime() - f2.date.toDate().getTime();
  }

  const xLabels = foods.sort(sortByDate).map(({ date }) => format(date.toDate(), "Pp"));
  const yLabels = [
    "Bread",
    "Sugary",
    "Nuts",
    "Grains",
    "Veggie",
    "Fruit",
    "Beef",
    "Poultry",
    "Pork",
    "Fish"
  ];
  const data = [
    "Bread",
    "Sugary",
    "Nuts",
    "Grains",
    "Veggie",
    "Fruit",
    "Beef",
    "Poultry",
    "Pork",
    "Fish"
  ].map((food) => (
    foods.map(({foods}) => foods.includes(food) ? 100 : 0)
  ));

  console.log(data);

  return (
    <div
      style={{
        width: "100%",
        fontFamily: "sans-serif"
      }}
    >
      <h4 className={"mt-5 mb-4 text-center"}>Foods Graph</h4>
      <HeatMapGrid
        xLabels={xLabels}
        yLabels={yLabels}
        data={data}
        xLabelsStyle={() => ({
          color: "#777",
          fontSize: ".8rem"
        })}
        yLabelsStyle={() => ({
          fontSize: ".7rem",
          textTransform: "uppercase",
          color: "#777"
        })}
        cellStyle={(_x, _y, ratio) => ({
          background: `rgb(12, 160, 44, ${ratio})`,
          fontSize: ".8rem",
          color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
        })}
        cellHeight="2rem"
        xLabelsPos="bottom"
        yLabelsPos="left"
      />
    </div>
  );
};

export default FoodsChart;