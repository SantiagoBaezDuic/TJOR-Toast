import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [toastType, setToastType] = React.useState("notice");
  const [toasts, setToasts] = React.useState([]);

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

  const value = React.useMemo(() => {
    return {
      message,
      handleMessage,
      handleFireToast,
      toastType,
      setToastType,
      toasts,
      setToasts,
    };
  }, [message, toastType, toasts]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
