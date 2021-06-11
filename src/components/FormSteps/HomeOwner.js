import React, { useContext } from 'react';
import FormContext from '../../context/FormContext';

const HomeOwner = () => {
    const { updateForm, formState } = useContext(FormContext);

    return ( 
        <fieldset>
            <p>Are you a homeowner?</p>
                <fieldset className="mb-2 d-flex align-items-center bg-light">
                    <input className="m-3" onChange={(e) => updateForm(e)} value="true" name="homeOwner" type="radio" checked={JSON.parse(formState.homeOwner)} />
                    <label>Yes</label>
                </fieldset>
                <fieldset className="d-flex align-items-center bg-light">
                    <input className="m-3" onChange={(e) => updateForm(e)} value="false" name="homeOwner" type="radio" checked={!JSON.parse(formState.homeOwner)} />
                    <label>No</label>
                </fieldset>
        </fieldset>
     );
}
 
export default HomeOwner;