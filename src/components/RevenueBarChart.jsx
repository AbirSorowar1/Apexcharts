import Chart from 'react-apexcharts';

function RevenueBarChart() {
    const options = {
        chart: { type: 'bar', height: 380, toolbar: { show: false } },
        plotOptions: { bar: { borderRadius: 6, columnWidth: '55%' } },
        dataLabels: { enabled: false },
        stroke: { show: true, width: 2, colors: ['transparent'] },
        xaxis: { categories: ['Facebook', 'Google', 'Direct', 'Email', 'Referral', 'Others'] },
        yaxis: { title: { text: 'Revenue (৳ thousand)' } },
        fill: { opacity: 1 },
        colors: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'],
        tooltip: { y: { formatter: (val) => `৳ ${val}k` } },
    };

    const series = [
        { name: '2025', data: [76, 85, 101, 98, 87, 105] },
        { name: '2024', data: [44, 55, 57, 56, 61, 58] },
    ];

    return <Chart options={options} series={series} type="bar" height={380} />;
}

export default RevenueBarChart;