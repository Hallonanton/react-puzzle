import React, { Component } from 'react'
import styled from '@emotion/styled'

/*==============================================================================
  # Styles
==============================================================================*/

const ControlWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	padding: 0px 30px;

	.content {
		margin-bottom: 25px;
		text-align: center;

		h2 {
			font-size: 20px;
			margin: 0px 0px 5px;
		}

		p {
			margin: 0px;
			font-size: 12px;
		}
	}

	.moves {
		font-size: 18px;
		margin-bottom: 15px;

		span {
			font-weight: 700;
		}
	}
`

const Button = styled('button')`
	width: 160px;
	padding: 15px 25px;
	border: 0px;
	border-radius: 30px;
	color: var(--btn-color);
	background: var(--btn-bg);
	box-shadow: 0 8px 15px #ffb253c7;
	text-align: center;
	font-weight: 700;
	font-size: 16px;
	cursor: pointer;
	outline: none;
	transition: all 250ms ease;

	&:active {
		transform: translateY(3px);
		box-shadow: 0 4px 5px #ffb253c7;
	}
`


/*==============================================================================
  # Component
==============================================================================*/

const Controls = ({ moves, shuffle, buttonText }) => (
	<ControlWrapper className="controls">
		<div className="content">
			<h2>How to play</h2>
			<p>Press the tiles next to the empty tile to switch their place. Order the tiles with the numbers lowest to highest in as few moves as possible. Good luck!</p>
		</div>
		<div className="moves">Moves: <span>{moves}</span></div>
		<Button onClick={shuffle}>{buttonText}</Button>
	</ControlWrapper>
)

export default Controls