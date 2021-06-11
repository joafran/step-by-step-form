import React, { useContext } from 'react';
import FormContext from '../../context/FormContext';

const LastName = () => {
    const { updateForm, formState } = useContext(FormContext);
    
    return ( 
        <fieldset className="d-flex flex-column">
            <label className="mb-2">What's your last name?</label>
            <input value={formState.lastName} name="lastName" className="form-control" type="text" minLength="3" maxLength="10" required onChange={ (e) => updateForm(e)} />
        </fieldset>
     );
}
 
export default LastName;