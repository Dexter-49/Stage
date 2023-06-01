// third-party
import { configureStore } from '@reduxjs/toolkit';

// project import
import userReducer from './user';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //

const store = configureStore({
    reducer: {
        user:userReducer
    }
});

const { dispatch } = store;

export { store, dispatch };