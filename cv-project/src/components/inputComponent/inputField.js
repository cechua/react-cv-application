import React from "react";

const InputField = ({ label, inputValue, onChange }) => {
  return (
    <div>
      <label className="label">{label}</label>
      <input value={inputValue || ""} onChange={onChange} />
    </div>
  );
};

export default InputField;
