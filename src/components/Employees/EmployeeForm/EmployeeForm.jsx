import { ErrorForm, Loading } from "../../Common";

const EmployeeForm = ({ 
  employeeData, 
  handleChange,
  handleSubmit,
  loading,
  errors, }) => {

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div className="formGroup">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={employeeData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label>Position</label>
          <input
            type="text"
            name="position"
            value={employeeData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={employeeData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="formGroup">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={employeeData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>

      {errors.length > 0 && <ErrorForm errors={errors}/>}
    </>
  );
};

export default EmployeeForm;
