import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(previousState => ({
      count: previousState.count + randomNumber,
    }))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container1">
        <div className="container2">
          <h1 className="count">Count {count}</h1>
          <p className="even-odd">Count is {displayText}</p>
          <button
            className="button-styles"
            type="button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="desc-para">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
