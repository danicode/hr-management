"use client";

import { Navigate, useNavigate } from "react-router-dom";
import { LoginForm } from "../../components";
import { useForm } from "../../hooks";
import { useAuth } from "../../contexts";

const LoginContainer = () => {
  const validationSchema = {
    email: (value) => {
      if (!value.trim()) {
        return 'Email is required';
      }
      if (!/\S+@\S+\.\S+/.test(value)) {
        return 'Invalid email format';
      }
      return '';
    },
    password: (value) => (value.trim() ? '' : 'Password is required'),
  };

  const navigate = useNavigate();
  const { values, errors, setErrors, handleChange, handleSubmit } = useForm({
    email: "",
    password: "",
  }, validationSchema);

  const {isLoggedIn, login, loading} = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/home"/>
  }

  const submitForm = async (e) => {
      const result = await login(values);
      if (result.ok) {
        navigate("/home");
      } else {
        setErrors(result.message);
      }
  };

  return (
    <LoginForm
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit(submitForm)}
      loading={loading}
      errors={errors}
    />
  );
};

export default LoginContainer;
