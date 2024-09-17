import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage, HomePage, NotFoundPage, EmployeeListPage, EmployeeDetailPage, EmployeeFormPage } from "../pages";
import { PrivateLayout, PublicLayout } from "../layouts";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<LoginPage />} />
        </Route>

        <Route path="/" element={<PrivateRoute><PrivateLayout /></PrivateRoute>}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/employees" element={<EmployeeListPage />} />
          <Route path="/employee/:id" element={<EmployeeDetailPage />} />
          <Route path="/employee/add" element={<EmployeeFormPage />} />
          <Route path="/employee/edit/:id" element={<EmployeeFormPage />} />
        </Route>

        <Route path="*" element={
          <NotFoundPage/>
        }/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
