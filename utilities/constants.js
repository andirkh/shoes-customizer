export const COLOR_WAY = [
  { value: "red", label: "University Red" },
  { value: "blue", label: "Majorelle Blue" },
  { value: "yellow", label: "Canary" },
  { value: "#1f1f1f", label: "Black" },
  { value: "white", label: "White" },
  { value: "#ffd2b4", label: "Peach" },
  { value: "#01796f", label: "Pine Green" },
  { value: "#808080", label: "Cool Grey" },
  { value: "#800000", label: "Burgundy" },
  { value: "#003366", label: "Midnight Blue" },
  { value: "#28340A", label: "Turtle Green" },
];

export const COLOR_STITCHING = [
  { value: "#1f1f1f", label: "Black" },
  { value: "White", label: "White" },
];

export const COLOR_RUBBER = [
  { value: "#1f1f1f", label: "Black" },
  { value: "White", label: "White" },
  { value: "#BE792F", label: "Gum" },
];

export const COLOR_INNER = [
  { value: "#1f1f1f", label: "Black" },
  { value: "White", label: "White" },
];

export const COLOR_OUTSOLE = [
  { value: "#FF7F50", label: "Coral" },
  { value: "#7FFF00", label: "Green" },
  { value: "blue", label: "Royale Blue" },
  { value: "#87ceeb", label: "Baby Blue" },
  { value: "#800000", label: "Burgundy" },
  { value: "#1f1f1f", label: "Black" },
  { value: "White", label: "White" },
  { value: "#542A0C", label: "Dark Brown" }
];

export const CUSTOMIZE_368 = [
  {
    shoePartName: "Upper",
    stateName: "upperSideColor",
    colors: COLOR_WAY,
  },
  {
    shoePartName: "Upper Top",
    stateName: "upperTopColor",
    colors: COLOR_WAY,
  },
  {
    shoePartName: "Upper Lining",
    stateName: "upperLiningColor",
    colors: COLOR_WAY,
  },
  {
    shoePartName: "Quarter",
    stateName: "quarterColor",
    colors: COLOR_WAY,
  },
  {
    shoePartName: "Tongue",
    stateName: "tongueColor",
    colors: COLOR_WAY,
  },
  {
    shoePartName: "Inner",
    stateName: "innerColor",
    colors: COLOR_INNER,
  },
  {
    shoePartName: "Back Tab",
    stateName: "backTabColor",
    colors: COLOR_WAY,
  },
  {
    shoePartName: "Toe Cap",
    stateName: "toeCapColor",
    colors: COLOR_RUBBER,
  },
  {
    shoePartName: "Bumper",
    stateName: "secondToeCapColor",
    colors: COLOR_RUBBER,
  },
  {
    shoePartName: "Mid Sole",
    stateName: "midSoleColor",
    colors: COLOR_RUBBER,
  },
  {
    shoePartName: "Out Sole",
    stateName: "outSoleColor",
    colors: COLOR_OUTSOLE,
  },
  {
    shoePartName: "Woven Tag",
    stateName: "wovenColor",
    colors: COLOR_WAY,
  },
  {
    shoePartName: "Stitching",
    stateName: "stitchingColor",
    colors: COLOR_STITCHING,
  },
];

export const COLOR_DEFAULT_WHITE = "#ffffff";

export const COLOR_DEFAULT_BLACK = "#000000";

export const SHOES_SIZE = [
  { size: 36, uk: 4.5, us: 5, cm: 23.5, available: false },
  { size: 37, uk: 5, us: 5.5, cm: 24, available: true },
  { size: 38, uk: 5.5, us: 6.5, cm: 24.5, available: true },
  { size: 39, uk: 6.0, us: 7, cm: 25, available: true },
  { size: 40, uk: 6.5, us: 7.5, cm: 25.5, available: true },
  { size: 41, uk: 7.5, us: 8.5, cm: 26.5, available: true },
  { size: 42, uk: 8, us: 9, cm: 27, available: true },
  { size: 43, uk: 9, us: 10, cm: 28, available: true },
  { size: 44, uk: 9.5, us: 10.5, cm: 28.5, available: true },
  { size: 45, uk: 10, us: 11, cm: 29, available: false },
  { size: 46, uk: 10.5, us: 11.5, cm: 30.5, available: true },
  { size: 47, uk: 11, us: 12, cm: 31, available: false },
];
