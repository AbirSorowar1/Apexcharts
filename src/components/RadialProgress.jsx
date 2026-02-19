import Chart from 'react-apexcharts';

function RadialProgress({ value, label, color }) {
    const options = {
        chart: { type: 'radialBar', height: 220 },
        plotOptions: {
            radialBar: {
                hollow: { size: '60%' },
                dataLabels: {
                    name: { show: false },
                    value: { fontSize: '28px', color },
                },
                track: { background: '#e5e7eb' },
            },
        },
        colors: [color],
    };

    return (
        <div className="text-center">
            <Chart options={options} series={[value]} type="radialBar" height={220} />
            <p className="text-lg font-medium mt-2">{label}</p>
            <p className="text-2xl font-bold" style={{ color }}>{value}%</p>
        </div>
    );
}

export default RadialProgress;