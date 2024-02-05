import TrustedBy1 from "./trusted-by1";
import styles from "./trusted-by.module.css";

const TrustedBy = () => {
  return (
    <div className={styles.trustedBy}>
      <TrustedBy1
        trustedBy="Don’t take our word for it"
        propFlex="1"
        propWidth="unset"
        propLeft="-85.2px"
        propColor="#fff"
      />
    </div>
  );
};

export default TrustedBy;
