import React, { ChangeEvent, FC, ReactNode } from "react";

interface InputProps {
  type?: string;
  id: string;
  autoComplete?: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errors?: string | undefined | null;
  disabled?: boolean;
  required?: boolean;
  label: ReactNode;
}

const InputField: FC<InputProps> = ({
  type = "text",
  id,
  autoComplete,
  placeholder,
  value,
  onChange,
  errors,
  label,
  disabled = false,
  required = false,
}) => (
  <div>
    <label className={`${disabled && "disabled"}`} htmlFor={id}>
      {label}
    </label>
    <input
      type={type}
      name={id}
      id={id}
      autoComplete={autoComplete}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
    />
    {errors && <span>{errors}</span>}
  </div>
);

export default InputField;
