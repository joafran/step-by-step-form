import React, { useContext } from 'react';
import FormContext from '../../context/FormContext';

const Email = () => {
    const { updateForm } = useContext(FormContext);

    return ( 
        <div>
            <p>What email address should your results be sent to?</p>
            <input className="form-control" onChange={(e) => updateForm(e)} type="email" placeholder="Email Address" />
        </div>
     );
}
 
export default Email;