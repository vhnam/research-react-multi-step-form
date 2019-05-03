import React from 'react';

const SuccessForm = () => {
  return (
    <div>
      <h2>Successfully Registered!</h2>
      <p>
        Please check your email <strong>{fieldValues.email}</strong> for a
        confirmation link to activate your account.
      </p>
    </div>
  );
};

export default SuccessForm;
