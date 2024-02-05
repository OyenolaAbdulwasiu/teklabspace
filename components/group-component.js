import styles from "./group-component.module.css";

const GroupComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <img
        className={styles.maskGroupIcon}
        loading="eager"
        alt=""
        src="/mask-group.svg"
      />
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <div className={styles.div}>100+</div>
          <h2 className={styles.activeHackers}>Active hackers</h2>
        </div>
        <div className={styles.group}>
          <div className={styles.div1}>20+</div>
          <h2 className={styles.trustedPartners}>Trusted Partners</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.div2}>500+</div>
          <h2 className={styles.uniqueDailyVisitors}>Unique Daily Visitors</h2>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
