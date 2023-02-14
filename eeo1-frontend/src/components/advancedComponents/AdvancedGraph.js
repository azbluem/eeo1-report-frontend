import { Chart } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import PropTypes from 'prop-types'

const AdvancedGraph = ({ chartData}) => {
  return (
    <div className="chart-container">
      <Chart
        type={'pie'}
        data={chartData}
        plugins={[ChartDataLabels]}
        options={{
          plugins: {
            maintainAspectRatio: false,
            title: {
              display: false,
              text: "DEI Visualizer Data"
            },
            scales:{
              y:{
                stacked:true,
                ticks:{
                  color:'white',
                  format:{ style:'percent'
                  }
                }},
              x:{stacked:true,
                ticks:{
                color:'white'
              }}
            },
            legend:{
              labels:{
                color:'gray',
              }
            },
            datalabels: {
                textAlign:'end',
                formatter: (value, ctx) => {
                    let sums = []
                    for (const subSet of ctx.chart.data.datasets)
                        {let subsum = 0;
                        let dataArr = subSet.data;
                        dataArr.map(data => {
                            subsum += data;
                            return null
                        });
                        sums.push(subsum)
                    }
                    let percentage = (value*100 / sums[ctx.datasetIndex]).toFixed(0)+"%";
                        return [String(ctx.dataset.label).slice(0,5),percentage];
                },
                color: '#fff',
            }
          }
        }}
      />
    </div>
  );
}

AdvancedGraph.propTypes = {
    chartData:PropTypes.object.isRequired,
}

export default AdvancedGraph