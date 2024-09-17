"use client";

import styles from "./ErrorForm.module.css";

const ErrorForm = ({errors}) => {
  const errorList = errors.length > 0 ? errors.map((error) => (
    <li key={error.field}>{error.message}</li>
  )) : [];

  return (
    <div className={styles.error}>
      <ul>
        {errorList}
      </ul>
    </div>
  );
};

export default ErrorForm;
