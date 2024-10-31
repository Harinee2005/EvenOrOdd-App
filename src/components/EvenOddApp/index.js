import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {evenOrOdd: 'Even', num: 0}

  increment = () => {
    const randNo = Math.floor(Math.random() * 100)
    this.setState(prevState => ({
      num: prevState.num + randNo,
      evenOrOdd: (prevState.num + randNo) % 2 === 0 ? 'Even' : 'Odd',
    }))
  }

  render() {
    const {evenOrOdd, num} = this.state
    return (
      <div className="bg">
        <h1 className="display-count">Count {num}</h1>
        <p className="display-odd-even">Count is {evenOrOdd}</p>
        <button onClick={this.increment} type="button" className="btn">
          Increment
        </button>
        <p className="description">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
