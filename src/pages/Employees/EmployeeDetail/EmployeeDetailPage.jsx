"use client";
import { useNavigate } from 'react-router-dom';
import { EmployeeDetailContainer } from '../../../containers';
import styles from './EmployeeDetailPage.module.css';

const EmployeeDetail = () => {

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Navega hacia la página anterior
  };

  return (
    <div className="container">
      <h1 className={styles.title}>Employee Detail</h1>
      <EmployeeDetailContainer />
      <button onClick={goBack}>Go Back</button>
    </div>
  )
};

export default EmployeeDetail;
