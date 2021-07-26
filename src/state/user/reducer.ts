import { createReducer } from '@reduxjs/toolkit';
import {setUserAddress, setLogin} from './actions';

const initialState = {
    chainId: 97,
    address: '',
    login: false,
    errorMsg: ''
};

export default createReducer(initialState, (builder) =>
    builder
    .addCase(setUserAddress, (state, action) => {
        state.address = action.payload.address;
    })
    .addCase(setLogin, (state, action) => {
        state.login = action.payload.login;
    })
)
