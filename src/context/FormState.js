import React, { useState } from 'react';
import FormContext from './FormContext';

const FormState = ({children}) => {
    const [formState, setFormState] = useState({
        homeOwner: true,
        select: 'City Of Mesa',
        range: '400',
        mail: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        roofArea: 'Full Sun'
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
                formState,
                updateForm
            }}
        >
            {children}
        </FormContext.Provider>

     );
}
 
export default FormState;