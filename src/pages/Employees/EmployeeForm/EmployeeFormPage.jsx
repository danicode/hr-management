import { EmployeeFormContainer } from "../../../containers";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styles from './EmployeeFormPage.module.css';

const EmployeeFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Navega hacia la página anterior
  };
  return (
    <div className="container">
      <h1 className={styles.title}>{id ? "Edit Employee" : "Add Employee"}</h1>
      <EmployeeFormContainer id={id} />
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default EmployeeFormPage;
