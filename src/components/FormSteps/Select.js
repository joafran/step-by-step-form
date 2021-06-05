import React, { useContext } from 'react';
import FormContext from '../../context/FormContext';

const Select = () => {
    const { updateForm } = useContext(FormContext);

    return ( 
        <div>
            <p>Who's your electrical provider?</p>
            <select onChange={(e) => updateForm(e)} className="form-select p-2 rounded">
                <option value="City of Mesa">City of Mesa</option>
                <option value="Dixie Escalante REA">Dixie Escalante REA</option>
                <option value="Ak-Chin Electric Utility Authority">Ak-Chin Electric Utility Authority</option>
            </select>
                
        </div>
     );
}
 
export default Select;