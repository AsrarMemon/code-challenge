import React, { useState, useRef } from "react";
import styles from '../styles/accordion.module.css'

const Accordion = (props: any) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordionIcon");

  const content: any = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordionIcon" : "accordionIconRotate"
    );
  }

  return (
    <div className={styles.accordionSection}>
      <button className={styles[`accordion`]} onClick={toggleAccordion}>
        <p className={styles.accordionTitle}>{props.title}  <svg
            className={styles[setRotate]}
            height={props.height}
            width={10}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            >
            <path
                fill={'#777'}
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
        </svg></p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={styles.accordionContent}
      >
        <div
          className={styles.accordionText}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
