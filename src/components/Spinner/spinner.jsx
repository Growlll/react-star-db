import React from 'react';
import styled from "styled-components";

const SpinnerStyle = styled.div`
  width: 91px;
  height: 91px;
  display: inline-block;
  overflow: hidden;
  background: none;
  
  @keyframes ldio {
    0% {
      top: 43px;
      left: 43px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 6.5px;
      left: 6.5px;
      width: 73px;
      height: 73px;
      opacity: 0;
    }
  }
  .ldio div {
    position: absolute;
    border-width: 7px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ldio 0.9174311926605504s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .ldio div:nth-child(1) {
    border-color: #e90c59;
    animation-delay: 0s;
  }
  .ldio div:nth-child(2) {
    border-color: #46dff0;
    animation-delay: -0.4587155963302752s;
  }
  .ldio {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.91);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio div {
    box-sizing: content-box;
  }
`

const Spinner = () => {
  return (
    <SpinnerStyle className='ripple'>
      <div className="ldio">
        <div></div>
        <div></div>
      </div>
    </SpinnerStyle>
  )
}

export default Spinner;