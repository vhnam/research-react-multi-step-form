import React from 'react';

const ConfirmForm = ({fieldValues, previousStep, confirm}) => {
  return (
    <div>
      <h2>Confirm Registration</h2>
      <ul>
        <li>
          <strong>Name:</strong> {fieldValues.name}
        </li>
        <li>
          <strong>Email:</strong> {fieldValues.email}
        </li>
        <li>
          <strong>Age:</strong> {fieldValues.age}
        </li>
        <li>
          <strong>Intruments:</strong> {fieldValues.instruments.join(', ')}
        </li>
      </ul>
      <ul className="form-fields">
        <li className="form-footer">
          <strongutton
            className="btn btn-default pull-left"
            onClick={previousStep}
          >
            Back
          </strongutton>
          <strongutton className="btn btn-primary pull-right" onClick={confirm}>
            Submit Registration
          </strongutton>
        </li>
      </ul>
    </div>
  );
};

export default ConfirmForm;
