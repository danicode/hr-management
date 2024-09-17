"use client";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../../hooks";
import { EmployeeService } from "../../../services";
import { EmployeeForm } from "../../../components";

const EmployeeFormContainer = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validationSchema = {
    name: (value) => (value.trim() ? '' : 'Name is required'),
    position: (value) => (value.trim() ? '' : 'Position is required'),
    department: (value) => (value.trim() ? '' : 'Department is required'),
    email: (value) => {
      if (!value.trim()) {
        return 'Email is required';
      }
      if (!/\S+@\S+\.\S+/.test(value)) {
        return 'Invalid email format';
      }
      return '';
    },
    phone: (value) => (value.trim() ? '' : 'Phone is required'),
  };

  const { values, setValues, errors, setErrors, handleChange, handleSubmit } = useForm({
    name: "",
    position: "",
    department: "",
    email: "",
    phone: "",
  }, validationSchema);

  useEffect(() => {
    if (id) {
      setLoading(true);
      EmployeeService.getEmployeeById(id).then((values) => {
        setValues(values);
        setLoading(false);
      });
    }
  }, [id]);

  const submitForm = async (e) => {
    setLoading(true);
    if (id) {
      try {
        await EmployeeService.updateEmployee(id, values);
        submitSuccess();
      } catch (e) {
        setLoading(false);
        setErrors([{field:"error", message: e.message}]);
      }
    } else {
      try {
        console.log("EmployeeService add");
        await EmployeeService.addEmployee(values);
        submitSuccess();
      } catch (e) {
        setLoading(false);
        setErrors([{field:"error", message: e.message}]);
      }
    }
  };

  const submitSuccess = () => {
    setLoading(false);
    navigate("/employees");
  };

  return <EmployeeForm
    employeeData={values}
    handleChange={handleChange}
    handleSubmit={handleSubmit(submitForm)}
    loading={loading}
    errors={errors}
  />;
};

export default EmployeeFormContainer;
