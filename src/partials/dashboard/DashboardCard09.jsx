import React from 'react';
import Tooltip from '../../components/Tooltip';
import BarChart from '../../charts/BarChart02';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard09() {

  const chartData = {
    labels: [
      '12-01-2022', '01-01-2023', '02-01-2023',
      '03-01-2023', '04-01-2023', '05-01-2023',
      '06-01-2023', '07-01-2023', '08-01-2023',
      '09-01-2023', '10-01-2023', '11-01-2023',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Stack 1',
        data: [
          620303, 923300, 626600, 887700, 452600, 920470, 625700, 927050, 626600, 883300, 542200, 942200,
        ],
        backgroundColor: tailwindConfig().theme.colors.violet[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.violet[600],
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
      // Blue bars
      {
        label: 'Stack 2',
        data: [
          -301030, -262300, -113350, -240040, -75005, -120400, 0, -2600, -432520, -210220, -125200, -115000,
        ],
        backgroundColor: tailwindConfig().theme.colors.violet[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.violet[300],
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Sales VS Refunds</h2>
        {/* <Tooltip className="ml-2" size="lg">
          <div className="text-sm">Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
        </Tooltip> */}
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">Rs 6,865,796</div>
          <div className="text-sm font-medium text-red-700 px-1.5 bg-red-500/20 rounded-full">-34%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={595} height={248} />
      </div>
    </div>
  );
}

export default DashboardCard09;
