import React from 'react';
import BarChart from '../../charts/BarChart04'; // Replacing LineChart with BarChart

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard03() {
  const chartData = {
    labels: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
    datasets: [
      {
        label: 'Peak Hours',
        data: [150, 230, 390, 450, 760, 810, 970, 801, 792, 520, 401, 270, 202], // Example peak hours data
        backgroundColor: tailwindConfig().theme.colors.violet[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.violet[600],
        barPercentage: 0.7,
        categoryPercentage: 0.6,
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Peak Hours</h2>
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Opening Hours: 11:00-23:00</div>
      </div>
      {/* Bar chart */}
      <div className="grow max-sm:max-h-[160px] xl:max-h-[128px]">
        <BarChart data={chartData} width={400} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard03;
