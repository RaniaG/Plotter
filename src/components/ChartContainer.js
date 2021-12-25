import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Chart as ChartJS } from 'chart.js/auto'
import { Line, Chart } from 'react-chartjs-2';
const axios = require('axios');

export default function ChartContainer() {

    const measures = useSelector(state => state.columns.measures);
    const dimension = useSelector(state => state.columns.dimension);
    const [xAxis, setXAxis] = useState([]);
    const [yAxis, setYAxis] = useState([]);
    useEffect(() => {
        if (measures.length > 0 && dimension)
            axios.post('https://plotter-task.herokuapp.com/data', {
                measures: measures,
                dimension: dimension
            }).then((result) => {
                if (!result || !result.data || result.data.length < 2) return;
                setXAxis(result.data[0].values)
                setYAxis(
                    result.data.filter((e, i) => i > 0).map((e, i) => {
                        return {
                            id: i + 1,
                            label: e.name,
                            data: [...e.values],
                            backgroundColor: "#" + ((1 << 24) * Math.random() | 0).toString(16)
                        }
                    })
                )
            }).catch((err) => console.log(err));
        else {
            setXAxis([]);
            setYAxis([]);
        }
    }, [measures, dimension])

    return (
        <div className="row">
            <div className="col-md-12">
                <Line
                    datasetIdKey='id'
                    data={{
                        labels: xAxis,
                        datasets: yAxis
                    }}
                    options={{
                        plugins: {
                            tooltip: {
                                enabled: true
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}