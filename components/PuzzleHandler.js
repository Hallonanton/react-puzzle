import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import Controls from './Controls'
import Puzzle from './Puzzle'

/*==============================================================================
  # Styles
==============================================================================*/


/*==============================================================================
  # Componet
==============================================================================*/

class PuzzleHandler extends Component {

  componentDidMount() {
    this.createPices()
  }

  state = {
    rows: 3,
    columns: 4,
    pieces: [],
    emptyPiece: null,
    completed: false,
    moves: 0
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
    const { pieces, moves } = this.state
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
      emptyPiece: updatedEmptyPiece,
      moves: moves+1
    }, () => {
      if ( this.checkCorrectOrder(updatedPieces) ) {
        this.sucess()
      }
    })
  }

  sucess = () => {
    console.log('Sucess')
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
      emptyPiece: shuffledPices[shuffledPices.map(piece => piece.text).indexOf('')],
      completed: false,
      moves: 0
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
    const row = Math.floor(i/columns)
    const col = i - (columns * Math.floor( i*(1/columns) ) )

    return {
      row: row,
      col: col
    }
  }

  shuffleArray = array => array.sort(() => Math.random() - 0.5)

  checkCorrectOrder = pieces => pieces.every((piece, i) => piece.value === i+1)


  /*
   * Render
   */ 

  render () {

    const { rows, columns, pieces, moves, completed } = this.state

    return (
      <Fragment>
        <Puzzle 
          rows={rows}
          columns={columns}
          pieces={pieces}
          onClick={item => this.handlePieceClick(item)}
        />
        <Controls 
          shuffle={this.shufflePieces}
          moves={moves}
          buttonText={completed ? 'Play again' : 'Shuffle'}
        />
      </Fragment>
    )
  }
}

export default PuzzleHandler