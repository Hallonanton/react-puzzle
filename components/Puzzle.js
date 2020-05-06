import React from 'react'
import styled from '@emotion/styled'

/*==============================================================================
  # Styles
==============================================================================*/

const PuzzleBody = styled('div')`
  position: relative;
  border: 1px solid black;
  background-color: white;
`

const PuzzlePiece = styled('div')`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  background-color: white;
  font-weight: 700;
  transition: all 250ms ease;
  box-sizing: border-box;
  z-index: 2;

  &.empty {
    z-index: 1;
  }
`

/*==============================================================================
  # Component
==============================================================================*/

const Puzzle = ({ rows, columns, pieces, onClick }) => (
	<PuzzleBody style={{
	  height: `${rows*50}px`,
	  width: `${columns*50}px`
	}}>
	  {pieces && pieces.map((item, i) => (
	      <PuzzlePiece 
	        key={item.value}
	        className={item.text === '' ? 'empty': ''}
	        style={{
	          top: `${item.row*50}px`,
	          left: `${item.col*50}px`
	        }}
	        onClick={() => onClick(item)}
	      >
	        {item.text}
	      </PuzzlePiece>
	    )
	  )}
	</PuzzleBody>
)

export default Puzzle