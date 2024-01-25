import React from "react";

import Button from "../Button";
import RadioRenderer from "../RadioRenderer";
import { ToastContext } from "../ToastProvider";

import styles from "./InputsForm.module.css";

function InputsForm({ options }) {
  const { message, handleMessage, handleFireToast } =
    React.useContext(ToastContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleFireToast();
  };

  return (
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
            <RadioRenderer types={options} />
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
  );
}

export default InputsForm;
