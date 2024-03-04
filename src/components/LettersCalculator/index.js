// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onEnteringInput = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="content-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label className="label-text" htmlFor="input-phrase">
              Enter the phrase
            </label>
            <input
              id="input-phrase"
              className="input-box"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.onEnteringInput}
            />
          </div>
          <p className="no-of-letters">
            No.of letters: {count}
          </p>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="letters-calculator-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
