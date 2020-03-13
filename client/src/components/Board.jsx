import React from 'react';
import Cell from './Cell.jsx'
import axios from 'axios';
// import Table from 'react-bootstrap/Table'

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardColumns: [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0]
      ],
      selected: null,
      target: null
    }
    this.clearBoard = this.clearBoard.bind(this);
    this.saveBoard = this.saveBoard.bind(this);
  }

  clearBoard() {
    //should reset the board
  }

  getPrevBoard() {
    axios.get('/api/board')
      .then(({ data }) => {
        console.log(data)
      })
  }

  saveBoard() {
    axios.post('/api/board/', {
      row1: this.state.boardColumns[0],
      row2: this.state.boardColumns[1],
      row3: this.state.boardColumns[2],
      row4: this.state.boardColumns[3],
      row5: this.state.boardColumns[4],
      row6: this.state.boardColumns[5],
      row7: this.state.boardColumns[6],
      row8: this.state.boardColumns[7]
    })
      .then(() => {
        console.log('successful post client-side')
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    return (
      //this is the table we are going to use to play!
      <div>
        <table>
          {this.state.boardColumns.map((column, index) => {
            return (
            <tr key={index}>{column.map((row, idx) => {
              return (
              <Cell key={idx} idx={idx} val={val}/> //represents each individual cell
              )
            })}</tr>
            )
          })}
        </table>
        <button onClick={this.clearBoard}>
          Reset
        </button>
        <button onClick={this.saveBoard}>
          Save
        </button>
      </div>

    )
  }

}

export default Board;