interface ColorPalette {
  white: string;
  black: string;
  green: string;
  grey: string;
  swamp: string;
}

interface ScreenSizes {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

interface ShadowStyles {
  shadowB: string;
  shadowA: string;
  boxShadow: string;
  shadoTitle: string;
}

interface StyleTools {
  color: ColorPalette;
  size: ScreenSizes;
  shadow: ShadowStyles;
}

const styleTools: StyleTools = {
  color: {
    white: "#FFFFFF",
    black: "#02021B",
    green: "#9CC11A",
    grey: "#DADADA",
    swamp: "#F0F6DD",
  },
  size: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
  },
  shadow: {
    shadowB: "0px 5px 11px -2px #D1D1D1FF",
    shadowA: "0px 0px 9px 0px #B9B9B9FF",
    boxShadow: "-2px 10px 24px 9px rgba(0,0,0,0.24)",
    shadoTitle: "-4px 5px 6px rgba(0,0,0,0.36)",
  },
};

export default styleTools;
