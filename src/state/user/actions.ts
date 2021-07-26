import {createAction} from "@reduxjs/toolkit"

export const setUserAddress = createAction<{address: string}>('user/address');
export const setLogin = createAction<{login: boolean}>('user/login');