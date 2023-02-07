import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styles from "./RadioButtons.module.scss";

export interface RadioButtonsProps {
  className?: string;
  name?: string;
  validation?: any;
  register: UseFormRegister<FieldValues>;
  data: Array<{ value: string; text: string }>;
}

const RadioButtons = ({ className, name = "", validation, data, register }: RadioButtonsProps) => {
  return (
    <div className={`${styles.radioButtonWrapper} ${className}`}>
      {data.map((radioOption: any) => (
        <label key={radioOption.value} className={styles.radioButton}>
          <input type="radio"{...register(name, validation)} value={radioOption.value} />
          <span>{radioOption.text}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;
