import * as React from "react";
import styles from "./Redactor.module.scss";

type IRedactorProps = {
  children: string; // normally a `children` prop would be of type `ReactNode`, but we need to explicitly require a string for `dangerouslySetInnerHTML`
};

const Redactor = ({ children, ...rest }: IRedactorProps) => {
  if (!children) return null;

  return (
    <div
      className={styles.redactor}
      dangerouslySetInnerHTML={{ __html: children }}
      {...rest}
    />
  );
};

export default Redactor;
