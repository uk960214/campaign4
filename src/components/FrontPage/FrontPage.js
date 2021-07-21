import React from 'react';
import './FrontPage.css'


const FrontPage = ({ onRouteChange }) => {
    return (
        <div className="content-area">
            <h1 className='f2 lh-title near-white'>
                주4일제를 위한<br/> 원기옥 모으기!
            </h1>
            <svg width="250" height="250" viewBox='0 0 500 500' xmlns="http://www.w3.org/2000/svg">
                <title>Energy Ball</title>
                <g>
                    <ellipse ry="220" rx="220" id="outer" cy="250" cx="250" fill="#b6f4f4" style={{filter: 'url(#shadow1)'}}/>
                    <ellipse ry="170" rx="170" id="middle" cy="250" cx="250" fill="#d2f3f2" style={{filter: 'url(#shadow2)'}}/>
                    <ellipse ry="120" rx="120" id="inner" cy="250" cx="250" fill="#ffffff" style={{filter: 'url(#shadow3)'}}/>
                </g>
                <filter id="shadow1">
                    <feDropShadow dx="0" dy="0" stdDeviation="15"
                        floodColor="#b6f4f4"/>
                </filter>
                <filter id="shadow2">
                    <feDropShadow dx="0" dy="0" stdDeviation="15"
                        floodColor="#d2f3f2"/>
                </filter>
                <filter id="shadow3">
                    <feDropShadow dx="0" dy="0" stdDeviation="20"
                        floodColor="#ffffff"/>
                </filter>
            </svg>
            <br/><br/>
            <button 
                className='nextButton link ba b--silver br-pill bg-near-white grow dib black ph4 pv2 mh4 mv2 pointer' 
                onClick={() => onRouteChange('name')}
            > 
                시작하기 &gt;
            </button>
        </div>
    )
}

export default FrontPage