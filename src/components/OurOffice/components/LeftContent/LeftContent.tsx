import styles from './LeftContent.module.scss';

const LeftContent = () => {
  return (
    <div className={styles.left_content_wrapper}>
      <div>
        <strong>Armenia</strong>
        <span>2nd level, 3 Tumanyan</span>
        <span>Yerevan, 0100</span>
        <p>+(374) 98 188907</p>
      </div>
    </div>
  );
};

export default LeftContent;
