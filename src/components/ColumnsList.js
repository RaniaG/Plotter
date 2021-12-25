import DraggableColumn from "./DraggableColumn";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
const axios = require('axios');

export default function ColumnsList() {
    const columns = useSelector(state => state.columns);
    const [allColumns, setAllColumns] = useState([]);
    useEffect(() => {
        axios.get('https://plotter-task.herokuapp.com/columns')
            .then(function (response) {
                setAllColumns(response.data.map((e, i) => ({
                    ...e,
                    id: i
                })))
            })
            .catch(function (error) {
                console.log(error);
            })
    })
    return (
        <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="list-group">
                    {
                        allColumns.filter(col =>
                            columns.dimension !== col.name &&
                            !columns.measures.includes(col.name)
                        ).map(e =>
                            <DraggableColumn column={e} key={e.id} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}