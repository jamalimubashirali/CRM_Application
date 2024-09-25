import React from 'react';
import { Chart as ChartJS , defaults } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'gray';
const dummyData = [
  {
    label: 'Customers',
    value: 400,
  },
  {
    label: 'Users',
    value: 320,
  },
  {
    label: 'Leads',
    value: 100,
  },
];

const Charts = () => {
  return (
    <div className="w-full h-auto md:h-[300px]">
      <Bar
        data={{
          labels: dummyData.map((data) => data.label),
          datasets: [
            {
              label: 'Stats',
              data: dummyData.map((data) => data.value),
              backgroundColor: '#50b55a',
              borderRadius: 10,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false, // Maintain aspect ratio for responsiveness
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true, // Ensure y-axis starts at 0
                },
              },
            ],
          },
          plugins : {
            title : {
              text : "Application Details",
            },
          },
        }}
      />
    </div>
  );
};

export default Charts;
