import React, { useContext, useState } from "react";
import FormContext from "../context/FormContext";
import Email from "./FormSteps/Email";
import HomeOwner from "./FormSteps/HomeOwner";
import PhoneNumber from "./FormSteps/Phone";
import Range from "./FormSteps/Range";
import RoofArea from "./FormSteps/RoofArea";
import Select from "./FormSteps/Select";
import FirstName from "./FormSteps/FirstName";
import LastName from "./FormSteps/LastName";


const Form = () => {
  const [currentStep, setStep] = useState(0);
  const formSteps = [<HomeOwner />, <Select />,  <Range />, <RoofArea />, <Email />, <FirstName />, <LastName /> ,<PhoneNumber />];
  const [isComplete, setIsComplete] = useState(false);
  const { formState } = useContext(FormContext)
  const width = ((currentStep + 1) / formSteps.length) * 100;
  
    const goNext = () => {
      const next = currentStep + 1;
      if(formSteps[next]) {
        setStep(next);
      } else {
        setIsComplete(true);
      }
    }
  
    const goBack = () => {
      console.log('entre a goback')
      if(currentStep > 0) {
        setStep(currentStep - 1)
      }
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formState);
      goNext();
    }

    return ( 
        <div className="container-sm">
              {isComplete ? (
                <div>
                  <h2 className="text-center">Your Info has been submitted!</h2>
                  <h6 className="text-center">We sent you an email with the next steps</h6>
                </div>
              ): (
            <div>

              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: `${width}%`, backgroundColor: '#00bf5f'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <form onSubmit={handleSubmit} className="mt-4 shadow p-3 mb-5 bg-white rounded">
                  {formSteps[currentStep]}
                <div className="d-flex justify-content-between">
                    {currentStep ? (
                      <button type="button" onClick={() => goBack()} className="mt-2 btn btn-secondary">Back</button>
                      ): null}
                    <button type="submit" className="mt-2 mx-2 btn btn-success">Next</button>
                </div>
              </form>
            </div>    
                )}
        </div>
     );
}
 
export default Form;
