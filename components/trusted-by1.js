import { useMemo } from "react";
import styles from "./trusted-by1.module.css";

const TrustedBy1 = ({
  trustedBy,
  propFlex,
  propWidth,
  propLeft,
  propColor,
}) => {
  const trustedByStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const trustedBy1Style = useMemo(() => {
    return {
      left: propLeft,
      color: propColor,
    };
  }, [propLeft, propColor]);

  return (
    <div className={styles.trustedBy} style={trustedByStyle}>
      <h1 className={styles.trustedBy1} style={trustedBy1Style}>
        {trustedBy}
      </h1>
    </div>
  );
};

export default TrustedBy1;
