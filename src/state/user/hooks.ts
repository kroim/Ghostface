import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../index';
import { setUserAddress, setLogin } from './actions';

export function useUserAddress(): [string, (address: string) => void] {
    const dispatch = useDispatch<AppDispatch>();
    const userAddress = useSelector<AppState, AppState['user']['address']>(state => {
        return state.user.address;
    });
    const updateUserAddress = useCallback((address: string) => {
        dispatch(setUserAddress({ address }))
    }, [dispatch]);

    return [userAddress, updateUserAddress];
}

export function useLogin(): [boolean, (login: boolean) => void] {
    const dispatch = useDispatch<AppDispatch>()
    const login = useSelector<AppState, AppState['user']['login']>(state => {
        return state.user.login;
    });
    const updateLogin = useCallback((login: boolean) => {
        dispatch(setLogin({ login }))
    }, [dispatch])

    return [login, updateLogin];
}
