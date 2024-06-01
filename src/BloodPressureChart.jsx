/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const BloodPressureChart = ({ labels, systolicData, diastolicData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Systolic",
            data: systolicData,
            borderColor: "rgba(219, 77, 153, 1)",
            backgroundColor: "rgba(219, 77, 153, 0.2)",
            pointBackgroundColor: "rgba(219, 77, 153, 1)",
            fill: false,
            tension: 0.4,
          },
          {
            label: "Diastolic",
            data: diastolicData,
            borderColor: "rgba(153, 102, 255, 1)",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            pointBackgroundColor: "rgba(153, 102, 255, 1)",
            fill: false,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "right",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
            },
          },
        },
        scales: {
          y: {
            min: 60,
            max: 180,
            ticks: {
              stepSize: 20,
            },
          },
        },
      },
    });
    return () => {
      myChart.destroy();
    };
  }, [labels, systolicData, diastolicData]);

  return <canvas ref={chartRef}></canvas>;
};

export default BloodPressureChart;
