import React, { useContext } from 'react';
import FormContext from '../../context/FormContext';

const Email = () => {
    const { updateForm, formState } = useContext(FormContext);

    return ( 
        <fieldset>
            <p>What email address should your results be sent to?</p>
            <input value={formState.mail} name="mail" required className="form-control" onChange={updateForm} type="email" placeholder="Email Address" />
        </fieldset>
     );
}
 
export default Email;