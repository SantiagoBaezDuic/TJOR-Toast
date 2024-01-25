import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);
}

export default useEscapeKey;
