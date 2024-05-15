import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ResizableBox.module.css";
import { throttle } from "throttle-debounce";

interface ResizableBoxProps {
  childOne: React.ReactNode;
  childTwo: React.ReactNode;
  defaultSize: string;
  minSize: string;
  maxSize: string;
  opened: boolean;
  fixed?: boolean;
}

const parseSize = (size: string, reference: number): number => {
  if (size.endsWith("%")) {
    return (parseFloat(size) / 100) * reference;
  }
  if (size.endsWith("px")) {
    return parseFloat(size);
  }
  return parseFloat(size);
};

function ResizableBox({
  childOne,
  childTwo,
  defaultSize,
  minSize,
  maxSize,
  fixed,
  opened = true,
}: ResizableBoxProps) {
  const childTwoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [height, setHeight] = useState(window.innerHeight - 200);
  const [width, setWidth] = useState(
    parseSize(defaultSize, window.screen.width)
  );
  const [isMobile, setIsMobile] = useState(window.screen.width < 700);

  const [openModal, setOpenModal] = useState(opened);

  const startResizing = useCallback(() => {
    setIsResizing(true);
    if (overlayRef.current) {
      overlayRef.current.style.display = "block";
    }
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
    if (overlayRef.current) {
      overlayRef.current.style.display = "none";
    }
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resizeMouseThrottled = useCallback(
    throttle(100, (event: MouseEvent) => {
      if (isResizing && childTwoRef.current) {
        const clientX = event.clientX;
        const sidebarRect = childTwoRef.current.getBoundingClientRect();
        const newWidth = sidebarRect.width - (clientX - sidebarRect.left);

        const minPx = parseSize(minSize, window.innerWidth);
        const maxPx = parseSize(maxSize, window.innerWidth);

        setWidth(Math.max(minPx, Math.min(maxPx, newWidth)));
      }
    }),
    [isResizing, minSize, maxSize]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const resizeTouchThrottled = useCallback(
    throttle(60, (event: TouchEvent) => {
      if (isResizing && childTwoRef.current) {
        const touchY = event.touches[0].clientY;
        const sidebarRect = childTwoRef.current.getBoundingClientRect();
        const initialTop = sidebarRect.top;
        const newHeight = sidebarRect.height + (initialTop - touchY);
        const height = sidebarRect.bottom - newHeight;
        if (window.innerHeight - height < 50) {
          setHeight(window.innerHeight - 100);
        } else {
          setHeight(Math.max(35, Math.min(window.innerHeight, height)));
        }
      }
    }),
    [isResizing]
  );
  const handleCloseModal = () => {
    if (openModal && fixed) setOpenModal(false);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", resizeMouseThrottled);
    window.addEventListener("mouseup", stopResizing);
    window.addEventListener("touchmove", resizeTouchThrottled);
    window.addEventListener("touchend", stopResizing);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", resizeMouseThrottled);
      window.removeEventListener("mouseup", stopResizing);
      window.removeEventListener("touchmove", resizeTouchThrottled);
      window.removeEventListener("touchend", stopResizing);
    };
  }, [resizeMouseThrottled, resizeTouchThrottled, stopResizing]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} ref={overlayRef}></div>
      <div
        className={`${styles.content} ${
          isMobile && !fixed && styles.contentSwipe
        }`}
      >
        <div
          className={`${styles.childOne} ${
            fixed && openModal ? styles.dimmed : ""
          }`}
          onClick={handleCloseModal}
          style={{ height: !isMobile ? "100vh" : !fixed ? height : "100%" }}
        >
          {childOne}
        </div>
        {openModal && (
          <div
            style={{
              maxWidth: isMobile ? "100%" : maxSize,
              minWidth: minSize,
              height: !isMobile
                ? "100%"
                : !fixed
                ? window.innerHeight - height
                : "100%",
              width: !isMobile ? width : "100%",
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
                onMouseDown={(e) => {
                  e.preventDefault();
                  startResizing();
                }}
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
            <div className={styles.childTwoContent}>
              {childTwo}
              {openModal && fixed && (
                <button onClick={handleCloseModal}>
                  temp button close modal
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResizableBox;
