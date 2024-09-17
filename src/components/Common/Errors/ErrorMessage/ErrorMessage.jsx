import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className={styles.errormessagecontainer}>
      <div className={styles.errormessage}>
        {message}
        <button className={styles.closebtn} onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default ErrorMessage;
