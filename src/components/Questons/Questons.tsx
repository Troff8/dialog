import AssistantMessage from "../AssistantMessage/AssistantMessage";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import styles from "./Questons.module.css";
import React from "react";
import { Global } from "@emotion/react";

import Typography from "@mui/material/Typography";

interface Queston {
  label: string;
  content: string;
}

interface QuestonsProps {
  questons: Queston[];
}

const drawerBleeding = 56;

function Questons({ questons }: QuestonsProps) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const isShowSwipe: boolean = window.screen.width < 1025 ? true : false;
  return (
    <>
      {isShowSwipe ? (
        <>
          <Global
            styles={{
              ".MuiDrawer-root > .MuiPaper-root": {
                height: `calc(50% - ${drawerBleeding}px)`,
                overflow: "visible",
              },
            }}
          />
          <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            swipeAreaWidth={drawerBleeding}
            disableSwipeToOpen={false}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <div className={styles.swipe}>
              <div className={styles.puller} />
              <Typography sx={{ p: 2, color: "text.secondary" }}>
                Выбор релевантных ответов
              </Typography>
            </div>
            <div className={styles.questons}>
              <div className={styles.options}>
                {questons.map((option, optionIndex) => (
                  <AssistantMessage
                    key={optionIndex}
                    message={{ role: "assistant", ...option }}
                  />
                ))}
              </div>
            </div>
          </SwipeableDrawer>
        </>
      ) : (
        <div className={styles.questons}>
          <div className={styles.headerQuestons}>Выбор релевантных ответов</div>
          <div className={styles.options}>
            {questons.map((option, optionIndex) => (
              <AssistantMessage
                key={optionIndex}
                message={{ role: "assistant", ...option }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Questons;
