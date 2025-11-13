// ✅ CustomInput.tsx — Plain CSS version by Divyanshu Tiwari
import React from "react";
import type { FieldError, UseFormRegister } from "react-hook-form";
import "../../styles/ui.css";

type Props = {
  id: string;
  label: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
};

export default function CustomInput({
  id,
  label,
  type = "text",
  register,
  error,
}: Props) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...register(id)} className={error ? "input-error" : ""} />
      {error && <p className="error-text">{error.message}</p>}
    </div>
  );
}
