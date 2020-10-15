import React from "react";
import {
  COLOR_DEFAULT_WHITE,
  COLOR_DEFAULT_BLACK,
} from "../../utilities/constants";

class Shoes368Side extends React.Component {
  render() {
    const {
      upperSideColor = COLOR_DEFAULT_WHITE,
      upperTopColor = COLOR_DEFAULT_WHITE,
      upperLiningColor = COLOR_DEFAULT_WHITE,

      quarterColor = COLOR_DEFAULT_WHITE,
      tongueColor = COLOR_DEFAULT_WHITE,
      innerColor = COLOR_DEFAULT_WHITE,
      backTabColor = COLOR_DEFAULT_WHITE,

      toeCapColor = COLOR_DEFAULT_WHITE,
      secondToeCapColor = COLOR_DEFAULT_WHITE,
      midSoleColor = COLOR_DEFAULT_WHITE,

      wovenColor = COLOR_DEFAULT_WHITE,

      stitchingColor = COLOR_DEFAULT_BLACK,
    } = this.props;

    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1024 768"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="ToeCapObject"
          d="M326.694,378.183L339.921,425.296C301.55,422.276 266.907,410.5 229.669,402.696C244.393,388.1 260.416,377.806 283.739,377.486C298.359,377.4 312.724,377.583 326.694,378.183Z"
          fill={toeCapColor}
          stroke="black"
          strokeWidth="1px"
        />
        <path
          id="secondToeCapObject"
          d="M444.803,500.265C419.266,503.021 269.071,499.188 225.572,463.818C218.431,447.789 220.803,426.181 221.55,419.426C233.793,377.988 281.451,378.018 283.387,377.521C287.935,376.882 286.811,381.923 284.148,386.309C281.255,390.884 267.89,399.446 266.028,404.97C261.622,415.783 272.981,419.452 272.981,419.452C272.981,419.452 302.055,427.725 373.679,437.034C404.628,442.898 441.132,458.297 444.803,500.265Z"
          fill={secondToeCapColor}
          stroke="black"
          strokeWidth="1px"
        />
        <path
          id="midSoleObject"
          d="M782.474,481.063C772.785,493.372 754.984,497.538 733.419,497.927C733.419,497.927 495.463,501.143 444.946,500.255C440.72,445.424 377.511,437.669 373.27,437.027C321.021,430.477 292.071,424.075 277.672,420.363C269.316,418.587 266.814,415.692 265.231,411.465C356.704,438.625 463.409,431.318 670.552,434.171C763.531,435.451 779.41,414.666 779.41,414.666C779.954,413.61 780.184,412.395 780.025,410.985C783.272,413.771 785.691,418.128 785.719,427.013C785.005,448.356 784.176,468.66 782.474,481.063Z"
          fill={midSoleColor}
          stroke="black"
          strokeWidth="1px"
        />
        <path
          id="Tongue"
          d="M327.49,378.864C397.849,343.461 470.015,314.727 541.864,284.822C557.161,270.943 571.953,264.779 586.382,264.155C592.007,269.301 594.018,281.257 594.629,295.854C590.143,295.264 585.743,297.297 581.399,300.998L337.199,414.19L327.49,378.864Z"
          fill={tongueColor}
          stroke="black"
          strokeWidth="1px"
        />
        <path
          id="Inner"
          d="M607.492,315.487C656.438,339.492 702.434,342.668 742.904,306.825L747.929,314.142L679.674,372.473L606.362,332.843L607.492,315.487Z"
          fill={innerColor}
          stroke="black"
          strokeWidth="1px"
        />
        <path
          id="midSoleLine1"
          d="M416.74,452.974C608.195,456.417 768.786,454.989 785.309,435.473"
          fill="none"
          stroke="black"
          strokeWidth="1px"
        />
        <g id="MidSoleLine2" transform="matrix(1,0,0,1,0.0948621,-7.71428)">
          <path
            d="M399.907,451.896C591.362,455.339 768.894,454.568 785.417,435.051"
            fill="none"
            stroke="black"
            strokeWidth="1px"
          />
        </g>
        <path
          id="UpperSideObject"
          d="M340.489,425.878C327.087,385.175 356.629,376.52 368.672,372.587L547.304,300.169C570.548,292.034 596.971,304.676 625.491,331.024C657.095,347.368 688.371,350.504 719.122,332.576C738.777,321.339 750.989,310.92 757.221,301.157C773.117,310.147 778.87,352.797 780.059,410.59C780.12,414.057 778.501,416.251 775.734,417.574C755.093,432.27 713.182,433.978 595.576,434.216C435.5,434.541 356.567,428.884 340.489,425.878Z"
          fill={upperSideColor}
          stroke="black"
          strokeWidth="1px"
        />
        <path
          id="BackTab"
          d="M731.155,344.193C744.6,361.064 762.364,363.815 782.853,357.649C780.983,329.765 772.38,314.585 760.885,304.861L731.155,344.193Z"
          fill={backTabColor}
          stroke="black"
          strokeWidth="1px"
        />
        <path
          id="UperLiningObject"
          d="M357.704,427.425L340.389,426.03C332.26,400.029 338.432,380.608 369.011,372.414L547.937,299.87C567.824,293.061 592.872,301.338 625.243,331.019C644.808,341.99 693.868,350.843 727.864,327.046C734.118,322.74 740.093,318.495 743.459,314.83C748.616,309.216 742.826,302.78 731.644,305.161C739.351,299.865 747.314,295.719 757.345,300.84C761.112,303.597 763.887,306.897 765.693,310.728C767.592,319.432 763.36,324.94 757.309,329.499C715.255,356.518 671.804,370.254 624.2,344.502C597.738,323.759 572.066,307.002 550.852,312.735L371.065,384.079C346.94,390.051 349.003,407.308 357.704,427.425Z"
          fill={upperLiningColor}
          stroke="black"
          strokeWidth="1px"
        />
        <path
          id="UpperLiningStiching2"
          d="M345.151,425.939L340.124,410.144L361.014,407.275L369.118,428.35"
          fill="none"
          stroke={stitchingColor}
          strokeWidth="1px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeDasharray="3,2,0,0"
        />
        <path
          id="UpperLiningStitching"
          d="M348.243,426.408C339.851,402.276 343.373,384.554 369.534,379.013L550.826,304.937C582.75,302.685 600.267,320.054 620.606,333.58C652.628,358.492 690.377,357.405 731.152,334.109C745.655,325.613 755.524,315.567 761.048,304.069"
          fill="none"
          stroke={stitchingColor}
          strokeWidth="1px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeDasharray="3,2,0,0"
        />
        <path
          id="QuarterObject"
          d="M392.41,429.336L374.399,382.685L551.164,312.493L560.601,311.677C568.556,351.143 594.353,372.739 641.876,372.575C651.552,393.213 658.628,413.645 662.882,433.852C573.816,434.62 484.186,434.215 392.41,429.336Z"
          fill={quarterColor}
          stroke="black"
          strokeWidth="1px"
        />
        <path
          id="QuarterStitchingObject"
          d="M401.197,430.927L384.71,382.895L552.442,316.823L561.075,338.017C578.614,370.869 604.779,381.001 635.511,379.106C645.6,395.542 651.948,413.796 655.962,433.185"
          fill="none"
          stroke={stitchingColor}
          strokeWidth="1px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeDasharray="3,2,0,0"
        />
        <path
          id="UpperTopObject"
          d="M368.5,348.919L370.487,383.572C372.626,396.225 385.285,398.23 403.912,394.192C453.331,383.507 499.456,369.074 543.998,352.841C559.555,344.74 566.088,332.683 553.471,312.229L536.751,269.875C535.204,266.428 531.923,266.922 527.963,268.963L368.5,348.919Z"
          fill={upperTopColor}
          stroke="black"
          strokeWidth="1px"
        />
        <path
          id="UpperStitchingObject"
          d="M373.7,346.944L376.836,381.006C379.602,389.623 388.447,393.17 406.341,389.172C453.82,378.238 499.383,362.805 544.033,345.228C553.875,339.939 557.497,331.279 550.425,316.826L530.914,267.966"
          fill="none"
          stroke={stitchingColor}
          strokeWidth="1px"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeDasharray="3,2,0,0"
        />
        <path
          id="UpperLine2"
          d="M349.268,368.388C352.303,360.548 357.978,354.753 368.089,352.395L368.085,358.853L349.268,368.388Z"
          fill={upperLiningColor}
          stroke="black"
          strokeWidth="1px"
        />
        <path
          id="UpperLine3"
          d="M594.477,295.916C661.487,333.86 703.249,329.924 731.894,304.95C737.455,304.028 740.882,304.515 742.944,306.58C733.362,317.463 718.538,325.617 699.089,331.363C659.613,337.629 629.902,329.406 605.112,313.88C597.023,308.297 588.998,303.921 581.067,301.353C584.533,297.96 588.701,295.671 594.477,295.916Z"
          fill={upperLiningColor}
          stroke="black"
          strokeWidth="1px"
        />
        <path
          id="Woven"
          d="M641.973,373.04L655.556,366.829L670.854,405.588L657.098,411.572C653.246,397.92 648.169,385.1 641.973,373.04Z"
          fill={wovenColor}
          stroke="black"
          strokeWidth="1px"
        />
      </svg>
    );
  }
}

export default Shoes368Side;
