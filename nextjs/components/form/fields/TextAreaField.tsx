import React, { ChangeEvent, FC } from "react";

interface TextAreaProps {
  rows?: number;
  id: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  classes?: string;
  errors?: string | null | undefined;
  required?: boolean;
}

const TextAreaField: FC<TextAreaProps> = ({
  id,
  label,
  onChange,
  value,
  errors,
  classes = "",
  rows = 4,
  required = false,
}) => (
  <div className={classes}>
    <label htmlFor={id}>{label}</label>
    <textarea
      rows={rows}
      name={id}
      id={id}
      onChange={onChange}
      value={value}
      required={required}
      maxLength={5000}
    />
    {errors && <span>{errors}</span>}
  </div>
);

export default TextAreaField;
