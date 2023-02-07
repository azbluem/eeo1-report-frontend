import { Chart } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

const Graph = ({ chartData,type='pie'}) => {
  const typeObj = {
    gender:'pie',
    race:'pie',
    job:'bar'
  }
  return (
    <div className="chart-container">
      {/* <h2 style={{ textAlign: "center" }}>Data for year</h2> */}
      <Chart
        type={typeObj[type]}
        data={chartData}
        plugins={[ChartDataLabels]}
        options={{
          plugins: {
            // responsive: true,
            maintainAspectRatio: false,
            title: {
              display: false,
              text: "Users Gained between 2016-2020"
            },
            scales:{
              y:{
                stacked:true,
                ticks:{
                  color:'white'
                }},
              x:{stacked:true,
                ticks:{
                color:'white'
              }}
            },
            legend:{
              labels:{
                color:'white',
                font:{
                  size: 18
                }
              }
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