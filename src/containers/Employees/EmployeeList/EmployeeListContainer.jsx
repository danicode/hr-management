import { useEffect, useState } from "react";
import { EmployeeService } from "../../../services"
import { Loading, EmployeeList, ConfirmModal, ErrorMessage } from "../../../components";

const EmployeeListContainer = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await EmployeeService.getEmployees();
        setEmployees(data);
      } catch(e) {
        console.error(e);
        setError(e.message);
        // <ErrorMessage message={e.message} />
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const handleDeleteClick = (id) => {
    setEmployeeToDelete(id);
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    if (employeeToDelete) {
      try {
        await EmployeeService.deleteEmployee(employeeToDelete);
        setEmployees(employees.filter((employee) => employee.id !== employeeToDelete));
      } catch(e) {
        console.error(e);
        // <ErrorMessage message={e.message} />
        setError(e.message);
      } finally {
        setShowModal(false);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEmployeeToDelete(null);
  };

  const handleCloseError = () => {
    setError(''); // Limpiar el mensaje de error al hacer clic en la "X"
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <EmployeeList employees={employees} onDelete={handleDeleteClick} />
      <ErrorMessage message={error} onClose={handleCloseError} />
      <ConfirmModal
        title="Confirm Delete"
        message="Are you sure you want to delete this employee?"
        show={showModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default EmployeeListContainer;
