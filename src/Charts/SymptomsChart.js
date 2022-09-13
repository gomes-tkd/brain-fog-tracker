import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import  format  from "date-fns/format";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Symptoms Graph',
    },
  },
};

const SymptomsChart = ({symptoms}) => {
  function sortByDate(s1, s2) {
    return s1.date.toDate().getTime() - s2.date.toDate().getTime();
  }

  const data = {
    labels: symptoms.sort(sortByDate).map(symptom => format(symptom.date.toDate(), "Pp")),
    datasets:
      [
        {
          label: "Fogginess",
          data: symptoms.sort(sortByDate).map(({fogginess}) => fogginess),
          borderColor: "#06f",
          backgroundColor: "rgba(0, 82, 204, 0.5)",
        },
        {
          label: "Anxiety",
          data: symptoms.sort(sortByDate).map(({anxiety}) => anxiety),
          borderColor: "#33cc33",
          backgroundColor: "rgba(41, 163, 41, 0.5)",
        },
        {
          label: "Headache",
          data: symptoms.sort(sortByDate).map(({headache}) => headache),
          borderColor: "#f03",
          backgroundColor: "rgba(204, 0, 0, 0.5)",
        },
        {
          label: "Fatigue",
          data: symptoms.sort(sortByDate).map(({fatigue}) => fatigue),
          borderColor: "#33cc33",
          backgroundColor: "rgba(41, 163, 41, 0.5)",
        },
        {
          label: "Gut",
          data: symptoms.sort(sortByDate).map(({gut}) => gut),
          borderColor: "#33cc33",
          backgroundColor: "rgba(41, 163, 41, 0.5)",
        },
      ],
  };

  return (
    <div>
      <Line data={data} options={options}/>
    </div>
  );
};

export default SymptomsChart;