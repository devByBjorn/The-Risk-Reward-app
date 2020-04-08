import React from 'react'
import Square from '../DemonSquare'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(8).fill(null),
      count: 0,
      message: '',
    }
  }
  handleClick = (i) => {
    const squares = this.state.squares.slice()
    squares[i] = 'X'
    const count = i
    console.log(squares[i])
    if (count === 4) {
      this.setState(() => ({ message: 'PAUSE! This is a big issue in your trading. If you are serious about trading and want to precede this career you need to figure out why you are having this issue.' }))
    } else if (count === 5) {
      this.setState(() => ({ message: 'Pause! Take a good look at yourself...' }))
    } else if (count === 7) {
      this.setState(() => ({ message: 'STOP! You need to serously think this trading path through. Are you fit to do this? You need to be honest with yourself' }))
    }

    this.setState({
      squares,
      count,
    })
  }
  renderSquare = (i) => {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }
  render() {
    return (
      <div>
        <div className="status">{this.state.message && <p>{this.state.message}</p>}</div>
        <div className="squares-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
      </div>
    )
  }
}

export default Board