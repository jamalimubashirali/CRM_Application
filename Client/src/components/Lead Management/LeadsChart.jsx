import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";

const LeadsChart = ({ data }) => {
  // This portion gets the status values
  const chartData = useMemo(() => {
    const leadStatusCounts = {
      newLeads: 0,
      lostLeads: 0,
      inProgressLeads: 0,
      convertedLeads: 0,
    };

    // Count of leads for each status
    data.forEach((element) => {
      if (element.status === "New") leadStatusCounts.newLeads += 1;
      else if (element.status === "Lost") leadStatusCounts.lostLeads += 1;
      else if (element.status === "Converted") leadStatusCounts.convertedLeads += 1;
      else if (element.status === "In Progress") leadStatusCounts.inProgressLeads += 1;
    });

    // Object to be used as the prop in the Bar component to establish the bar object
    return {
      labels: ["New", "Converted", "In Progress", "Lost"],
      datasets: [
        {
          label: "Leads",
          data: [
            leadStatusCounts.newLeads,
            leadStatusCounts.convertedLeads,
            leadStatusCounts.inProgressLeads,
            leadStatusCounts.lostLeads,
          ],
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          barThickness: 90,
          maxBarThickness: 100,
          hoverBackgroundColor: "rgba(75, 192, 192, 0.8)",
        },
      ],
    };
  }, [data]); 

  return (
    <div className="p-6 w-full mx-auto shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Leads Statistics</h2>
      <div className="relative h-96">
        <Bar
          data={chartData}
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
            }
            }}
        />
      </div>
    </div>
  );
}

export default LeadsChart
