import ControlsForm from './Controls';
import ChartContainer from './ChartContainer';
import ColumnsList from './ColumnsList';

export default function Plotter() {
    return (
        <div className="row">
            <div className="col-md-3">
                <ColumnsList />
            </div>
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-10">
                        <ControlsForm />
                    </div>
                    <div className="col-md-10">
                        <ChartContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}