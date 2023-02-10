import { ImageButton } from "@components/Common/Common";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import styles from "./Drawer.module.scss";
import { useWindowSize } from "@hooks/useWindowSize";
import OutsideClickHandler from "react-outside-click-handler";
import Form from "../Form/DrawerForm";

const FormDrawer = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div className={styles.drawer}>
        <div className={styles.download}>
          <ImageButton
            icon="download"
            label="Drawer Example"
            chevron={true}
            labelSpacingLeft={8}
            labelSpacingRight={16}
            onClick={toggleDrawer}
          />
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          size={width <= 600 ? width - 30 : 596}
          enableOverlay={false}
          style={{ backgroundColor: "#FFCB05" }}
          zIndex={1001}
        >
          <Form />
        </Drawer>
      </div>
    </OutsideClickHandler>
  );
};
export default FormDrawer;
