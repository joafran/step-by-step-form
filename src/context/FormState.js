import React, { useState } from 'react';
import FormContext from './FormContext';

const FormState = ({children}) => {
    const [formState, setFormState] = useState({
        mail: '',
        select: 'City Of Mesa',
        homeOwner: 'Yes',
        range: '',
    })

    const updateForm = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }
    
    return ( 
        <FormContext.Provider
            value={{
                updateForm
            }}
        >
            {children}
        </FormContext.Provider>

     );
}
 
export default FormState;