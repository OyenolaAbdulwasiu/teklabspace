import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import GroupComponent from "../components/group-component";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.container} />
      <FrameComponent5 />
      <section className={styles.textLegalInformation}>
        <FrameComponent4 />
        <GroupComponent />
        <FrameComponent3 />
        <div className={styles.trustedByTextParent}>
          <div className={styles.trustedByText}>
            <h1 className={styles.trustedBy}>Ethical Hacking</h1>
          </div>
          <div className={styles.secondImageFrame}>
            <img
              className={styles.image6Icon}
              loading="eager"
              alt=""
              src="/image-6@2x.png"
            />
            <img
              className={styles.image7Icon}
              loading="eager"
              alt=""
              src="/image-7@2x.png"
            />
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <section className={styles.framewithtextandimage}>
        <div className={styles.trustedby}>
          <img className={styles.transparentRectangleIcon} alt="" />
          <FrameComponent1 />
          <FrameComponent />
        </div>
      </section>
    </div>
  );
};

export default Desktop;
