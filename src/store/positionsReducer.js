import { createSlice } from '@reduxjs/toolkit'

export const positionsSlice = createSlice({
    name: 'positions',
    initialState: {
        dimensionBoundingBox: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        measureBoundingBox: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    },
    reducers: {
        setDimensionBoundingBox: (state, action) => {
            state.dimensionBoundingBox = action.payload;
        },
        setMeasureBoundingBox: (state, action) => {
            state.measureBoundingBox = action.payload
        }
    }
})

export const { setDimensionBoundingBox, setMeasureBoundingBox } = positionsSlice.actions

export default positionsSlice.reducer