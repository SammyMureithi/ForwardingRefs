import React, { Component } from 'react'
import MyInput from './input'

export class InputMaster extends Component {
    constructor(props) {
        super( props )
        this.inputRef = React.createRef()
        this.handleClick=()=> {
            this.inputRef.current.focus()
        }
    }
  render() {
    return (
        <div>
            <MyInput ref={this.inputRef}></MyInput>
            <button onClick={this.handleClick}>Focus Now</button>
      </div>
    )
  }
}

export default InputMaster