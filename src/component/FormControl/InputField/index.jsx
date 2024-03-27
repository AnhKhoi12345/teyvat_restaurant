import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Calendar } from 'primereact/calendar';
import './inputField.scss';
function InputField(props) {
  // const [datetime12h, setDateTime12h] = useState(null);
  const { control, name, label, disabled, errors, calendar, placeHolder } = props;
  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };
  // const Input = (inputType, field) => {
  //   if (inputType === true) {
  //     return (
  //       <>
  //         <label htmlFor={field.name}>{label}</label>
  //         <InputText
  //           className="inputfield"
  //           value={field.value}
  //           id={field.name}
  //           disabled={disabled}
  //           placeholder={label}
  //           onChange={(e) => field.onChange(e.target.value)}
  //         />
  //         <small>{getFormErrorMessage(field.name)}</small>
  //       </>
  //     );
  //   } else if (!inputType) {
  //     return (
  //       <>
  //         <label htmlFor={field.name}>{label}</label>
  //         <Calendar
  //           name="name"
  //           id="calendar-12h"
  //           value={datetime12h}
  //           onChange={(e) => setDateTime12h(e.value)}
  //           showTime
  //           hourFormat="12"
  //           control={control}
  //           errors={errors}
  //         />
  //         <small>{getFormErrorMessage(field.name)}</small>
  //       </>
  //     );
  //   }
  // };
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: 'Name - Surname is required.' }}
      render={({ field }) => (
        <div className="flex flex-column gap-2 inputfield-container">
          <label htmlFor={field.name}>{label}</label>
          {calendar ? (
            <Calendar
              id="calendar-12h"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              showTime
              hourFormat="12"
              className="inputfield"
            />
          ) : (
            <InputText
              className="inputfield"
              value={field.value}
              id={field.name}
              disabled={disabled}
              placeholder={placeHolder}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}

          {/* <InputText
            className="inputfield"
            value={field.value}
            id={field.name}
            disabled={disabled}
            placeholder={label}
            onChange={(e) => field.onChange(e.target.value)}
          /> */}
          {/* <Input label={label} disabled={disabled} field={field} inputType={inputType} /> */}
          <small>{getFormErrorMessage(field.name)}</small>
        </div>
      )}
    />
  );
}
export default InputField;
