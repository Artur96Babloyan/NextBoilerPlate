import { ImageButton } from "@components/Common/Common";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import styles from "./DrawerForm.module.scss";
import Button from "@components/Common/Button/Button";
import Input from "@components/Common/Input/Input";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useWindowSize } from "@hooks/useWindowSize";
import OutsideClickHandler from "react-outside-click-handler";
import { TailSpin } from "react-loader-spinner";
import { DrawerSchemaOptions } from "@components/utils/validations";

const formSchema = yup.object().shape(DrawerSchemaOptions);

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(formSchema) });

  const [response, setResponse] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    console.log(data);
    if (data) {
      setResponse(true);
    }
  };
  return (
    <>
      {response ? (
        <div className={styles.drawerTitle}>
          <h5>{`Thank you for your interest`}</h5>
        </div>
      ) : error ? (
        <div className={styles.drawerTitle}>
          <h5>Unexpected error occured, Please try again later.</h5>
        </div>
      ) : !isLoading ? (
        <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formTitle}>
            <h5>{`Thank you for your interest in my BoilerPlate`}</h5>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formCol}>
              <div className={styles.formGroup}>
                <Input
                  className={`${styles.formControl} ${
                    errors["FirstName"] ? styles.hasError : ""
                  }`}
                  type="text"
                  name="FirstName"
                  placeholder="First Name"
                  register={register}
                  validation={{ required: true }}
                />
                <ErrorMessage
                  errors={errors}
                  name="FirstName"
                  render={({ message }) => (
                    <p className={styles.error}>{message}</p>
                  )}
                />

                <Input
                  className={`${styles.formControl} ${
                    errors["LastName"] ? styles.hasError : ""
                  }`}
                  type="text"
                  name="LastName"
                  placeholder="Last Name"
                  register={register}
                  validation={{ required: true }}
                />
                <ErrorMessage
                  errors={errors}
                  name="LastName"
                  render={({ message }) => (
                    <p className={styles.error}>{message}</p>
                  )}
                />

                <Input
                  className={`${styles.formControl} ${
                    errors["Email"] ? styles.hasError : ""
                  }`}
                  type="email"
                  name="Email"
                  placeholder="Email"
                  register={register}
                  validation={{ required: true }}
                />
                <ErrorMessage
                  errors={errors}
                  name="Email"
                  render={({ message }) => (
                    <p className={styles.error}>{message}</p>
                  )}
                />

                <Input
                  className={`${styles.formControl} ${
                    errors["Phone"] ? styles.hasError : ""
                  }`}
                  type="tel"
                  name="Phone"
                  placeholder="Contact Number"
                  register={register}
                  validation={{
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name="Phone"
                  render={({ message }) => (
                    <p className={styles.error}>{message}</p>
                  )}
                />

                <Input
                  className={`${styles.formControl} ${
                    errors["PostCode"] ? styles.hasError : ""
                  }`}
                  type="text"
                  name="PostCode"
                  placeholder="Postcode"
                  register={register}
                  validation={{
                    required: true,
                    minLength: 4,
                    maxLength: 4,
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name="PostCode"
                  render={({ message }) => (
                    <p className={styles.error}>{message}</p>
                  )}
                />
              </div>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formCol}>
              <div className={styles.formGroup}>
                <p className={styles.formControl}>
                  <b>Note:</b> By submitting this form you agree to Allam’s
                  Terms and Conditions and Allam may contact you via email,
                  phone or SMS.
                </p>
              </div>
              <Button
                className={styles.formControl}
                color="dark-secondary"
                type="submit"
                disabled={isLoading}
                rounded
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <TailSpin
          height="80"
          width="80"
          color="#000000"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{ justifyContent: "center", padding: "100px 0" }}
          wrapperClass=""
          visible={true}
        />
      )}
    </>
  );
};
export default Form;
