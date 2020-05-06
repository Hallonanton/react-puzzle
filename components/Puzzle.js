import React from 'react'
import styled from '@emotion/styled'

/*==============================================================================
  # Styles
==============================================================================*/

const PuzzleWrapper = styled('div')`
  width: 100%;
`

const PuzzleBody = styled('div')`
  position: relative;
  width: 100%;
  border: 1px solid black;
  background-color: white;
`

const PuzzlePiece = styled('div')`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
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

const Puzzle = ({ rows, columns, pieces, onClick, pieceSize = 60 }) => (
  <PuzzleWrapper style={{
    maxWidth: `${columns*pieceSize}px`
  }}>
  	<PuzzleBody style={{
  	  paddingBottom: `${100 * (1 + ((rows/columns) - 1))}%`,
  	}}>
  	  {pieces && pieces.map((item, i) => (
  	      <PuzzlePiece 
  	        key={item.value}
  	        className={item.text === '' ? 'empty': ''}
  	        style={{
              width: `${100/columns}%`,
              height: `${100/rows}%`,
  	          top: `${item.row/rows*100}%`,
  	          left: `${item.col/columns*100}%`
  	        }}
  	        onClick={() => onClick(item)}
  	      >
  	        {item.text}
  	      </PuzzlePiece>
  	    )
  	  )}
  	</PuzzleBody>
  </PuzzleWrapper>
)

export default Puzzle