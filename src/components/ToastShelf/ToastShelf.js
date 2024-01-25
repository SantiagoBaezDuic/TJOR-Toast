import React from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf({ queue }) {
  const { setToasts, clearAllToasts } = React.useContext(ToastContext);

  const handleDismiss = (id) => {
    if (id === "all") {
      setToasts([]);
    } else {
      const toasts = [...queue];
      const filteredToasts = toasts.filter((item) => {
        return item.id !== id;
      });
      setToasts(filteredToasts);
    }
  };

  clearAllToasts();

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
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
