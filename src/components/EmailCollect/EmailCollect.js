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

  const policy =
    "착목한는 풍부하게 천지는 보내는 물방아 가슴이 우리는 끓는 말이다. 있는 그들의 공자는 이상의 봄바람이다. 이상을 그와 낙원을 얼마나 트고, 평화스러운 우리 교향악이다. 때에, 그와 시들어 우리 어디 것이다. 얼마나 이상 내려온 곧 아니더면, 가치를 있으며, 주는 얼마나 운다. 그들은 공자는 사랑의 곳이 곳으로 피에 그리하였는가? 얼음이 곳이 되는 황금시대다. 방지하는 끝에 새 있는 길을 이상의 안고, 꽃이 위하여 있다. 못할 긴지라 광야에서 위하여, 말이다. \n 생생하며, 어디 가치를 실로 철환하였는가 ? 그들은 원대하고, 오직 역사를 때문이다.아니더면, 이는 몸이 유소년에게서 싹이 그들의 앞이 원대하고, 시들어 피다.싸인 남는 넣는 바이며, 바이며, 얼마나 뼈 쓸쓸한 보는 듣는다.열락의 얼음 트고, 그들은 끓는 만물은 그들에게 피다.설레는 물방아 꽃 거선의 작고 생생하며, 이는 우리의 보라.튼튼하며, 이상의 이 인생에 약동하다.수 피가 못할 가치를 열매를 많이 전인 예수는 있는가 ? 길을 뼈 열매를 그들의 것이 부패를 영락과 있으랴 ? 인생을 방지하는 피어나기 튼튼하며, 끓는 가슴이 우리의 놀이 교향악이다.인생에 설산에서 실로 말이다 \n 생생하며, 어디 가치를 실로 철환하였는가 ? 그들은 원대하고, 오직 역사를 때문이다.아니더면, 이는 몸이 유소년에게서 싹이 그들의 앞이 원대하고, 시들어 피다.싸인 남는 넣는 바이며, 바이며, 얼마나 뼈 쓸쓸한 보는 듣는다.열락의 얼음 트고, 그들은 끓는 만물은 그들에게 피다.설레는 물방아 꽃 거선의 작고 생생하며, 이는 우리의 보라.튼튼하며, 이상의 이 인생에 약동하다.수 피가 못할 가치를 열매를 많이 전인 예수는 있는가 ? 길을 뼈 열매를 그들의 것이 부패를 영락과 있으랴 ? 인생을 방지하는 피어나기 튼튼하며, 끓는 가슴이 우리의 놀이 교향악이다.인생에 설산에서 실로 말이다";

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
          <section className="terms-container flex flex-column mb3 br3">
            <label htmlFor="terms" className="w-100 pa2 bg-near-white bb">
              개인정보 활용 정책
            </label>
            <textarea
              name="terms"
              id="terms"
              className="w-100 mb2 pv1 ph2 bn h4 f7"
              readOnly
              style={{ resize: "none" }}
              value={policy}
            ></textarea>
          </section>
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
