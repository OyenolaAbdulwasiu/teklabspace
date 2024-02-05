import FrameComponent6 from "./frame-component6";
import CyberCriminalsAreEvolvingI from "./cyber-criminals-are-evolving-i";
import TrustedBy1 from "./trusted-by1";
import styles from "./frame-component5.module.css";

const FrameComponent5 = () => {
  return (
    <section className={styles.textblock}>
      <div className={styles.starParent}>
        <div className={styles.star}>
          <header className={styles.bayo}>
            <div className={styles.cybercrims}>
              <div className={styles.trustedby}>
                <div className={styles.homeParent}>
                  <div className={styles.home}>Home</div>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.company}>Company</div>
                <div className={styles.researcher}>Researcher</div>
                <div className={styles.hackCollage}>Hack collage</div>
              </div>
              <div className={styles.cyberevolves}>
                <div className={styles.login}>Login</div>
                <FrameComponent6 frame3="Get started " />
              </div>
            </div>
          </header>
          <div className={styles.safehouseParent}>
            <img className={styles.safehouseIcon} alt="" src="/safehouse.svg" />
            <img
              className={styles.frameItem}
              loading="eager"
              alt=""
              src="/group-15.svg"
            />
            <img
              className={styles.image1Icon}
              loading="eager"
              alt=""
              src="/image-1@2x.png"
            />
            <img
              className={styles.image2Icon}
              loading="eager"
              alt=""
              src="/image-2@2x.png"
            />
          </div>
          <div className={styles.textGroupTitle}>
            <div className={styles.frameLogo}>
              <h1 className={styles.africasFirstEthicalContainer}>
                <p
                  className={styles.africasFirstEthical}
                >{`Africa’s First Ethical Hacking `}</p>
                <p
                  className={styles.crowdsourcedSecurityPlatform}
                >{`& Crowdsourced Security platform`}</p>
              </h1>
              <CyberCriminalsAreEvolvingI
                cyberCriminalsAreEvolving="Cyber criminals are evolving in their activities and there is a need for an"
                advancementInTheWayOrgani="advancement in the way organizations deal with these threats."
              />
              <FrameComponent6
                frame3="Get started "
                propFlex="unset"
                propWidth="259px"
                propHeight="94px"
              />
              <img
                className={styles.frameLogoChild}
                loading="eager"
                alt=""
                src="/group-14@2x.png"
              />
            </div>
            <div className={styles.trustedByWrapper}>
              <TrustedBy1 trustedBy="Trusted by" />
            </div>
          </div>
          <div className={styles.textCyberCrimesAreEvolving}>
            <h1 className={styles.ourServices}>Our Services</h1>
          </div>
        </div>
        <CyberCriminalsAreEvolvingI
          propWidth="1008px"
          propPadding="0px var(--padding-xl)"
          propMarginTop="-8px"
          propAlignSelf="unset"
          propHeight="unset"
          propColor="#000"
          propHeight1="unset"
          propDisplay="inline-block"
          propFontWeight="unset"
          propFontStyle="unset"
          propFlex="1"
          propTextAlign="center"
          propFontSize="24px"
          propFontFamily="'Open Sans'"
        />
      </div>
    </section>
  );
};

export default FrameComponent5;
