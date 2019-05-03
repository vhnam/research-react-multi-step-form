import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import getRadioOrCheckboxValue from '../../../../helpers/getRadioOrCheckboxValue';

const SurveyForm = ({fieldValues, nextStep, previousStep, save}) => {
  const ages = ['18-26', '27-38', '39-50', '51-62'];
  const instruments = ['Trumpet', 'Trombone', 'Violin', 'Piano', 'Guitar'];

  const render = (type, name, value, index) => {
    const isChecked = () => {
      if ('radio' === type) {
        return value === fieldValues[name];
      }

      if ('checkbox' === type) {
        return fieldValues[name].indexOf(value) >= 0;
      }

      return false;
    };

    return (
      <Fragment key={index}>
        <label htmlFor={index}>
          <input
            type={type}
            name={name}
            value={value}
            defaultChecked={isChecked()}
          />{' '}
          {value}
        </label>
      </Fragment>
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const age = document.querySelector('input[name="age"]:checked');
    const instruments = document.querySelectorAll('input[name="instruments"]');

    const data = {
      age: getRadioOrCheckboxValue(age),
      instruments: getRadioOrCheckboxValue(instruments),
    };

    save(data);
    nextStep();
  };

  return (
    <div>
      <h2>Survey Question</h2>
      <form onSubmit={onSubmit} noValidate={true}>
        <ul className="form-fields">
          <li className="radio">
            <span className="label">Age</span>
            {ages.map(render.bind(this, 'radio', 'age'))}
          </li>
          <li className="checkbox">
            <span className="label">Favorite Instruments</span>
            {instruments.map(render.bind(this, 'checkbox', 'instruments'))}
          </li>
          <li className="form-footer">
            <button
              type="button"
              className="btn btn-default pull-left"
              onClick={previousStep}
            >
              Back
            </button>
            <button type="submit" className="btn btn-primary pull-right">
              Save &amp; Continue
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

SurveyForm.propTypes = {
  fieldValues: PropTypes.object.isRequired,
  previousStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
};

export default SurveyForm;
