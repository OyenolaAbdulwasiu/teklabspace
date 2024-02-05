import TrustedBy from "./trusted-by";
import CyberCriminalsAreEvolvingI from "./cyber-criminals-are-evolving-i";
import styles from "./frame-component3.module.css";

const FrameComponent3 = () => {
  return (
    <div className={styles.textLegalInformationInner}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.maskGroupIcon} alt="" src="/mask-group-1.svg" />
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.trustedByWrapper}>
              <TrustedBy />
            </div>
            <div className={styles.evolutionFrame}>
              <div className={styles.whenWeWere}>
                "When we were looking to meet compliance and make sure here are
                no loop holes in our application before launching to production
                that was when Teklabsapace came in and carried a thorough VAPT
                on our application. The results in the report helps us to
                prevent future reoccurence,"
              </div>
            </div>
            <div className={styles.trustGroup}>
              <div className={styles.blogFrameParent}>
                <img
                  className={styles.blogFrameIcon}
                  loading="eager"
                  alt=""
                  src="/star-1.svg"
                />
                <img
                  className={styles.blogFrameIcon1}
                  loading="eager"
                  alt=""
                  src="/star-2.svg"
                />
                <img
                  className={styles.blogFrameIcon2}
                  loading="eager"
                  alt=""
                  src="/star-3.svg"
                />
                <img
                  className={styles.blogFrameIcon3}
                  loading="eager"
                  alt=""
                  src="/star-4.svg"
                />
                <img
                  className={styles.blogFrameIcon4}
                  loading="eager"
                  alt=""
                  src="/star-5.svg"
                />
              </div>
              <div className={styles.frameWithLines}>
                <div className={styles.bayoText}>
                  <h2 className={styles.bayo}>Bayo</h2>
                </div>
                <CyberCriminalsAreEvolvingI
                  propWidth="unset"
                  propPadding="var(--padding-9xs) 0px var(--padding-8xs)"
                  propMarginTop="unset"
                  propAlignSelf="stretch"
                  propHeight="unset"
                  propColor="#f4f4f4"
                  propHeight1="32px"
                  propDisplay="flex"
                  propFontWeight="500"
                  propFontStyle="italic"
                  propFlex="1"
                  propTextAlign="center"
                  propFontSize="24px"
                  propFontFamily="'Open Sans'"
                />
              </div>
            </div>
            <div className={styles.mainGroup}>
              <img
                className={styles.mainGroupChild}
                loading="eager"
                alt=""
                src="/group-32.svg"
              />
            </div>
          </div>
        </div>
        <img
          className={styles.frameItem}
          loading="eager"
          alt=""
          src="/group-38@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
