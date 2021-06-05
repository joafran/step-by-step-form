import React from 'react';
import Form from './components/Form';
import FormState from './context/FormState';

const App = () => {

  return ( 
    <div className="d-flex flex-column align-items-center">
      <img className="mw-100" alt="img" src="https://www.smartsolarsavings.com/v4/assets/images/solar-saving-logo.png" />
      <div>
        <h3 className="text-center">Get Your Free Solar Quotes</h3>
        <p className="text-center">Take this survey to find out if you qualify. Only takes 60 seconds!</p>
      </div>
      <FormState>
        <Form />
      </FormState>
    </div>
   );
}
 
export default App;