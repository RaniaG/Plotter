import React, { useRef, useEffect } from 'react';
export default function Control(props) {
    const controlRef = useRef(null);
    useEffect(() => {
        props.getBoundingBox(controlRef.current.getBoundingClientRect());
    });
    return (
        <div className="input-group mb-3">
            <div className="form-control list-group list-group-horizontal p-2" ref={controlRef}  >
                {
                    props.data?.map((e, i) =>
                        <li className="list-group-item" key={i} >{e}</li>
                    )
                }
            </div>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={props.onClear}>Clear</button>
        </div>
    );
}