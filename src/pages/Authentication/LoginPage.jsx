import { LoginContainer } from "../../containers";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginpage}>
      <h1 className="logo">HR 2.0</h1>
      <LoginContainer />
    </div>
  );
};

export default LoginPage;
