import { configureStore } from '@reduxjs/toolkit'
import columnsReducer from './columnsReducer';
import positionsReducer from './positionsReducer';
export default configureStore({
    reducer: {
        columns: columnsReducer,
        positions: positionsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
            },
        }),
})