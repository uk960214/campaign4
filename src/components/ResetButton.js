import React from "react";

const ResetButton = () => {
  return (
    <>
      <p
        className="reloadButton link underline grow dib dark-gray ph4 pv2 mh4 mv2 pointer f6"
        onClick={() => {
          window.location.reload();
        }}
      >
        &lt; 다시 만들기
      </p>
    </>
  );
};

export default ResetButton;
