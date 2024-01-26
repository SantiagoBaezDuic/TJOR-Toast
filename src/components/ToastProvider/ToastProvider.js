import React from "react";

import useEscapeKey from "../../hooks/useKeyDown";

export const ToastContext = React.createContext();

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [toastType, setToastType] = React.useState("notice");
  const [toasts, setToasts] = React.useState([]);
  const [variants, setVariants] = React.useState(VARIANT_OPTIONS);

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const clearInputs = () => {
    setMessage("");
    setToastType("notice");
  };

  const createToast = (message, variant) => {
    const nextToasts = [
      ...toasts,
      { message, variant, id: crypto.randomUUID() },
    ];
    setToasts(nextToasts);
  };

  const handleFireToast = () => {
    createToast(message, toastType);
    clearInputs();
  };

  const clearAllToasts = () => {
    useEscapeKey("Escape", () => {
      setToasts([]);
    });
  };

  const value = React.useMemo(() => {
    return {
      message,
      handleMessage,
      handleFireToast,
      toastType,
      setToastType,
      toasts,
      setToasts,
      clearAllToasts,
      variants,
    };
  }, [message, toastType, toasts]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
