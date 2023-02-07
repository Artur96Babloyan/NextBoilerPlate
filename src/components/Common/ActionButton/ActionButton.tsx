import * as React from "react";
import Icon from "@components/Icons/Icons";
import styles from "./ActionButton.module.scss";

export interface IActionButtonProps {
  className?: string;
  type: string;
  label?: string;
  onClick?: () => void;
}

const ActionButton = ({
  className = "",
  label,
  type,
  onClick,
  ...props
}: IActionButtonProps) => {
  return (
    <div
      className={`${styles.actionButton} ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className={styles.actionButtonIcon}>
        <Icon type={type} />
      </div>
      <span>{label}</span>
    </div>
  );
};

export default ActionButton;
