const getColor = (color, colorMode) => {
  if (!colorMode) colorMode = "light";
  return colors[colorMode][color];
};

const colorKeys = {
  primary: "primary",
  primaryHover: "primaryHover",
  secondary: "secondary",
  dimText: "dimText",
  extremeDimText: "extremeDimText",

  imageText: "imageText",
  primaryText: "primaryText",
  secondaryText: "secondaryText",
  highlightedText: "highlightedText",

  dimBlue: "dimBlue",
  dimmerBlue: "dimmerBlue",
  lightBlue: "lightBlue",
  lighterBlue: "lighterBlue",
  spanishYellow: "spanishYellow",

  lightBackgroundFill: "lightBackgroundFill",
  lighterBackgroundFill: "lighterBackgroundFill",
  lightGrayBackgroundFill: "lightGrayBackgroundFill",
  activeNavButton: "activeNavButton",
  lightestGray: "lightestGray",

  primaryButtonFill: "primaryButtonFill",
  primaryButtonFillHover: "primaryButtonFillHover",

  headingText: "headingText",
  layoutHeaderBackground: "layoutHeaderBackground",
  siderBackground: "siderBackground",
  layoutBoxBackground: "layoutBoxBackground",
  subNavItemActive: "subNavItemActive",
  subNavItemActiveText: "subNavItemActiveText",

  tableBackground: "tableBackground",
  tableFilterBoxBackground: "tableFilterBoxBackground",
  tableFilterInputBackground: "tableFilterInputBackground",
  tableFilterBackground: "tableFilterBackground",
  tableFilterDropdownBackground: "tableFilterDropdownBackground",
  tableFilterBorder: "tableFilterBorder",
  tableRowHoverBackground: "tableRowHoverBackground",
  tableStripedRowBackground: "tableStripedRowBackground",

  paginationNavigationColor: "paginationNavigationColor",
  paginationNavigationBgColor: "paginationNavigationBgColor",
  paginationNavigationHoverColor: "paginationNavigationHoverColor",
  paginationNumberButton: "paginationNumberButton",

  white: "white",
  dark: "dark",
  smoke: "smoke",
  whiteSmoke: "whiteSmoke",
  gray: "gray",
  lightGray: "lightGray",
  danger: "danger",
  success: "success",
  warning: "warning",
  alwaysWhite: "alwaysWhite",
  avatarBg: "avatarBg",

  pickup: "pickup",
  dropoff: "dropoff",
  stop: "stop",

  highlightBg: "highlightBg",
};

const colors = {
  dark: {
    primary: "#04be76",
    primaryHover: "#40844eb8",
    secondary: "#e9e3ff",
    dimText: "#cecece",
    extremeDimText: "#9d9d9d",

    primaryText: "#FBFBFB",
    secondaryText: "#74788D",
    highlightedText: "#3e3e3e",

    dimBlue: "#3F78B9",
    dimmerBlue: "#2B3D4F",
    lightBlue: "#47A7DD",
    lighterBlue: "#8CC8EA4D",
    spanishYellow: "#F2B917",

    imageText: "#8d8c8c",
    lightBackgroundFill: "#2e2e2e",
    lighterBackgroundFill: "#424242",
    lightGrayBackgroundFill: "#444c5b",
    activeNavButton: "#3e3e3e",
    lightestGray: "#363636",

    primaryButtonFill: "#47A7DD",
    primaryButtonFillHover: "#8CC8EA4D",

    headingText: "#383839",
    layoutHeaderBackground: "#2a2a2a",
    siderBackground: "#2a2a2a",
    layoutBoxBackground: "#424242",
    subNavItemActive: "#d8e1de",
    subNavItemActiveText: "#393939",

    tableBackground: "#2e2e2e",
    tableFilterBoxBackground: "#f0f0f0",
    tableFilterInputBackground: "#f0f0f0",
    tableFilterBackground: "#f0f0f0",
    tableFilterDropdownBackground: "#e1e1e1",
    tableFilterBorder: "#606060",
    tableRowHoverBackground: "#424242",
    tableStripedRowBackground: "#51515238",

    paginationNavigationColor: "#fff",
    paginationNavigationBgColor: "#515151",
    paginationNavigationHoverColor: "#2e2e2e",
    paginationNumberButton: "#fff",

    white: "#2d3748",
    dark: "#2a2a2a",
    smoke: "#AAAAAA",
    whiteSmoke: "#1d1d1d",
    gray: "#949494",
    lightGray: "#2d3748",
    danger: "#E53E3E",
    success: "#34C38F",
    warning: "yellow",
    alwaysWhite: "#fff",
    avatarBg: "#084089",
    highlightBg: "#3c4658",
  },
  light: {
    primary: "#04be76",
    primaryHover: "#40844eb8",
    secondary: "#e9e3ff",
    dimText: "#495057",
    extremeDimText: "#9d9d9d",

    primaryText: "#333",
    secondaryText: "#575153",
    highlightedText: "#d1d1d1",

    dimBlue: "#3F78B9",
    dimmerBlue: "#2B3D4F",
    lightBlue: "#47A7DD",
    lighterBlue: "#8CC8EA4D",
    spanishYellow: "#F2B917",

    lightBackgroundFill: "#def1ff",
    lighterBackgroundFill: "#d5e1de",
    lightGrayBackgroundFill: "#e1e1e1",
    activeNavButton: "#47A7DD",
    lightestGray: "#f5f5f5",

    primaryButtonFill: "#47A7DD",
    primaryButtonFillHover: "#2a91ccf0",

    headingText: "#383839",
    layoutHeaderBackground: "#fff",
    siderBackground: "#2B3D4F",
    layoutBoxBackground: "#F6F6F6",
    subNavItemActive: "#d8e1de",
    subNavItemActiveText: "#575153",

    tableBackground: "#fff",
    tableFilterBoxBackground: "#f0f0f0",
    tableFilterInputBackground: "#f0f0f0",
    tableFilterBackground: "#f0f0f0",
    tableFilterDropdownBackground: "#e1e1e1",
    tableFilterBorder: "#e2e8f0",
    tableRowHoverBackground: "#64a8cc26",
    tableStripedRowBackground: "#f7f7f7",

    paginationNavigationColor: "#000",
    paginationNavigationBgColor: "#edf2f7",
    paginationNavigationHoverBgColor: "#fbfbfb",
    paginationNumberButton: "#9e4f8f",

    white: "#fbfbfb",
    dark: "#2a2a2a",
    smoke: "#AAAAAA",
    whiteSmoke: "#f5f5f5",
    gray: "#949494",
    lightGray: "#eaeaea",
    danger: "#E53E3E",
    success: "#34C38F",
    warning: "yellow",
    alwaysWhite: "#fff",
    avatarBg: "#084089",
    highlightBg: "#efefef",
  },
};

export { getColor, colors, colorKeys };
