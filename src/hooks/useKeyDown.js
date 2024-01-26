import React from "react";

function useKeyDown(key, callback) {
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === key) {
        callback(event);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [key, callback]);
}

export default useKeyDown;
