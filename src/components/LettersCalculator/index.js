// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  oninputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="cal-container">
          <h1 className="heading">Calculate the Letters you enter</h1>

          <label htmlFor="cal">Enter the phrase</label>

          <input
            placeholder="Enter the phrase"
            id="cal"
            type="text"
            onChange={this.oninputChange}
            value={searchInput}
          />

          <p>No.of Letters: {searchInput.length}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
