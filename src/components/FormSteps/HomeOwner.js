import React, { useContext } from 'react';
import FormContext from '../../context/FormContext';

const HomeOwner = () => {
    const { updateForm } = useContext(FormContext);

    return ( 
        <div>
            <p>Are you a homeowner?</p>
                <div className="mb-2 d-flex align-items-center bg-light">
                    <input className="m-3" onChange={(e) => updateForm(e)} value="Yes" name="homeOwner" type="radio" defaultChecked/>
                    <label>Yes</label>
                </div>
                <div className="d-flex align-items-center bg-light">
                    <input className="m-3" onChange={(e) => updateForm(e)} value="No" name="homeOwner" type="radio"/>
                    <label>No</label>
                </div>
        </div>
     );
}
 
export default HomeOwner;