import React, { useReducer, useState } from 'react';
import FormContext from './FormContext';
import FormReducer from './FormReducer';

const FormState = ({children}) => {
    const [formState, setFormState] = useState({
        mail: '',
        select: 'City Of Mesa',
        homeOwner: 'Yes',
        range: '',
    })
    const initialState = {
    }

    const [state, dispatch] = useReducer(FormReducer, initialState);

    const updateForm = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
        console.log(formState)
    }
    
    return ( 
        <FormContext.Provider
            value={{
                formData: state,
                updateForm
            }}
        >
            {children}
        </FormContext.Provider>

     );
}
 
export default FormState;