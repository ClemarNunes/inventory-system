// import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../redux/reducers/CartReducer';
// const CartReducer = require('../redux/reducers/CartReducer');
const configureStore = require('@reduxjs/toolkit').configureStore
 

// export const store = configureStore({
//     reducer:{
//         CartReducer
//     },
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
//         immutableCheck: false,
//    })
// });


// export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer:{
        CartReducer
    }
});

  export type RootState = ReturnType<typeof store.getState>;