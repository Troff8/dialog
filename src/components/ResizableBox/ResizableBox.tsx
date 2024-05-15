import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ResizableBox.module.css";
import { throttle } from "throttle-debounce";

interface ResizableBoxProps {
  childOne: React.ReactNode;
  childTwo: React.ReactNode;
  minSize: number;
  maxSize: number;
  opened: boolean;
  fixed?: boolean;
}

function ResizableBox({
  childOne,
  childTwo,
  minSize,
  maxSize,
  fixed,
  opened = true,
}: ResizableBoxProps) {
  const childTwoRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [height, setHeight] = useState(window.screen.height - 35);
  const [width, setWidth] = useState(maxSize);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resizeMouseThrottled = useCallback(
    throttle(100, (event: MouseEvent) => {
      if (isResizing && childTwoRef.current) {
        const clientX = event.clientX;
        const sidebarRect = childTwoRef.current.getBoundingClientRect();
        const newWidth = sidebarRect.width - (clientX - sidebarRect.left);
        setWidth(newWidth);
      }
    }),
    [isResizing]
  );

  const resizeTouchThrottled = useCallback(
    throttle(30, (event: TouchEvent) => {
      if (isResizing && childTwoRef.current) {
        const touchY = event.touches[0].clientY;
        const sidebarRect = childTwoRef.current.getBoundingClientRect();
        const initialTop = sidebarRect.top;
        const newHeight = Math.max(
          minSize,
          Math.min(maxSize, sidebarRect.height + (initialTop - touchY))
        );
        const newTop = sidebarRect.bottom - newHeight;

        const heightScreen = window.screen.height;

        // if (newTop - height > heightScreen / 2) setHeight(heightScreen - 35);
        // else if (height - newTop > height / 2) setHeight(35);
        if (newTop < 35) setHeight(35);
        else if (heightScreen - newTop < 46) {
          setHeight(heightScreen - 35);
        } else setHeight(newTop);
      }
    }),
    [isResizing, minSize, maxSize]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resizeMouseThrottled);
    window.addEventListener("mouseup", stopResizing);
    window.addEventListener("touchmove", resizeTouchThrottled);
    window.addEventListener("touchend", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resizeMouseThrottled);
      window.removeEventListener("mouseup", stopResizing);
      window.removeEventListener("touchmove", resizeTouchThrottled);
      window.removeEventListener("touchend", stopResizing);
    };
  }, [resizeMouseThrottled, resizeTouchThrottled, stopResizing]);

  const isMobile = window.screen.width < 700;

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>{childOne}</div>
        {opened && (
          <div
            style={{
              maxWidth: maxSize,
              minWidth: minSize,
              top: !isMobile ? 0 : !fixed ? height : 0,
              width: !isMobile ? width : "100%",
              // height: !isMobile
              //   ? "100%"
              //   : !fixed
              //   ? window.screen.height - height - 35
              //   : 0,
            }}
            className={`${styles.childTwo} ${fixed && styles.childTwoFixed} ${
              isMobile && !fixed && styles.swipe
            }`}
            ref={childTwoRef}
          >
            {isMobile && !fixed && (
              <div
                className={styles.wrapperPuller}
                onTouchStart={startResizing}
              >
                <div className={styles.puller} />
              </div>
            )}
            <div
              className={`${styles.resizer} ${
                isResizing && styles.resizerActive
              }`}
              onMouseDown={(e) => {
                e.preventDefault();
                startResizing();
              }}
            />
            <div className={styles.childTwoContent}>{childTwo} </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResizableBox;
