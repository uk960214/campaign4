import React from 'react';


const NameInput = ({ username, onNameChange, onRouteChange }) => {
    return (
        <div className='content-area'>
            <h1 className='f3 lh-title near-white'>
                이름 또는 닉네임을 <br/> 알려주세요
            </h1>
            <div className='form center pv4 br3'>
                <input className='f4 pa2 center br3 b--near-white' type='text' autoFocus onChange={onNameChange}/>
            </div>
            <button 
            className='nextButton link ba b--silver br-pill bg-near-white grow dib black ph4 pv2 mh4 mv2 pointer'
            onClick={() => {
                if (username !== '') {
                    onRouteChange('color')
                } else {
                    alert("이름 혹은 닉네임을 입력해주세요!")
                }
            }}
            > 
            원기옥 만들기 &gt;
            </button>
        </div>
    )
}


export default NameInput