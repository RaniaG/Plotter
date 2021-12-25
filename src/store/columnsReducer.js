import { createSlice } from '@reduxjs/toolkit'

export const columnsSlice = createSlice({
    name: 'columns',
    initialState: {
        dimension: null,
        measures: []
    },
    reducers: {
        addDimension: (state, action) => {
            state.dimension = action.payload;
        },
        addMeasure: (state, action) => {
            state.measures = [...state.measures, action.payload];
        },
        clearDimension: (state) => {
            state.dimension = null;
        },
        clearMeasures: (state) => {
            state.measures = [];
        }
    }
})

// Action creators are generated for each case reducer function
export const { addDimension, addMeasure, clearDimension, clearMeasures } = columnsSlice.actions

export default columnsSlice.reducer