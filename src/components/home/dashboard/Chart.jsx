import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const ApexChart = () => {
  const [series] = useState([
    { name: "series1", data: [31, 40, 28, 51, 42, 109, 100] },
    { name: "series2", data: [11, 32, 45, 32, 34, 52, 41] },
  ]);

  const [options] = useState({
    chart: {
      height: 280,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ["#075985", "#ed2224"],
    },
    stroke: {
      curve: "smooth",
      colors: ["#075985", "#ed2224"],
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    markers: {
      colors: ["#075985", "#ed2224"],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options} // Pass the correct options object
          series={series}
          type="area"
          height={280}
          width={"100%"}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
