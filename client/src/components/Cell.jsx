import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: this.props.val,
      selected: false
    }
    this.handleSelectedCell = this.handleSelectedCell.bind(this);
  }

  //This handles movement of a particular piece.
  handleSelectedCell() {
    if (!this.state.selected && this.state.val) {
      this.setState({
        selected: true,
        val: this.state.val - 1
      })
    } else {
      this.setState({
        selected: true,
        val: this.state.val + 1
      })
    }
    this.setState({
      selected: false
    })
  }

  render() {
    //variables for in-line styling
    const styling = {
      padding: '2px',
      margin: '3px',
      border: '2px solid black'
    }
    const selected = {
      padding: '2px',
      margin: '3px',
      border: '2px solid blue'
    }

    //this is if a piece doesn't exist at all
    if (this.state.val === 0) {
      return (
        <td>
          <div onClick={this.handleSelectedCell} style={ this.state.selected ? selected : styling}>
            <br/>
          </div>
        </td>
      );  
    //if a piece is a circle
    } else if (this.state.val === 1) {
      return (
        <td>
          <div onClick={this.handleSelectedCell} style={ this.state.selected ? selected : styling}>
            {this.state.val}
          </div>
        </td>
      )
    //if a piece is a square
    } else if (this.state.val === 2) {
      return (
        <td>
          <div onClick={this.handleSelectedCell} style={ this.state.selected ? selected : styling}>
            {this.state.val}
          </div>
        </td>
      )
    }

  }


}

export default Cell;