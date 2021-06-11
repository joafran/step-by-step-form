import React, { useContext, useState } from 'react';
import FormContext from '../../context/FormContext';

const Range = () => {
    const { updateForm } = useContext(FormContext);
    const [min, max] = [10, 800];
    const [value, setValue] = useState(max / 2);

    const updateValue = (e) => {
        setValue(e.target.value)
        updateForm(e);
    }

    return ( 
        <fieldset>
            <p>How much is your average monthly electric bill?</p>
            <h4 className="d-flex justify-content-center">${value}</h4>
            <input name="range" className="col-12" type="range" onChange={(e) => updateValue(e)} min={min} max={max} value={value} />
            <div className="d-flex justify-content-between">
                <p>${min}</p>
                <p>${max}+</p>
            </div>
        </fieldset>
     );
}
 
export default Range;