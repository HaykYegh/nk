import styles from './MapLoading.module.scss';

const MapLoading = () => {
    return (
        <div className={styles.spinner_wrapper}>
            <div className={styles.spinner}></div>
        </div>
    )
};

export default MapLoading;