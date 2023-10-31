import React, { ChangeEvent, FC } from "react";

interface TextAreaProps {
  rows?: number;
  id: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  errors?: string | null | undefined;
}

const TextAreaField: FC<TextAreaProps> = ({
  id,
  label,
  onChange,
  value,
  errors,
  rows = 4,
}) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <textarea rows={rows} name={id} id={id} onChange={onChange} value={value} />
    {errors && <span>{errors}</span>}
  </div>
);

export default TextAreaField;
