import styles from "./EmployeeDetail.module.css";

const EmployeeDetail = ({ employee }) => {
  return (
    <form className={styles.formemployeedetail}>
      <div className="formGroup">
        <label className={styles.mainlabel}>Name</label>
        <label>{employee.name}</label>
      </div>
      <div className="formGroup">
        <label className={styles.mainlabel}>Position</label>
        <label>{employee.position}</label>
      </div>
      <div className="formGroup">
        <label className={styles.mainlabel}>Department</label>
        <label>{employee.department}</label>
      </div>
      <div className="formGroup">
        <label className={styles.mainlabel}>Email</label>
        <label>{employee.phone}</label>
      </div>
      <div className="formGroup">
        <label className={styles.mainlabel}>Phone</label>
        <label>{employee.phone}</label>
      </div>
    </form>
  );
};

export default EmployeeDetail;
