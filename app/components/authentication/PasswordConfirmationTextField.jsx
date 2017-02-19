import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const PasswordConfirmationTextField = ({value, errorText, onChange}) => {
  const handleOnChange = (event, value) => {
    onChange(value);
  };

  return (
    <TextField
             value={value}
             errorText={errorText}
             onChange={handleOnChange}
             type="password"
             floatingLabelText="Password confirmation"
             fullWidth
             type="password"
             errorStyle={{ float: 'left' }} />
  );
};

PasswordConfirmationTextField.propTypes = {
  value: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PasswordConfirmationTextField;
