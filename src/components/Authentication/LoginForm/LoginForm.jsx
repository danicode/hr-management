"use client";

import { ErrorForm, Loading } from "../../Common";
import styles from "./LoginForm.module.css";

const LoginForm = ({
  values,
  handleChange,
  handleSubmit,
  loading,
  errors,
}) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {errors.length > 0 && <ErrorForm errors={errors}/>}
    </>
  );
};

export default LoginForm;
