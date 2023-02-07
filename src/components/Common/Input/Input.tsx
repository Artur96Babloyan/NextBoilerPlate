import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./Input.module.scss";

export interface InputProps {
  className?: string;
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  validation?: any;
  label?: string;
  register: UseFormRegister<FieldValues>;
  onChange?: () => void;
}

const Input = ({
  className,
  type,
  name = "",
  placeholder,
  label,
  register,
  validation,
  onChange,
}: InputProps) => {
  return (
    <>
      {label && <label>{label}</label>}
      <input
        type={type}
        className={`${styles.input} ${className}`}
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </>
  );
};

export default Input;
