// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isModeChanged: true}

  changeMode = () => {
    this.setState(prevState => ({isModeChanged: !prevState.isModeChanged}))
  }

  changeText = () => {
    const {isModeChanged} = this.state
    return isModeChanged ? 'Light' : 'Dark'
  }

  render() {
    const changeMode = this.changeText()
    return (
      <div className="bg-container">
        <div className={`${changeMode}-container`}>
          <h1 className={`${changeMode}-heading`}>Click To Change Mode</h1>
          <button
            className={`${changeMode}-btn`}
            onClick={this.changeMode}
            type="button"
          >
            {changeMode} Mode
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
