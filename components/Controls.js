import React, { Component } from 'react'
import styled from '@emotion/styled'

/*==============================================================================
  # Styles
==============================================================================*/


/*==============================================================================
  # Component
==============================================================================*/

const Controls = ({ moves, shuffle, buttonText }) => (
	<div>
		<div>Moves: {moves}</div>
		<button onClick={shuffle}>{buttonText}</button>
	</div>
)

export default Controls