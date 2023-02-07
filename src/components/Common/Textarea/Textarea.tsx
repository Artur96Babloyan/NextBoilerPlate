import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./Textarea.module.scss";

export interface TextareaProps {
  className?: string;
  rows?: number;
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  register: UseFormRegister<FieldValues>;
}

const Textarea = ({
  className,
  name = "",
  placeholder,
  register,
  rows
}: TextareaProps) => {
  return <textarea placeholder={placeholder} rows={rows} {...register(name)} className={`${styles.textarea} ${className}`} />;
};

export default Textarea;
