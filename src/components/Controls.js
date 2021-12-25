import Control from './Control';
import { useDispatch, useSelector } from 'react-redux'
import { setDimensionBoundingBox, setMeasureBoundingBox } from '../store/positionsReducer';
import { clearDimension, clearMeasures } from '../store/columnsReducer';
function ControlsForm() {
    const dispatch = useDispatch()
    const measures = useSelector(state => state.columns.measures);
    const dimension = useSelector(state => state.columns.dimension);
    const dimensions = dimension ? [dimension] : null;
    const getDimensionBoundingBox = (boundingBox) => {
        dispatch(setDimensionBoundingBox({
            x: boundingBox.x,
            y: boundingBox.y,
            width: boundingBox.width,
            height: boundingBox.height,
        }));
    }
    const getMeasureBoundingBox = (boundingBox) => {
        dispatch(setMeasureBoundingBox({
            x: boundingBox.x,
            y: boundingBox.y,
            width: boundingBox.width,
            height: boundingBox.height,
        }));
    }

    const onDimensionClear = () => {
        dispatch(clearDimension());
    }
    const onMeasuresClear = () => {
        dispatch(clearMeasures());
    }
    return (
        <>
            <Control controlName="Dimension" getBoundingBox={getDimensionBoundingBox} data={dimensions} onClear={onDimensionClear} />
            <Control controlName="Measure" getBoundingBox={getMeasureBoundingBox} data={measures} onClear={onMeasuresClear} />
        </>
    );
}

export default ControlsForm;