import React, {useRef} from 'react';
import PropTypes from 'prop-types';

import generateCypressAttribute from '../../../../helpers/generateAutomationID';

const AccountForm = ({fieldValues, nextStep, save}) => {
  const name = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name.current.value,
      password: password.current.value,
      email: email.current.value,
    };

    save(data);
    nextStep();
  };

  return (
    <div>
      <h2>Account Details</h2>
      <form onSubmit={onSubmit} noValidate={true}>
        <ul className="form-fields">
          <li>
            <label>Name</label>
            <input
              type="text"
              ref={name}
              defaultValue={fieldValues.name}
              {...generateCypressAttribute('name')}
            />
          </li>
          <li>
            <label>Password</label>
            <input
              type="password"
              ref={password}
              defaultValue={fieldValues.password}
              {...generateCypressAttribute('password')}
            />
          </li>
          <li>
            <label>Email</label>
            <input
              type="email"
              ref={email}
              defaultValue={fieldValues.email}
              {...generateCypressAttribute('email')}
            />
          </li>
          <li className="form-footer">
            <button
              type="submit"
              className="btn btn-primary pull-right"
              onClick={onSubmit}
              {...generateCypressAttribute('btn-save')}
            >
              Save &amp; Continue
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

AccountForm.propTypes = {
  fieldValues: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
};

export default AccountForm;
