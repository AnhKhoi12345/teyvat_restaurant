import React from 'react';
import InputField from '../../../../component/FormControl/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from 'primereact/button';
import './inputForm.scss';
function InputForm(props) {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .test('len', 'Must be 10 or larger', (val) => val.length >= 10),
    calendar: yup.string().required('Please enter your date and time'),
    email: yup.string().email('Invalid Email').required('Please enter your email'),
    people: yup
      .number()
      .typeError('Please enter a number of poeple')
      // .matches(phoneRegExp, 'Number is not valid')
      .max(15, 'Max 15 people')
      .min(1, 'Please enter number of people')
      .required('Please enter number of people'),
    code: yup.string(),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      calendar: '',
      email: '',
      people: '',
      code: '',
    },
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = (values) => {
    const formData = new URLSearchParams();
    formData.append('name', values.name);
    formData.append('phone', values.phone);
    formData.append('date', values.calendar);
    formData.append('email', values.email);
    formData.append('people', values.people);
    formData.append('code', values.code);
    console.log('Input Form:', values.name);
    try {
      fetch('http://localhost:3001/api/book', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        });
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField name="name" label="Name" control={control} errors={errors} calendar={false} placeHolder="Name" />
      <InputField name="phone" label="Phone" control={control} errors={errors} calendar={false} placeHolder="Phone" />
      <InputField name="calendar" label="Date" control={control} errors={errors} calendar={true} placeHolder="Date" />
      <InputField name="email" label="Email" control={control} errors={errors} calendar={false} placeHolder="Email" />
      <InputField
        name="people"
        label="People"
        control={control}
        errors={errors}
        calendar={false}
        placeHolder="People"
      />
      <InputField
        name="code"
        label="Voucher code (optional)"
        control={control}
        errors={errors}
        calendar={false}
        placeHolder="Voucher code"
      />
      <Button className="submit-btn" type="submit" label="BOOK TABLE"></Button>
    </form>
  );
}
export default InputForm;
