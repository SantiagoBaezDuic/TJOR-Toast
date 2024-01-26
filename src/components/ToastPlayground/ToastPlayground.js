import React from "react";

import ToastShelf from "../ToastShelf/ToastShelf";
import InputsForm from "../InputsForm/InputsForm";

import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

function ToastPlayground() {
  const { toasts, variants } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf queue={toasts} />
      <InputsForm options={variants} />
    </div>
  );
}

export default ToastPlayground;
