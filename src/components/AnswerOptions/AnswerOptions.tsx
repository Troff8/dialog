import AssistantMessage from "../AssistantMessage/AssistantMessage";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import styles from "./AnswerOptions.module.css";
import React, { useState } from "react";
import { Global } from "@emotion/react";

import Typography from "@mui/material/Typography";

interface Queston {
  label: string;
  content: string;
}

interface AnswerOptionsProps {
  questons: Queston[];
}

const drawerBleeding = 56;

function AnswerOptions({ questons }: AnswerOptionsProps) {
  const [open, setOpen] = React.useState(false);
  const [currentQueston, setCurrentQueston] = useState<Queston>();
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const isShowSwipe: boolean = window.screen.width < 1025 ? true : false;

  const viewCurrentQueston = (label: string) => {
    const index = questons.findIndex((question) => question.label === label);
    if (index !== -1) setCurrentQueston(questons[index]);
  };

  return (
    <>
      {isShowSwipe ? (
        <></>
      ) : (
        <div className={styles.questons}>
          <div className={styles.headerQuestons}>Выбор релевантных ответов</div>
          <div className={styles.options}>
            {questons.map((option, optionIndex) => (
              <AssistantMessage key={optionIndex} {...option} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default AnswerOptions;
