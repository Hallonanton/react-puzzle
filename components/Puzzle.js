import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'

/*==============================================================================
  # Styles
==============================================================================*/

const PuzzleBody = styled('div')`
  position: relative;
`

const PuzzlePiece = styled('div')`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 1px solid black;
  font-weight: 700;
`


/*==============================================================================
  # Componet
==============================================================================*/

class Puzzle extends Component {

  componentDidMount() {
    this.createPices()
  }

  state = {
    rows: 4,
    columns: 4,
    pieces: [],
    emptyPiece: null
  }

  createPices = () => {
    const { rows, columns } = this.state
    const totalPices = rows*columns
    let pieces = []
    
    // Set text and value for each piece
    for ( let i = 0; i < totalPices; i++ ) {
      const empty = i === totalPices-1
      pieces[i] = {
        value: i+1,
        text: empty ? "" : i+1
      }
    }

    // Save the pieces and shuffle them 
    this.setState({
      pieces: pieces,
      emptyPiece: pieces[totalPices-1]
    }, () => this.shufflePieces())
  }

  switchPlace = (item, emptyPiece) => {
    const { pieces } = this.state
    let itemIndex = null
    let emptyIndex = null

    pieces.forEach((piece, i) => {
      if ( piece.text === item.text ) {
        itemIndex = i
      } else if ( piece.text === emptyPiece.text ) {
        emptyIndex = i
      }
    })

    let updatedPieces = pieces
    let updatedEmptyPiece = Object.assign(emptyPiece, this.getPosition(itemIndex))
    updatedPieces[itemIndex] = updatedEmptyPiece
    updatedPieces[emptyIndex] = Object.assign(item, this.getPosition(emptyIndex))

    this.setState({
      pieces: updatedPieces,
      emptyPiece: updatedEmptyPiece
    })
  }


  /*
   * Event handlers
   */

  shufflePieces = () => {
    const { pieces } = this.state
    let shuffledPices = this.shuffleArray(pieces)

    // Make sure that the shuffled array is not the correct solution
    while ( this.checkCorrectOrder(shuffledPices) ) {
      shuffledPices = this.shuffleArray(pieces)
    }

    // Save position to each piece, this will be used to calculate if the piece is neighbouring the empty piece
    shuffledPices = shuffledPices.map((piece, i) => Object.assign(piece, this.getPosition(i)))

    this.setState({
      pieces: shuffledPices,
      emptyPiece: shuffledPices[shuffledPices.map(piece => piece.text).indexOf('')]
    })
  } 

  handlePieceClick = item => {
    let { emptyPiece } = this.state

    if ( this.areNeighbours(item, emptyPiece) ) {
      this.switchPlace(item, emptyPiece)
    }
  }

  /*
   * Helper functions
   */

  areNeighbours = (item1, item2) => {
    const neighboursX = Math.abs(item1.col - item2.col) === 1 && item1.row === item2.row
    const neighboursY = Math.abs(item1.row - item2.row) === 1 && item1.col === item2.col
    return neighboursX || neighboursY
  }

  getPosition = i => {
    const { rows, columns} = this.state
    return {
      row: Math.ceil( (i+1)*(1/rows) ) - 1,
      col: i - (columns * Math.floor( i*(1/columns) ) )
    }
  }

  shuffleArray = array => array.sort(() => Math.random() - 0.5)

  checkCorrectOrder = pieces => pieces.every((piece, i) => piece.value === i+1)


  /*
   * Render
   */ 

  render () {

    const { rows, columns, pieces } = this.state

    return (
      <Fragment>
        <PuzzleBody style={{
          height: `${rows*50}px`,
          width: `${columns*50}px`
        }}>
          {pieces && pieces.map((item, i) => (
              <PuzzlePiece 
                key={item.value}
                style={{
                  top: `${item.row*50}px`,
                  left: `${item.col*50}px`
                }}
                onClick={() => this.handlePieceClick(item)}
              >
                {item.text}
              </PuzzlePiece>
            )
          )}
        </PuzzleBody>
        <button onClick={this.shufflePieces}>Shuffle</button>
      </Fragment>
    )
  }
}

export default Puzzle