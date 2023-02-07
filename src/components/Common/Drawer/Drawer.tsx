import { ImageButton } from "@components/Common/Common";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import styles from "./FormDrawer.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useWindowSize } from "@hooks/useWindowSize";
import OutsideClickHandler from "react-outside-click-handler";

import { TailSpin } from "react-loader-spinner";
import { DrawerSchemaOptions } from "@components/utils/validations";
import CheckboxButtons from "../CheckboxButtons/CheckboxButtons";

const formSchema = yup.object().shape(DrawerSchemaOptions);

const FormDrawer = ({ title, forStiky = false }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkboxButtonsData2 = [
    { value: "Morning", text: "Morning" },
    { value: "Afternoon", text: "Afternoon" },
  ];

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const onSubmit = async (data: any) => {};
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
          <div className={styles.drawerTitle}>
            <h5>{`Thank you for interest in My BoilerPlate.`}</h5>
            <CheckboxButtons
            register={register}
            name="Appointment_Preferred_Time__c"
            className={styles.formControl}
            data={checkboxButtonsData2}
          />
          </div>
      
        </Drawer>
      </div>
    </OutsideClickHandler>
  );
};
export default FormDrawer;
