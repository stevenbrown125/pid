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
  <div className="col-span-2 md:col-span-1">
    <label className={`${disabled && "disabled"}`} htmlFor={id}>
      {label}
      {!required && (
        <span className="absolute right-0 text-sm text-neutral-500">
          Optional
        </span>
      )}
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
