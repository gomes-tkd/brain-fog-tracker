import React from 'react';
import { HeatMapGrid } from 'react-grid-heatmap';
import format from "date-fns/format";

const BeveragesChart = ({ beverages }) => {
  function sortByDate(b1, b2) {
    return b1.date.toDate().getTime() - b2.date.toDate().getTime();
  }

  const xLabels = beverages.sort(sortByDate).map(({ date }) => format(date.toDate(), "Pp"));
  const yLabels = ['Coffee', 'Soft Drink', 'Alcohol'];
  const data = ["Coffee", "Soft Drink", "Alcohol"].map((beverage) => (
    beverages.map(({ beverages }) => beverages.includes(beverage) ? 100 : 0)
  ));

  return (
    <div
      style={{
        width: "100%",
        fontFamily: "sans-serif"
      }}
    >
      <h4 className={"mt-5 mb-4 text-center"}>Beverages Graph</h4>
      <HeatMapGrid
        xLabels={xLabels}
        yLabels={yLabels}
        data={data}
        xLabelsStyle={() => ({
          color: '#777',
          fontSize: '.8rem'
        })}
        yLabelsStyle={(index) => ({
          fontSize: '.7rem',
          textTransform: 'uppercase',
          color: '#777'
        })}
        cellStyle={(_x, _y, ratio) => ({
          background: `rgb(12, 160, 44, ${ratio})`,
          fontSize: '.8rem',
          color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`
        })}
        cellHeight='2rem'
        xLabelsPos='bottom'
        yLabelsPos='left'
      />
    </div>
  );
};

export default BeveragesChart;