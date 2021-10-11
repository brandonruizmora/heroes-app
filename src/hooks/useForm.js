import { useState } from 'react';

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const reset = function () {
        setValues(initialState);
    }

    const handleInputChange = function ({ target }) {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [ values, handleInputChange, reset ];
    
}