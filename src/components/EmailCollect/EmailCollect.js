import React, { useState } from "react";

function EmailCollect({ onRouteChange }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onNameInput = (event) => setName(event.target.value);
  const onEmailInput = (event) => setEmail(event.target.value);

  const validateEmail = () =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  const validateName = () => name.length;

  const validateInput = () => {
    if (validateEmail() && validateName()) {
      return true;
    } else {
      alert("개인정보를 올바르게 입력해주세요!");
      return false;
    }
  };

  const onSendButton = (event) => {
    event.preventDefault();
    if (validateInput()) {
      const url =
        "https://script.google.com/macros/s/AKfycbwG71k2x6pXBRK07e3t4zxEyGZJC_mPQu_3o7BQxPE7OBjQ3BcWZ5MmdN9NZVl7i_8Snw/exec";
      fetch(url, {
        method: "post",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      }).then(() => {
        onRouteChange("result");
      });
    }
  };

  return (
    <div className="content-area">
      <main className="pa4">
        <form className="measure center">
          <fieldset id="mail-collect" className="ba b--transparent ph0 mh0">
            <h1 className="f3 lh-title near-white">개인정보 수집 동의</h1>
            <div className="mv3">
              <label
                className="db fw6 lh-copy near-white f6 mb2"
                htmlFor="name"
              >
                이름
              </label>
              <input
                className="f4 pa2 center br3 b--near-white tc"
                type="name"
                name="name"
                id="name"
                placeholder="홍길동"
                autoComplete="off"
                onChange={(e) => {
                  onNameInput(e);
                }}
              />
            </div>
            <div className="mt4">
              <label
                className="db fw6 lh-copy near-white f6 mb2"
                htmlFor="email-address"
              >
                이메일 주소
              </label>
              <input
                className="f4 pa2 center br3 b--near-white tc"
                placeholder="gildong@test.com"
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="off"
                onChange={(e) => {
                  onEmailInput(e);
                }}
              />
            </div>
          </fieldset>
          <br />
          <button
            className="link ba b--silver br-pill bg-near-white grow dib black ph4 pv2 mh3 mv2 pointer"
            method="post"
            onClick={(event) => onSendButton(event)}
          >
            동의 후 계속하기
          </button>
        </form>
      </main>
    </div>
  );
}

export default EmailCollect;
