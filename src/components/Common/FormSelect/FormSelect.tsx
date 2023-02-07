import React, { useState, useEffect } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./FormSelect.module.scss";

export interface FormSelectOptionProps {
  value: string;
  text: string;
}

export interface FormSelectProps {
  className?: string;
  placeholder?: string;
  name?: string;
  options: Array<FormSelectOptionProps>;
  value?: string;
  validation?: any;
  register: UseFormRegister<FieldValues>;
  onChange?: (e: any) => void;
}

const FormSelect = ({
  className,
  placeholder,
  name = "",
  options,
  value,
  onChange,
  register,
  validation
}: FormSelectProps) => { 

  const optionsUI = options?.map((option, index) => {
    return (
      <option key={index} value={option.value}>
        {option.text}
      </option>
    );
  });

  return (
    <select
      defaultValue=""
      onInput={onChange}
      {...register(name, validation)}
      className={`${styles.dropdown} ${className}`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {optionsUI}
    </select>
  );
};

export default FormSelect;
