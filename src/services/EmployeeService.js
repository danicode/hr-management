const API_URL = import.meta.env.VITE_API_URL;
const EMPLOYEES_ENDPOINT = import.meta.env.VITE_EMPLOYEES_ENDPOINT;

// Obtener todos los empleados
const getEmployees = async () => {
  try {
    const response = await fetch(`${API_URL}${EMPLOYEES_ENDPOINT}`);
    if (!response.ok) {
      throw new Error('Failed to fetch employees');
    }
    const employees = await response.json();
    return employees;
  } catch (err) {
    throw new Error(`Error fetching employees: ${err.message}`);
  }
};

// Obtener empleado por ID
const getEmployeeById = async (id) => {
  try {
    const response = await fetch(`${API_URL}${EMPLOYEES_ENDPOINT}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch employee with ID: ${id}`);
    }
    const employee = await response.json();
    return employee;
  } catch (err) {
    throw new Error(`Error fetching employee: ${err.message}`);
  }
};

// Agregar un nuevo empleado
const addEmployee = async (employeeData) => {
  try {
    const response = await fetch(`${API_URL}${EMPLOYEES_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    });

    if (!response.ok) {
      throw new Error('Failed to add employee');
    }

    const newEmployee = await response.json();
    return newEmployee;
  } catch (err) {
    throw new Error(`Error adding employee: ${err.message}`);
  }
};

// Actualizar un empleado existente
const updateEmployee = async (id, employeeData) => {
  try {
    const response = await fetch(`${API_URL}${EMPLOYEES_ENDPOINT}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employeeData),
    });

    if (!response.ok) {
      throw new Error(`Failed to update employee with ID: ${id}`);
    }

    const updatedEmployee = await response.json();
    return updatedEmployee;
  } catch (err) {
    throw new Error(`Error updating employee: ${err.message}`);
  }
};

// Eliminar un empleado
const deleteEmployee = async (id) => {
  try {
    const response = await fetch(`${API_URL}${EMPLOYEES_ENDPOINT}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete employee with ID: ${id}`);
    }

    return `Employee with ID: ${id} has been deleted`;
  } catch (err) {
    throw new Error(`Error deleting employee: ${err.message}`);
  }
};

// Exportar los métodos como parte del servicio
const EmployeeService = {
  getEmployees,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};

export default EmployeeService;
