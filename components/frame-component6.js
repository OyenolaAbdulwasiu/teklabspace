import { useMemo } from "react";
import { Button } from "@mui/material";
import styles from "./frame-component6.module.css";

const FrameComponent6 = ({ frame3, propFlex, propWidth, propHeight }) => {
  const frameButtonStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
      height: propHeight,
    };
  }, [propFlex, propWidth, propHeight]);

  return (
    <Button
      className={styles.cyberevolvesChild}
      disableElevation={true}
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "16",
        background: "#da04f2",
        borderRadius: "22px",
        "&:hover": { background: "#da04f2" },
        height: 74,
      }}
      style={frameButtonStyle}
    >
      {frame3}
    </Button>
  );
};

export default FrameComponent6;
