import React from 'react';

import generateCypressAttribute from '../../../../helpers/generateAutomationID';

const ConfirmForm = ({fieldValues, previousStep, confirm}) => {
  return (
    <div>
      <h2>Confirm Registration</h2>
      <form noValidate={true}>
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
            <button
              type="button"
              className="btn btn-default pull-left"
              onClick={previousStep}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-primary pull-right"
              onClick={confirm}
              {...generateCypressAttribute('btn-confirm')}
            >
              Submit Registration
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default ConfirmForm;
