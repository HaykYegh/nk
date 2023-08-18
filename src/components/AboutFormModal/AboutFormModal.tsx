import { FC, useEffect, useRef } from "react";
import styles from "./AboutFormModal.module.scss";
import { IAboutFormModalProps } from "./AboutFormModalTypes";
import classNames from "classnames";

const AboutFormModal: FC<IAboutFormModalProps> = ({ showFormModal,setShowFormModalBlock }) => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        divRef.current!.focus();
    }, [showFormModal])

  return (
    <div
      className={classNames(styles.lightbox_inner, {
        [styles.lightbox_inner_none]: !showFormModal,
      })}
    >
      <div ref={divRef} onBlur={setShowFormModalBlock} tabIndex={0}  className={styles.lightbox_content}>
        <div className={styles.block_form}>
            
        </div>
      </div>
    </div>
  );
};

export default AboutFormModal;
