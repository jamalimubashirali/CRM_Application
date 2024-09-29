import React from "react";
import { Line } from "react-chartjs-2";

const dummyDates = [
  {
    label: "9-20-2024",
    value: 50,
  },
  {
    label: "9-22-2024",
    value: 30,
  },
  {
    label: "9-25-2024",
    value: 80,
  },
  {
    label: "9-27-2024",
    value: 100,
  },
  {
    label: "9-29-2024",
    value: 20,
  },
  {
    label: "9-30-2024",
    value: 150,
  },
];

const CustomerChart = ({ data }) => {
  // Get customer Data Per Day
  const getChartData = () => {
    const perDay = [];
    const labels = new Set();
  data
    .map((customer) => customer.createdAt.split("T")[0])
    .forEach((date) => labels.add(date));
  for (const value of labels) {
    let temp = 0;
    data.map((customer) => {
      if(customer.createdAt.split('T')[0] === value){
        temp++;
      }
    })
    perDay.push({
      label : value,
      data : temp
    })
  }
  return perDay;
  }
  const chartData = getChartData();
  return (
    <div className="p-6 w-full mx-auto shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Customer Statistics
      </h2>
      <div className="relative h-96">
        <Line
          data={{
            labels: dummyDates.map((data) => data.label),
            datasets: [
              {
                label: "Customer Activity",
                data: dummyDates.map((data) => data.value),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: "rgba(75, 192, 192, 1)",
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: "#374151",
                },
              },
              x: {
                ticks: {
                  color: "#374151",
                },
              },
            },
            plugins: {
              legend: {
                display: true,
                position: "top",
                labels: {
                  color: "#374151",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default CustomerChart;
