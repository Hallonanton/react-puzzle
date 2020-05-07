import React from 'react'
import styled from '@emotion/styled'

/*==============================================================================
  # Styles
==============================================================================*/

const PuzzleWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const PuzzleBody = styled('div')`
  position: relative;
  width: 100%;
  border: 1px solid var(--main-text-color);
  border-radius: 2px;
  background-color: var(--secondary-bg-color);
  box-shadow: var(--main-box-shadow);
  overflow: hidden;
`

const PuzzlePiece = styled('div')`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--main-text-color);
  background-color: var(--secondary-bg-color);
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

const Puzzle = ({ rows, columns, pieces, onClick, pieceSize = 75 }) => (
  <PuzzleWrapper 
    className="puzzle"
    style={{
    // Using max-width instead of width so that the puzzle can scale in size 
    maxWidth: `${columns*pieceSize}px`
  }}>
  	<PuzzleBody style={{
      // Using padding-bottom instead of height so that the puzzle can scale in size
  	  paddingBottom: `${100 * (1 + ((rows/columns) - 1))}%`,
  	}}>
  	  {pieces && pieces.map((item, i) => (
  	      <PuzzlePiece 
  	        key={item.value}
  	        className={item.text === '' ? 'empty': ''}
  	        style={{
              // Calculate responsive with and height depending on number of columns/rows
              width: `${100/columns}%`,
              height: `${100/rows}%`,
              // Calculate position depending on item position in the puzzle grid
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