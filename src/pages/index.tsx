import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { Button } from "@components/Common/Common";
import FormDrawer from "@components/Common/Drawer/Drawer";
import CheckboxButtons from "@components/Common/CheckboxButtons/CheckboxButtons";

export default function Home() {

  return (
    <div>
      Hello World
      <FormDrawer title={"Test"} />
    
    </div>
  );
}
