import Chart from 'react-apexcharts';

function SalesLineChart() {
    const options = {
        chart: { type: 'area', height: 380, toolbar: { show: false } },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth', width: 3 },
        fill: {
            type: 'gradient',
            gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.1, stops: [0, 90, 100] },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        title: { text: '2025 Sales', align: 'left', style: { fontSize: '16px' } },
        colors: ['#3b82f6'],
        tooltip: { x: { format: 'dd/MM/yy' } },
    };

    const series = [{ name: 'Sales', data: [44, 55, 57, 68, 81, 94, 110, 130, 145, 160, 180, 210] }];

    return <Chart options={options} series={series} type="area" height={380} />;
}

export default SalesLineChart;