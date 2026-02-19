import Chart from 'react-apexcharts';

function CategoryPieChart() {
    const options = {
        chart: { type: 'donut', height: 380 },
        labels: ['Electronics', 'Fashion', 'Home', 'Beauty', 'Books', 'Others'],
        colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'],
        legend: { position: 'bottom' },
        responsive: [{ breakpoint: 480, options: { chart: { width: 300 } } }],
    };

    const series = [44, 55, 41, 17, 15, 28];

    return <Chart options={options} series={series} type="donut" height={380} />;
}

export default CategoryPieChart;