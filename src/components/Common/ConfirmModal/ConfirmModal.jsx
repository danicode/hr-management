import styles from './ConfirmModal.module.css';

const ConfirmModal = ({ title, message, show, handleClose, handleConfirm }) => {
  if (!show) return null;

  return (
    <div className={styles.modaloverlay}>
      <div className={styles.modalcontainer}>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className={styles.modalbuttons}>
          <button className={styles.btncancel} onClick={handleClose}>Cancel</button>
          <button className={styles.btndelete} onClick={handleConfirm}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
