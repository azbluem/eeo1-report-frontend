import { Chart } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import PropTypes from 'prop-types'

const Graph = ({ chartData,type='pie'}) => {
  const typeObj = {
    gender:'pie',
    race:'pie',
    job:'bar'
  }
  const pieOptions = {
    yAxes:{
      grid: {
        drawBorder: true,
        color: "#00FF00"
      },
      ticks:{
        color:'white',
        },
      },
    xAxes:{
      grid: {
        drawBorder: true,
        color: "#00FF00"
      },
      ticks:{
      color:'white',
    }}
  }
  let additionalChartOptions = {
  }
  // if (typeObj[type]==='bar'){
  //   additionalChartOptions = pieOptions
  // }
  return (
    <div className="chart-container">
      {/* <h2 style={{ textAlign: "center" }}>Data for year</h2> */}
      <Chart
        type={typeObj[type]}
        data={chartData}
        plugins={[ChartDataLabels]}
        options={{
          // indexAxis:'y',
          scaleShowValues: true,
          scales:additionalChartOptions,
          plugins: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: false,
              text: "Users Gained between 2016-2020"
            },
            
            legend:{
              labels:{
                color:'gray',
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
                        return null
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

Graph.propTypes = {
  chartData:PropTypes.object.isRequired,
}


export default Graph