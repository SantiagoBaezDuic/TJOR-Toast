import React from "react";

import ToastShelf from "../ToastShelf/ToastShelf";
import InputsForm from "../InputsForm/InputsForm";

import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf queue={toasts} />
      <InputsForm options={VARIANT_OPTIONS} />
    </div>
  );
}

export default ToastPlayground;
