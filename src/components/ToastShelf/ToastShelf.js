import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf({ queue }) {
  const { setToasts } = React.useContext(ToastContext);

  const handleDismiss = (id) => {
    const toasts = [...queue];
    const filteredToasts = toasts.filter((item) => {
      return item.id !== id;
    });
    setToasts(filteredToasts);
  };

  return (
    <ol className={styles.wrapper}>
      {queue.map((toast) => {
        return (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast
              variant={toast.variant}
              id={toast.id}
              handleDismiss={handleDismiss}
            >
              {toast.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
