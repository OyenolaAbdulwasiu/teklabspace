import TrustedBy1 from "./trusted-by1";
import CyberCriminalsAreEvolvingI from "./cyber-criminals-are-evolving-i";
import FrameComponent6 from "./frame-component6";
import styles from "./frame-component2.module.css";

const FrameComponent2 = () => {
  return (
    <section className={styles.blogTitleFrame}>
      <div className={styles.blogTitleFrameChild} />
      <div className={styles.trustedBy}>
        <div className={styles.trustedBy1}>Trusted by</div>
      </div>
      <TrustedBy1
        trustedBy="Our Blog"
        propFlex="unset"
        propWidth="183px"
        propLeft="-31px"
        propColor="#fff"
      />
      <div className={styles.evolveactivities}>
        <div className={styles.trustedsource}>
          <h2 className={styles.heyThereCheckoutContainer}>
            <p className={styles.heyThere}>Hey there,</p>
            <p className={styles.checkoutOurBlog}>Checkout our blog today</p>
          </h2>
          <CyberCriminalsAreEvolvingI
            propWidth="unset"
            propPadding="var(--padding-10xs) 0px var(--padding-9xs)"
            propMarginTop="unset"
            propAlignSelf="unset"
            propHeight="unset"
            propColor="#fff"
            propHeight1="unset"
            propDisplay="inline-block"
            propFontWeight="unset"
            propFontStyle="unset"
            propFlex="unset"
            propTextAlign="center"
            propFontSize="24px"
            propFontFamily="'Open Sans'"
          />
          <FrameComponent6
            frame3="Visit Blog"
            propFlex="unset"
            propWidth="158px"
            propHeight="74px"
          />
        </div>
        <img
          className={styles.image5Icon}
          loading="eager"
          alt=""
          src="/image-5@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
