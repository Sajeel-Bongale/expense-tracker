import ChartBar from "./ChartBar";
import './Chart.css'

export const Chart = props => {

    return (
        <div className="chart">
            {
                props.dataPoints.map(
                    dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} label={dataPoint.label} maxValue={null}/>
                )
            }
        </div>
    )
}

export default Chart;