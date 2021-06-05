import React, { useState } from "react";
import Email from "./FormSteps/Email";
import HomeOwner from "./FormSteps/HomeOwner";
import Range from "./FormSteps/Range";
import Select from "./FormSteps/Select";


const Form = () => {
  const [currentStep, setStep] = useState(0);
  const formSteps = [<HomeOwner />, <Range />, <Select />, <Email />];
  const [isComplete, setIsComplete] = useState(false);
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
      if(currentStep > 0) {
        setStep(currentStep - 1)
      }
    }
  

    return ( 
        <div className="container-sm">
              {isComplete ? (
                <div>
                  <h2 className="text-center">Your Info has been submitted!</h2>
                </div>
              ): (
            <div>

              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: `${width}%`, backgroundColor: '#00bf5f'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div className="mt-4 shadow p-3 mb-5 bg-white rounded">
                  {formSteps[currentStep]}
                <div className="d-flex justify-content-between">
                    {currentStep ? (
                      <button onClick={() => goBack()} className="mt-2 btn btn-secondary">Back</button>
                      ): null}
                    <button onClick={() => goNext()} className="mt-2 mx-2 btn btn-success">Next</button>
                </div>
              </div>
            </div>    
                )}
        </div>
     );
}
 
export default Form;
