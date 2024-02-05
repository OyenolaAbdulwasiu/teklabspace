import { useMemo } from "react";
import styles from "./cyber-criminals-are-evolving-i.module.css";

const CyberCriminalsAreEvolvingI = ({
  cyberCriminalsAreEvolving,
  advancementInTheWayOrgani,
  propWidth,
  propPadding,
  propMarginTop,
  propAlignSelf,
  propHeight,
  propColor,
  propHeight1,
  propDisplay,
  propFontWeight,
  propFontStyle,
  propFlex,
  propTextAlign,
  propFontSize,
  propFontFamily,
}) => {
  const cyberCriminalsAreEvolvingIStyle = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      marginTop: propMarginTop,
      alignSelf: propAlignSelf,
      height: propHeight,
    };
  }, [propWidth, propPadding, propMarginTop, propAlignSelf, propHeight]);

  const cyberCriminalsAreContainerStyle = useMemo(() => {
    return {
      color: propColor,
      height: propHeight1,
      display: propDisplay,
      fontWeight: propFontWeight,
      fontStyle: propFontStyle,
      flex: propFlex,
      textAlign: propTextAlign,
      fontSize: propFontSize,
      fontFamily: propFontFamily,
    };
  }, [
    propColor,
    propHeight1,
    propDisplay,
    propFontWeight,
    propFontStyle,
    propFlex,
    propTextAlign,
    propFontSize,
    propFontFamily,
  ]);

  return (
    <div
      className={styles.cyberCriminalsAreEvolvingI}
      style={cyberCriminalsAreEvolvingIStyle}
    >
      <div
        className={styles.cyberCriminalsAreContainer}
        style={cyberCriminalsAreContainerStyle}
      >
        <p className={styles.cyberCriminalsAre}>{cyberCriminalsAreEvolving}</p>
        <p className={styles.advancementInThe}>{advancementInTheWayOrgani}</p>
        <p className={styles.harnessThePower}>
          Harness the power of crowd source security to deal with these threats
          and fix security vulnerabilities.
        </p>
      </div>
    </div>
  );
};

export default CyberCriminalsAreEvolvingI;
