import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { Button } from "@components/Common/Common";
import FormDrawer from "@components/Common/Drawer/Drawer";
import CheckboxButtons from "@components/Common/CheckboxButtons/CheckboxButtons";
import { useState } from "react";

export default function Home() {
  const [textToCopy, setTextToCopy] = useState("This is the text to copy testststs");
  const [copied, setCopied] = useState(false);

  const copyTextToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div>
      Hello World
      <FormDrawer />
      <div style={{ paddingTop: 30, display: "flex", flexDirection: "column" }}>
        <Button rounded onClick={() => copyTextToClipboard(textToCopy)}>
          {copied ? "Text Copied" : "Copy Text"}
        </Button>
        <span style={{ paddingTop: 30 }}>{textToCopy}</span>
      </div>
    </div>
  );
}
