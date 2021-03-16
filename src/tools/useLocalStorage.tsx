import React, {useState,useEffect} from 'react'

type ReturnType<T> = [
    T | any,
    React.Dispatch<React.SetStateAction<T | undefined>>
]

export const useLocalStorageState = <T,> (key: string, initialValue?: T) : ReturnType<T> => {
    const [state, setState] = useState<T | any>(()=>{
        try{
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : initialValue;
        }catch (e) {
            return initialValue;
        }
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state))
    },[state]);

    return [state,setState]
};

