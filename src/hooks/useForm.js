import { useState } from "react";

const useForm = (initialValues, validationSchema = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({}); 

  // Maneja el cambio de los inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // Maneja el submit del formulario
  const handleSubmit = (callback) => (event) => {
    event.preventDefault();

    const allErrors = [];
    Object.entries(validationSchema).forEach(([fieldName, validationFn]) => {
      const error = validationFn(values[fieldName]);
      if (error) {
        allErrors.push({ field: fieldName, message: error });
      }
    });
    setErrors(allErrors);

    if (allErrors.length === 0) {
      callback();
    } else {
      const firstErrorField = allErrors[0].field;
      const inputElement = document.querySelector(`[name="${firstErrorField}"]`);
      if (inputElement) {
        inputElement.focus();
      }
    }
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
