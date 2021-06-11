import React, { useContext } from 'react';
import FormContext from '../../context/FormContext';

const PhoneNumber = () => {
    const { updateForm, formState } = useContext(FormContext);
    
    return ( 
        <fieldset className="d-flex flex-column">
            <label className="mb-2">What phone number can we reach you at?</label>
            <input value={formState.phoneNumber} name="phoneNumber" className="form-control" placeholder="(000) 000-0000" type="tel" pattern="^[0-9]+" minLength="10" maxLength="10" required onChange={ (e) => updateForm(e)} />
            <p className="text-secondary mt-2" style={{fontSize: 12, opacity: 0.6}}>
             When you click "Next" you authorize companies on <a href="https://www.smartsolarsavings.com/v4/installers.php" target="blank" className="link-secondary">this list</a> to call and send pre-recorded
             and sms messages to phone # above using an autodialer even if your phone number is on any do not call list.
             Your consent here is not based on a condition of purchase.
            </p>
        </fieldset>
     );
}
 
export default PhoneNumber;