import { useNavigate } from "react-router-dom";
import styles from "./EmployeeList.module.css";

const EmployeeList = ({ employees, onDelete }) => {

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/employee/add');
  };

  const handleView = (id) => {
    navigate(`/employee/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/employee/edit/${id}`);
  };

  return (
    <div className={employees.length > 0 ? styles.container : styles.containeremptylist}>
      <section className={styles.subheader}>
        <h1 className={styles.title}>Employee List</h1>
        <button type="button" onClick={handleAdd}>
          Add Employee
        </button>
      </section>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className={styles.mobilehide}>Position</th>
            <th className={styles.mobilehide}>Department</th>
            <th className={styles.mobilehide}>Email</th>
            <th className={styles.mobilehide}>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td className={styles.mobilehide}>{employee.position}</td>
                <td className={styles.mobilehide}>{employee.department}</td>
                <td className={styles.mobilehide}>{employee.email}</td>
                <td className={styles.mobilehide}>{employee.phone}</td>
                <td className="actions">
                  <button onClick={() => handleView(employee.id)}>View</button>
                  <button className={styles.btnedit} onClick={() => handleEdit(employee.id)}>Edit</button>
                  <button className={styles.btndelete}onClick={() => onDelete(employee.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">
                Empty list.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
