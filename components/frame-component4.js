import GroupComponent1 from "./group-component1";
import CyberCriminalsAreEvolvingI from "./cyber-criminals-are-evolving-i";
import FrameComponent6 from "./frame-component6";
import styles from "./frame-component4.module.css";

const FrameComponent4 = () => {
  return (
    <div className={styles.contactUsFrame}>
      <div className={styles.groupThreeEllipses}>
        <div className={styles.lineSeparator} />
        <div className={styles.frameParent}>
          <GroupComponent1
            password1="/password-1@2x.png"
            vulnerabilityAssessment="Vulnerability Assessment"
            andPenetrationTesting="and Penetration Testing"
            cyberCriminalsAreEvolving="(VAPT) describes a broad range of security testing services designed to identify and help address cyber security exposures on your organization digital assets."
          />
          <GroupComponent1
            password1="/cpu-1@2x.png"
            vulnerabilityAssessment="Vulnerability Disclosure"
            andPenetrationTesting="Program"
            cyberCriminalsAreEvolving="Vulnerability disclosure program is a way of creating a safe harbor for hackers who find a security vulnerability in your system without legal action carried out..."
            propHeight="192px"
          />
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.hacking1Icon}
              loading="eager"
              alt=""
              src="/hacking-1@2x.png"
            />
            <b className={styles.bugBountyProgram}>Bug Bounty Program</b>
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
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
