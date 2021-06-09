import React, { useContext } from 'react';
import FormContext from '../../context/FormContext';

const PhoneNumber = () => {
    const { updateForm } = useContext(FormContext);
    
    return ( 
        <div>
            <label>Phone Number</label>
            <input type="number" onChange={ (e) => updateForm(e)} />
        </div>
     );
}
 
export default PhoneNumber;