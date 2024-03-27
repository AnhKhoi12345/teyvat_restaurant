import React, { useState } from 'react';
import InputField from '../../../../component/FormControl/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from 'primereact/button';
import './signUpForm.scss';
function SignUpForm(props) {
  const schema = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Please enter your email'),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = (values) => {
    console.log('Input Form:', values);
  };
  return (
    <form className="signup-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField name="email" control={control} errors={errors} calendar={false} placeHolder="Email" />
      <Button className="signup-submit-btn" type="submit" label="SIGN UP"></Button>
    </form>
  );
}
export default SignUpForm;
