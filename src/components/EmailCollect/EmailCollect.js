import React from 'react';



class EmailCollect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            valid: false,
        }
    }

    onNameInput = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailInput = (event) => {
        this.setState({email: event.target.value});
    }

    validateEmail = () => {
        return (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(this.state.email));
    }

    validateName = () => {
        return this.state.name.length;
    }

    validateInput = () => {
        if(this.validateEmail() && this.validateName()) {
            return true;
        } else {
            alert("개인정보를 올바르게 입력해주세요!");
            return false;
        }
    }

    onSendButton = (event) => {
        event.preventDefault()
        if(this.validateInput()) {
            const url = 'https://script.google.com/macros/s/AKfycbwG71k2x6pXBRK07e3t4zxEyGZJC_mPQu_3o7BQxPE7OBjQ3BcWZ5MmdN9NZVl7i_8Snw/exec';
            fetch(url, {
                method: 'post',
                mode: 'no-cors',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                })
            }).then(() => {this.props.onRouteChange('result')})
        }
    }

    render() {
        return (
            <div className="content-area">
                <main className="pa4">
                    <form className="measure center">
                        <fieldset id="mail-collect" className="ba b--transparent ph0 mh0">
                            <h1 className="f3 lh-title near-white">개인정보 수집 동의</h1>
                            <div className="mv3">
                                <label className="db fw6 lh-copy near-white f6 mb2" htmlFor="name">이름</label>
                                <input 
                                    className="f4 pa2 center br3 b--near-white tc" 
                                    type="name" 
                                    name="name"  
                                    id="name" 
                                    placeholder="홍길동"
                                    autoComplete="off"
                                    onChange={(e) => {this.onNameInput(e)}} 
                                />
                            </div>
                            <div className="mt4">
                                <label className="db fw6 lh-copy near-white f6 mb2" htmlFor="email-address">이메일 주소</label>
                                <input 
                                    className="f4 pa2 center br3 b--near-white tc" 
                                    placeholder="gildong@test.com" 
                                    type="email" 
                                    name="email-address" 
                                    id="email-address" 
                                    autoComplete="off"
                                    onChange={(e) => {this.onEmailInput(e)}} 
                                />
                            </div>
                        </fieldset>
                        <br/>
                        <button className="link ba b--silver br-pill bg-near-white grow dib black ph4 pv2 mh4 mv2 pointer" method='post' onClick={(event) => this.onSendButton(event)}>동의 후 계속하기</button>
                    </form>
                    </main>
            </div>
        )
    }
    
}
export default EmailCollect