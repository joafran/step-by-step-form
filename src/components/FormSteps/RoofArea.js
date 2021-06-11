import React, { useContext } from 'react';
import FormContext from '../../context/FormContext';

const RoofArea = () => {
    const { updateForm } = useContext(FormContext);

    return ( 
        <fieldset>
            <p>How sunny is your roof area?</p>
                <fieldset className="mb-2 d-flex align-items-center bg-light">
                    <input className="m-3" onChange={(e) => updateForm(e)} value="Full Sun" name="roofArea" defaultChecked type="radio" />
                    <label>Full Sun</label>
                </fieldset>
                <fieldset className="d-flex align-items-center bg-light">
                    <input className="m-3" onChange={(e) => updateForm(e)} value="Partial Sun" name="roofArea" type="radio" />
                    <label>Partial Sun</label>
                </fieldset>
                <fieldset className="d-flex align-items-center bg-light">
                    <input className="m-3" onChange={(e) => updateForm(e)} value="A Lot of Shade" name="roofArea" type="radio" />
                    <label>A Lot of Shade</label>
                </fieldset>
                <fieldset className="d-flex align-items-center bg-light">
                    <input className="m-3" onChange={(e) => updateForm(e)} value="Uncertain" name="roofArea" type="radio" />
                    <label>Uncertain</label>
                </fieldset>
        </fieldset>
     );
}
 
export default RoofArea;