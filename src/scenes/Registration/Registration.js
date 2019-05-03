import React, {useState} from 'react';

import AccountForm from './components/AccountForm';
import SurveyForm from './components/SurveyForm';
import ConfirmForm from './components/ConfirmForm';
import SuccessForm from './components/SuccessForm';

import styles from './Registration.module.css';

const Registration = () => {
  const [step, setStep] = useState(1);
  const [fieldValues, setFieldValues] = useState({
    name: null,
    email: null,
    password: null,
    age: null,
    instruments: [],
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const confirm = () => {
    alert('confirm');
  };

  const save = (data) => {
    setFieldValues(Object.assign(fieldValues, data));
  };

  const showStep = () => {
    switch (step) {
      case 1:
        return (
          <AccountForm
            fieldValues={fieldValues}
            nextStep={nextStep}
            save={save}
          />
        );
      case 2:
        return (
          <SurveyForm
            fieldValues={fieldValues}
            nextStep={nextStep}
            previousStep={previousStep}
            save={save}
          />
        );
      case 3:
        return (
          <ConfirmForm
            fieldValues={fieldValues}
            previousStep={previousStep}
            confirm={confirm}
          />
        );
      case 4:
        return <SuccessForm fieldValues={fieldValues} />;
      default:
        return (
          <AccountForm
            fieldValues={fieldValues}
            nextStep={nextStep}
            previousStep={previousStep}
            save={save}
          />
        );
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Registration</h1>
      {showStep()}
    </div>
  );
};

export default Registration;
