import { useState } from "react";

const Input = ({ placeholder, type, value, onDataSend }) => {
  const [isFocused, setFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="h-12 my-8 relative">
      <div className="w-full h-px bg-base-content absolute bottom-0 left-0" />
      <div
        className={`h-1 bg-primary transition-all absolute bottom-0 left-0 duration-1000
          ${isFocused || hasValue ? "w-full" : "w-0"}
        `}
      />

      <div
        className={`pointer-events-none transition-all absolute left-0 duration-300
          ${hasValue || isFocused ? "text-sm -top-2" : "text-lg top-3"}
          ${isFocused ? "text-primary" : hasValue ? "text-base-content" : "text-base-content/50"}`}
      >
        {placeholder}
      </div>

      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onDataSend(e.target.value)}
        type={type}
        value={value}
        className="w-full h-full text-sm font-light bg-transparent outline-none"
      />
    </div>
  );
};

export default Input;
