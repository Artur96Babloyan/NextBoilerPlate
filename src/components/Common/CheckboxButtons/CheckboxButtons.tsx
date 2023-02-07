import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./CheckboxButtons.module.scss";

export interface CheckboxButtonsProps {
  className?: string;
  name?: string;
  data: Array<{ value: string; text: string }>;
  register: UseFormRegister<FieldValues>;
  onChange?: () => void;
}

const CheckboxButtons = ({
  className,
  name = "",
  data,
  register,
  onChange,
}: CheckboxButtonsProps) => {
  return (
    <div className={`${styles.checkboxButtonWrapper} ${className}`}>
      {data.map((checkboxOption: any) => (
        <label
          key={checkboxOption.value}
          className={`${styles.formControl} ${styles.checkboxButton}`}
        >
          <input type="checkbox" {...register(name)} value={checkboxOption.value} />
          <span>{checkboxOption.text}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxButtons;
