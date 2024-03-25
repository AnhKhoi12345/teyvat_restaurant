import React from 'react';
import InputField from '../../../../component/FormControl/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
function InputForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter'),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });
  const handleFormSubmit = (values) => {
    console.log('Input Form:', values);
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField name="title" label="Name" control={control} errors={errors} />
    </form>
  );
}
export default InputForm;
