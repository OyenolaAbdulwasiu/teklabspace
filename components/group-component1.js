import { useMemo } from "react";
import CyberCriminalsAreEvolvingI from "./cyber-criminals-are-evolving-i";
import FrameComponent6 from "./frame-component6";
import styles from "./group-component1.module.css";

const GroupComponent1 = ({
  password1,
  vulnerabilityAssessment,
  andPenetrationTesting,
  cyberCriminalsAreEvolving,
  propHeight,
}) => {
  const cyberCriminalsAreContainerStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <img
        className={styles.password1Icon}
        loading="eager"
        alt=""
        src={password1}
      />
      <b className={styles.vulnerabilityAssessmentAndContainer}>
        <p className={styles.vulnerabilityAssessment}>
          {vulnerabilityAssessment}
        </p>
        <p className={styles.andPenetrationTesting}>{andPenetrationTesting}</p>
      </b>
      <CyberCriminalsAreEvolvingI
        propWidth="unset"
        propPadding="0px 0px var(--padding-10xs)"
        propMarginTop="unset"
        propAlignSelf="stretch"
        propHeight="unset"
        propColor="#2d2c2c"
        propHeight1="unset"
        propDisplay="inline-block"
        propFontWeight="unset"
        propFontStyle="unset"
        propFlex="1"
        propTextAlign="center"
        propFontSize="24px"
        propFontFamily="'Open Sans'"
      />
      <FrameComponent6
        frame3="Learn More"
        propFlex="unset"
        propWidth="170px"
        propHeight="74px"
      />
    </div>
  );
};

export default GroupComponent1;
