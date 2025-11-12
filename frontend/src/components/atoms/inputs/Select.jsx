import { useState } from "react";

const Select = ({ name, titleOption, listOption, value, onDataSend, requiredOnOff }) => {
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

      <select
        name={name}
        onChange={(e) => onDataSend(e)}
        value={value}
        required={requiredOnOff ? "required" : null}
        className="w-full h-full text-lg text-base-content font-light outline-none bg-base-100"
        onFocus={() => setFocused(true)}
      >
        <option className="text-base-content text-lg" value="" disabled>
          {titleOption}
        </option>
        {listOption.map((value, index) => {
          return (
            <option className="text-base-content text-lg" key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Select;
