import {useState} from "react";
import { Chart } from "react-chartjs-2";

const Graph = ({ chartData,type }) => {
  const typeObj = {
    gender:'pie',
    race:'pie',
    job:'bar'
  }
  
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Data for year</h2>
      <Chart
        type={typeObj[type]}
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value*100 / sum).toFixed(0)+"%";
                    return percentage;
                },
                color: '#fff',
            }
          }
        }}
      />
    </div>
  );
}

export default Graph