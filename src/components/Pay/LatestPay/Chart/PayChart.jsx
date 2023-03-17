import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(CategoryScale);

const PayChart = () => {
	const [data, setData] = useState({
		labels: ['Take Home', 'Taxes', 'Deductions'],
		datasets: [
			{
				label: 'Latest Pay Statement',
				/* prettier-ignore */
				data: [1399.40, 320.60, 17.20],
				backgroundColor: ['#00bb00', '#bb0000', '#F5E01C'],
				hoverOffset: 50,
				cutout: 75,
			},
		],
	});
	return (
		<>
			<Doughnut
				data={data}
				options={{
					plugins: {
						legend: {
							display: false,
							labels: {
								color: 'black',
							},
						},
					},
				}}
			/>
		</>
	);
};

export default PayChart;
