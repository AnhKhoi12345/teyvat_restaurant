import React, { useRef, useState } from 'react';
import InputField from '../../../../component/FormControl/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from 'primereact/button';
import './signUpForm.scss';
import { Toast } from 'primereact/toast';
function SignUpForm(props) {
  const toast = useRef(null);
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
  // const handleFormSubmit = (values) => {
  //   console.log('Input Form:', values);
  // };
  const handleFormSubmit = (values) => {
    const formData = new URLSearchParams();
    formData.append('email', values.email);
    try {
      fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          toast.current.show({
            severity: 'info',
            summary: 'Info',
            detail: 'Contact email sent! Please wait until we mail back for more info',
          });
        });
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <>
      <Toast ref={toast} />
      <form className="signup-form" onSubmit={handleSubmit(handleFormSubmit)}>
        <InputField name="email" control={control} errors={errors} calendar={false} placeHolder="Email" />
        <Button className="signup-submit-btn" type="submit" label="SIGN UP"></Button>
      </form>
    </>
  );
}
export default SignUpForm;
