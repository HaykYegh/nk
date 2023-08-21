import styles from './LeftContent.module.scss';

const LeftContent = () => {
    return (
        <div className={styles.left_content_wrapper}>
            <p>
                <strong>Armenia HQ</strong>
                <span>2nd level, 59 Baghramyan</span>
                <span>Yerevan, 0033</span>
            </p>
            <p>+(374) 95 507065</p>
            <p>
                <strong>Armenia Branch Office</strong>
                <span>3rd level, 48 Leo</span>
                <span>Yerevan, 0015</span>
            </p>
            <p>
                <strong>New York </strong>
                <span>347 Fifth Avenue</span>
                <span>New York, NY 10016</span>
            </p>
            <p>+1 (646) 846-7220</p>
        </div>
    )
};


export default LeftContent;








