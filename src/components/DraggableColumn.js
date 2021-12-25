import Draggable from 'react-draggable';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addDimension, addMeasure } from '../store/columnsReducer';
import React from 'react';


export default function DraggableColumn(props) {
    const nodeRef = React.useRef(null);
    const [currentPosition, setCurrentPosition] = useState({
        x: 0,
        y: 0
    })
    const targetPositions = useSelector(state => state.positions)
    const dimension = useSelector(state => state.columns.dimension)
    const dispatch = useDispatch();
    const onStop = (event) => {
        if (isInsideBoundingBox(event.clientX, event.clientY, targetPositions.dimensionBoundingBox) && !dimension && props.column.function === 'dimension') {
            dispatch(addDimension(props.column.name))
        }
        else if (isInsideBoundingBox(event.clientX, event.clientY, targetPositions.measureBoundingBox) && props.column.function === 'measure') {
            dispatch(addMeasure(props.column.name))
        }
        else {
            setCurrentPosition({
                x: 0,
                y: 0
            })
        }
    }
    return (
        <Draggable
            axis="both"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={currentPosition}
            grid={[10, 10]}
            scale={1}
            nodeRef={nodeRef}
            onStop={onStop}
        >
            <button ref={nodeRef} type="button" className=" handle list-group-item list-group-item-action">
                {props.column.name}
            </button>
        </Draggable>
    )
}


function isInsideBoundingBox(x, y, boundingBox) {
    return (x >= boundingBox.x && x <= boundingBox.x + boundingBox.width)
        && (y >= boundingBox.y && y <= boundingBox.y + boundingBox.height)
}