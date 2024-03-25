import { InputText } from 'primereact/inputtext';
import React from 'react';
import { Controller } from 'react-hook-form';

function InputField(props) {
  const { control, name, label, disabled, errors } = props;
  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: 'Name - Surname is required.' }}
      render={({ field }) => (
        <>
          <InputText size="large" label={label} disabled={disabled} onChange={(e) => field.onChange(e.target.value)} />
          <small>{getFormErrorMessage(field.name)}</small>
        </>
      )}
    />
  );
}
export default InputField;
