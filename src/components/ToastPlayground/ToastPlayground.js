import React from "react";

import Button from "../Button";
import RadioRenderer from "../RadioRenderer";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [toastType, setToastType] = React.useState("notice");
  const [toasts, setToasts] = React.useState([]);
  const [showToast, setShowToast] = React.useState(false);

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const clearInputs = () => {
    setMessage("");
    setToastType("notice");
  };

  const handleFireToast = () => {
    const nextToasts = [
      ...toasts,
      { message: message, variant: toastType, id: crypto.randomUUID() },
    ];
    setToasts(nextToasts);
    clearInputs();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFireToast();
    console.log("fired!");
    console.log(toasts);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf queue={toasts} setToasts={setToasts} />

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor='message'
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                value={message}
                onChange={handleMessage}
                id='message'
                className={styles.messageInput}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <RadioRenderer
                types={VARIANT_OPTIONS}
                toastType={toastType}
                setToastType={setToastType}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
