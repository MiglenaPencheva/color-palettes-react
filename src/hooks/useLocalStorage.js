import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            let item = localStorage.getItem(key);
            
            if (typeof item === 'string') {
                return item;
            } else if (typeof item === 'object') {
                return JSON.parse(item);
            } else {
                return initialValue;
            }
            
            // return item
            //     ? JSON.parse(item)
            //     : initialValue;

        } catch (err) {
            console.log(err);
            return initialValue;
        }
    });

    const setItem = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            
            setState(value);
        } catch (error) {
            console.log(error);
        }
    };

    return [
        state,
        setItem
    ];
};

export default useLocalStorage;