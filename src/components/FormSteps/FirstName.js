import React, { useContext } from 'react';
import FormContext from '../../context/FormContext';

const FirstName = () => {
    const { updateForm, formState } = useContext(FormContext);
    
    return ( 
        <fieldset className="d-flex flex-column">
            <label className="mb-2">What's your first name?</label>
            <input value={formState.firstName} name="firstName" className="form-control" type="text" minLength="3" maxLength="15" required onChange={ (e) => updateForm(e)} />
        </fieldset>
     );
}
 
export default FirstName;