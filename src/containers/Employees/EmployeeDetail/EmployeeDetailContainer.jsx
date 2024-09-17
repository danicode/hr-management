import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EmployeeService } from "../../../services";
import { EmployeeDetail, Loading } from "../../../components";

const EmployeeDetailContainer = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await EmployeeService.getEmployeeById(id);
        setEmployee(data);
      } catch (error) {
        navigate("/employees");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (!employee) {
    return <p>No employee found</p>;
  }

  return <EmployeeDetail employee={employee} />;
};

export default EmployeeDetailContainer;
