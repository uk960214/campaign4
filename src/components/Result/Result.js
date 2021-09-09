import React, { useRef } from "react";
import "./Result.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const saveSvgAsPng = require("save-svg-as-png");

function Result({ username, colors }) {
  const svgRef = useRef(null);

  const onDownloadClick = () => {
    const node = svgRef.current;
    saveSvgAsPng.default.saveSvgAsPng(node, "");
  };

  const hashtags = "#주4일제 #주4일제_원기옥모으기 #주4일제_왜안돼";
  return (
    <div className="content-area">
      <h1 className="f3 lh-title near-white">
        SNS에 공유해 함께 <br /> 원기옥을 모아요!
      </h1>
      <textarea
        className="near-white pa2 w-90 tc overflow-auto br2"
        id="hashtags"
        readOnly
        value={hashtags}
      ></textarea>
      <br />
      <section className="svgContainer flex justify-center">
        <svg
          ref={svgRef}
          id="resultImage"
          width="300"
          height="300"
          viewBox="0 0 1080 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shadow-3"
        >
          <g clipPath="url(#clip0)">
            <rect width="1080" height="1080" fill="#5E2CA5" />
            <circle
              r="200"
              transform="matrix(1 0 0 -1 540 220)"
              fill={colors[0]}
              style={{ filter: "url(#custom1)" }}
            />
            <circle
              r="150"
              transform="matrix(1 0 0 -1 540 220)"
              fill={colors[1]}
              style={{ filter: "url(#custom2)" }}
            />
            <circle
              r="100"
              transform="matrix(1 0 0 -1 540 220)"
              fill={colors[2]}
              style={{ filter: "url(#custom3)" }}
            />
            <g>
              <path
                d="M424.417 442.133L481.495 543.043H591.076L656.583 442.133C656.583 442.133 649.885 420.666 656.583 410.102C663.183 399.692 672.818 394.51 685.002 396.374C694.363 397.806 700.595 401.714 704.991 410.102C709.357 418.432 708.633 425.514 704.991 434.185C700.942 443.828 685.002 452.007 685.002 452.007C685.002 452.007 613.836 543.328 596.133 612.886C585.804 653.472 591.076 704.644 591.076 704.644C591.076 704.644 631.191 754.498 638.039 769.429C651.592 798.982 656.583 850.591 656.583 850.591C656.583 850.591 669.162 855.982 674.164 862.633C677.351 866.87 679.944 874.916 679.944 874.916H643.578L638.039 850.591C638.039 850.591 623.389 811.559 608.897 789.419C587.99 757.477 540.5 719.576 540.5 719.576C540.5 719.576 493.01 757.477 472.103 789.419C457.611 811.559 442.961 850.591 442.961 850.591L437.422 874.916H401.056C401.056 874.916 403.649 866.87 406.836 862.633C411.838 855.982 424.417 850.591 424.417 850.591C424.417 850.591 431.545 799.872 442.961 769.429C448.019 755.943 485.83 708.979 485.83 708.979C485.83 708.979 494.568 659.313 485.83 622.038C468.691 548.921 395.998 452.007 395.998 452.007C395.998 452.007 380.058 443.828 376.009 434.185C372.367 425.514 371.643 418.432 376.009 410.102C380.405 401.714 386.637 397.806 395.998 396.374C408.182 394.51 417.817 399.692 424.417 410.102C431.115 420.666 424.417 442.133 424.417 442.133Z"
                fill="white"
                stroke="black"
                strokeWidth="3"
              />
              <path
                d="M590.539 549.305C590.539 563.139 581.436 575.877 569.412 585.247C557.388 594.616 542.833 600.307 532.552 600.307C522.272 600.307 507.717 594.616 495.693 585.247C483.669 575.877 474.566 563.139 474.566 549.305C474.566 521.308 500.346 498.303 532.552 498.303C564.759 498.303 590.539 521.308 590.539 549.305Z"
                fill="white"
                stroke="black"
                strokeWidth="3"
              />
              <path
                d="M506.265 560.994L519.863 566.865L506.265 569.607"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeinejoin="round"
              />
              <path
                d="M558.845 560.994L545.247 566.865L558.845 569.607"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeinejoin="round"
              />
              <circle
                cx="0"
                cy="220.5"
                r="165.5"
                fill="#B6F4F4"
                style={{ filter: "url(#shadow1)" }}
              />
              <circle
                cx="0"
                cy="220.5"
                r="124.125"
                fill="#D2F3F2"
                style={{ filter: "url(#shadow2)" }}
              />
              <circle
                cx="0"
                cy="220.5"
                r="82.75"
                fill="#ffffff"
                style={{ filter: "url(#shadow3)" }}
              />
              <circle
                cx="1080"
                cy="220.5"
                r="165.5"
                fill="#B6F4F4"
                style={{ filter: "url(#shadow1)" }}
              />
              <circle
                cx="1080"
                cy="220.5"
                r="124.125"
                fill="#D2F3F2"
                style={{ filter: "url(#shadow2)" }}
              />
              <circle
                cx="1080"
                cy="220.5"
                r="82.75"
                fill="#ffffff"
                style={{ filter: "url(#shadow3)" }}
              />
              <ellipse
                cx="774.474"
                cy="219.774"
                rx="10.4745"
                ry="10.7737"
                fill="#D2F3F2"
                style={{ filter: "url(#shadow4)" }}
              />
              <ellipse
                cx="826.423"
                cy="219.774"
                rx="10.4745"
                ry="10.7737"
                fill="#D2F3F2"
                style={{ filter: "url(#shadow4)" }}
              />
              <ellipse
                cx="878.372"
                cy="219.774"
                rx="10.4745"
                ry="10.7737"
                fill="#D2F3F2"
                style={{ filter: "url(#shadow4)" }}
              />
              <ellipse
                cx="201.474"
                cy="219.774"
                rx="10.4745"
                ry="10.7737"
                fill="#D2F3F2"
                style={{ filter: "url(#shadow4)" }}
              />
              <ellipse
                cx="253.423"
                cy="219.774"
                rx="10.4745"
                ry="10.7737"
                fill="#D2F3F2"
                style={{ filter: "url(#shadow4)" }}
              />
              <ellipse
                cx="305.372"
                cy="219.774"
                rx="10.4745"
                ry="10.7737"
                fill="#D2F3F2"
                style={{ filter: "url(#shadow4)" }}
              />
            </g>
            <text
              textAnchor="middle"
              dx="50%"
              dy="90%"
              width="1080"
              fill="#f4f4f4"
              fontSize="48px"
              fontWeight="750"
            >
              {username}님도 주4일제를 위한 원기옥 모으는 중!
            </text>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="1080" height="1080" fill="white" />
            </clipPath>
          </defs>
          <filter id="custom1">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="15"
              floodColor={colors[0]}
            />
          </filter>
          <filter id="custom2">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="15"
              floodColor={colors[1]}
            />
          </filter>
          <filter id="custom3">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="10"
              floodColor={colors[2]}
            />
          </filter>
          <filter id="shadow1">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="15"
              floodColor="#b6f4f4"
            />
          </filter>
          <filter id="shadow2">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="15"
              floodColor="#d2f3f2"
            />
          </filter>
          <filter id="shadow3">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="20"
              floodColor="#ffffff"
            />
          </filter>
          <filter id="shadow4">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#d2f3f2" />
          </filter>
        </svg>
      </section>
      <br />
      <CopyToClipboard text={hashtags}>
        <button
          className="nextButton link ba b--silver br-pill bg-near-white grow dib black ph4 pv2 mh4 mv2 pointer shadow-3"
          onClick={() => onDownloadClick()}
        >
          다운로드 &amp; 복사
        </button>
      </CopyToClipboard>
      <button
        className="reloadButton link ba b--silver br-pill bg-near-white grow dib black ph4 pv2 mh4 mv2 pointer shadow-3"
        onClick={() => {
          window.location.reload();
        }}
      >
        다시 만들기
      </button>
    </div>
  );
}

export default Result;
