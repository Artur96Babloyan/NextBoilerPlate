import * as React from "react";
import Icon from "@components/Icons/Icons";
import styles from "./ArrowButton.module.scss";

export interface IArrowButtonProps {
  className?: string;
  label?: string;
  onClick?: () => void;
}

const ArrowButton = ({
  className = "",
  label,
  onClick,
  ...props
}: IArrowButtonProps) => {
  return (
    <button
      className={`${styles.arrowButton} ${className}`}
      onClick={onClick}
      {...props}
    >
      {label}
      <div className={styles.arrowButtonIcon}>
        <Icon type="chevron-down" />
      </div>
    </button>
  );
};

export default ArrowButton;
