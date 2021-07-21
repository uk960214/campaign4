import React from 'react';


const ColorInput = ({ colors, onColorChange, onRouteChange }) => {
    return (
        <div className='content-area'>
            <h1 className='f3 lh-title near-white'>
                원기옥 색깔 <br/>세가지를 골라주세요!
            </h1>
            <svg width="250" height="250" viewBox='0 0 500 500' xmlns="http://www.w3.org/2000/svg">
                <title>Energy Ball</title>
                <g>
                    <ellipse ry="220" rx="220" id="outer" cy="250" cx="250" fill={colors[0]} style={{filter: 'url(#shadow1)'}}/>
                    <ellipse ry="170" rx="170" id="middle" cy="250" cx="250" fill={colors[1]} style={{filter: 'url(#shadow2)'}}/>
                    <ellipse ry="120" rx="120" id="inner" cy="250" cx="250" fill={colors[2]} style={{filter: 'url(#shadow3)'}}/>
                </g>
                <filter id="shadow1">
                    <feDropShadow dx="0" dy="0" stdDeviation="15"
                        floodColor={colors[0]}/>
                </filter>
                <filter id="shadow2">
                    <feDropShadow dx="0" dy="0" stdDeviation="15"
                        floodColor={colors[1]}/>
                </filter>
                <filter id="shadow3">
                    <feDropShadow dx="0" dy="0" stdDeviation="10"
                        floodColor={colors[2]}/>
                </filter>
            </svg>
            <div className='form center pa4 br3'>
                <input name='0' type='color' value={colors[0]} onChange={onColorChange}/>
                <input name='1' type='color' value={colors[1]} onChange={onColorChange}/>
                <input name='2' type='color' value={colors[2]} onChange={onColorChange}/>
            </div>
            <button 
            className='nextButton link ba b--silver br-pill bg-near-white grow dib black ph4 pv2 mh4 mv2 pointer' 
            onClick={() => onRouteChange('email')}> 
            다 골랐어요!
            </button>
        </div>
    )
}


export default ColorInput