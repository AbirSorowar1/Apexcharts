import Chart from 'react-apexcharts';

function AreaChart() {
    const options = {
        chart: { type: 'area', stacked: true, height: 380, toolbar: { show: false } },
        colors: ['#3b82f6', '#10b981'],
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth' },
        fill: { type: 'gradient', gradient: { opacityFrom: 0.6, opacityTo: 0.1 } },
        xaxis: { type: 'datetime', categories: ['2025-01-01', '2025-02-01', /* ... */ '2025-12-01'] },
    };

    const series = [
        { name: 'New Users', data: [30, 45, 60, 80, 110, 140, 170, 200, 230, 260, 290, 320] },
        { name: 'Active Users', data: [20, 35, 55, 75, 95, 120, 150, 180, 210, 240, 270, 300] },
    ];

    return <Chart options={options} series={series} type="area" height={380} />;
}

export default AreaChart;