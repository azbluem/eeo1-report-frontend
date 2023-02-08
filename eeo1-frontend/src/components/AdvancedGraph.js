import { Chart } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';

const AdvancedGraph = ({ chartData,type='job'}) => {
//   const typeObj = {
//     gender:'pie',
//     race:'bar',
//     job:'bar'
//   }
  return (
    <div className="chart-container">
      {/* <h2 style={{ textAlign: "center" }}>Data for year</h2> */}
      <Chart
        type={'pie'}
        data={chartData}
        plugins={[ChartDataLabels]}
        options={{
          plugins: {
            // responsive: true,
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
                color:'white',
                // font:{
                //   size: 18
                // }
              }
            },
            datalabels: {
                textAlign:'end',
                formatter: (value, ctx) => {
                    console.log(ctx)
                    let sums = []
                    for (const subSet of ctx.chart.data.datasets)
                        {let subsum = 0;
                        let dataArr = subSet.data;
                        dataArr.map(data => {
                            subsum += data;
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

export default AdvancedGraph