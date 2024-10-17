import React from 'react';
import { chartAreaGradient } from '../../charts/ChartjsConfig';
import LineChart from '../../charts/LineChart02';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';
function DashboardCard08() {

  const chartData = {
    labels: Array.from({ length: 12 }, (_, i) => `Week${i + 1}`), // W1, W2, ..., W12
    datasets: [
      {
        label: 'Current Quarter',
        data: [7321, 18412, 9323, 20943, 9045, 17049, 25554, 10321, 17412, 8323, 21049, 13554],
        borderColor: tailwindConfig().theme.colors.violet[500],
        fill: false,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.violet[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
      {
        label: 'Previous Quarter',
        data: [5321, 17412, 6323, 25943, 8045, 27049, 5554, 16321, 7412, 18323, 9049, 23554],
        borderColor: tailwindConfig().theme.colors.sky[500],
        fill: false,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.sky[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.sky[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Sales Over Time (all stores)</h2>
      </header>
      <LineChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard08;
