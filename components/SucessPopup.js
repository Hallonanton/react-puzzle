import React from 'react'
import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'

/*==============================================================================
  # Styles
==============================================================================*/

const fadeIn = keyframes`
  from {
  	background-color: rgba(0,0,0,0);
  }
  to {
  	background-color: rgba(0,0,0,0.3);
  }
`

const reveal = keyframes`
  from {
  	opacity: 0;
  	transform: translateY( 100px ) scale(0.5);
  }
  to {
  	opacity: 1;
  	transform: translateY( 0px ) scale(1);
  }
`

const SucessPopup = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0,0,0,0.3);
  animation: ${fadeIn} 500ms ease;

  .content { 
    position: relative;
    padding: 20px 30px;
    background-color: var(--secondary-bg-color);
    border: 2px solid var(--main-text-color);
    border-radius: 2px;
    text-align: center;
    animation: ${reveal} 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

    h2 {
      margin: 0 0 10px;
    }

    p {
      margin: 0 0 20px;
    }

    img {
      width: 100%;
      max-width: 450px;
    }
  }
`

const CloseBtn = styled('button')`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  padding: 0px;
  border: 0px;
  border-radius: 50%;
  background-color: var(--main-bg-color);
  cursor: pointer;
  outline: none;
  box-shadow: none;

  &::before,
  &::after {
    display: block;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 1px;
    width: 60%;
    background-color: var(--main-text-color);
  }

  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`

/*==============================================================================
  # Component
==============================================================================*/

const Popup = ({ closePopup, moves }) => {

	return (
		<SucessPopup onClick={closePopup}>
		  <div className="content">
		    <CloseBtn />
		    <h2>Congratulations!</h2>
		    <p>You managed to beat the puzzle with {moves} {moves === 1 ? 'move' : 'moves'}!</p>
		    <img src="https://media.giphy.com/media/l49JNZ87F3AmPoH0A/giphy.gif" alt="Congratulations!" />
		  </div>
		</SucessPopup>
	)
}

export default Popup;