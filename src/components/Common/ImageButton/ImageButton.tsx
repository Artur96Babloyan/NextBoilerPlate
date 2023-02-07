import * as React from "react";
import Link from "next/link";
import Icon from "@components/Icons/Icons";
import ExternalLink from "@components/ExternalLink/ExternalLink";
import styles from "./ImageButton.module.scss";

export interface IImageButtonProps {
  href?: string;
  icon: string;
  className?: string;
  label?: string;
  count?: number;
  id?: string;
  homepageFilter?: boolean;
  chevron?: boolean;
  selected?: boolean;
  variant?: string;
  labelSpacingLeft?: number;
  labelSpacingRight?: number;
  onClick?: () => void;
  download?: boolean;
}

const ImageButton = ({
  href,
  icon,
  className = "",
  count,
  label,
  id,
  homepageFilter = false,
  chevron = false,
  labelSpacingLeft = 0,
  labelSpacingRight = 0,
  variant = "grey",
  selected = false,
  onClick,
  ...props
}: IImageButtonProps) => {
  let filterClassName = homepageFilter ? styles.homeFilterButton : "";
  let fontWeightClass = count ? "" : styles.weightBold;
  let buttonPrimaryClass = variant === "primary" ? styles.primary : styles.grey;
  let yellowButton = selected ? styles.yellow : "";
  if (!href) {
    return (
      <button
        className={`${styles.imageButton} ${buttonPrimaryClass} ${className} ${filterClassName} ${fontWeightClass} ${yellowButton}`}
        id={id}
        onClick={onClick}
        {...props}
      >
        <div className={styles.imageButtonContent}>
          <div className={styles.imageButtonIcon}>
            <Icon type={icon} />
          </div>
          <span
            style={{
              marginLeft: labelSpacingLeft,
              marginRight: labelSpacingRight,
            }}
          >
            {icon && count && <b>{count}</b>}
            {label}
          </span>
        </div>
        {chevron && <Icon type="chevron-right" />}
      </button>
    );
  }

  const external = href.indexOf("https://") > -1;
  if (external) {
    return (
      <ExternalLink href={href}>
        <button
          id={id}
          className={`${styles.imageButton}  ${buttonPrimaryClass} ${className} ${filterClassName} ${fontWeightClass} ${yellowButton}`}
          {...props}
        >
          <div className={styles.imageButtonContent}>
            <div className={styles.imageButtonIcon}>
              <Icon type={icon} />
            </div>
            <span
              style={{
                marginLeft: labelSpacingLeft,
                marginRight: labelSpacingRight,
              }}
            >
              {label}
            </span>
          </div>
          {chevron && <Icon type="chevron-right" />}
        </button>
      </ExternalLink>
    );
  }

  return (
    <Link {...{ href }} prefetch={false}>
      <button
        id={id}
        className={`${styles.imageButton} ${buttonPrimaryClass} ${className} ${filterClassName} ${fontWeightClass} ${yellowButton}`}
        {...props}
      >
        <div className={styles.imageButtonContent}>
          <div className={styles.imageButtonIcon}>
            <Icon type={icon} />
          </div>
          <span
            style={{
              marginLeft: labelSpacingLeft,
              marginRight: labelSpacingRight,
            }}
          >
            {label}
          </span>
        </div>
        {chevron && <Icon type="chevron-right" />}
      </button>
    </Link>
  );
};

export default ImageButton;
