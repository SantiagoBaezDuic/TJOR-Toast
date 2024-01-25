import React from "react";

function RadioRenderer({ types, toastType: selected, setToastType }) {
  const handleRadio = (event) => {
    setToastType(event.target.value);
  };

  return (
    <>
      {types.map((label) => {
        return (
          <label key={label} htmlFor={`variant-${label}`}>
            <input
              id={`variant-${label}`}
              type='radio'
              name='variant'
              checked={selected === label}
              value={label}
              radioGroup='variant-radio'
              onChange={handleRadio}
            />
            {label}
          </label>
        );
      })}
    </>
  );
}

export default React.memo(RadioRenderer);
