import { Component } from 'react'

export default class extends Component {
  render() {
    return <div className='paper bg-white height-auto'>
      {this.props.children}
    </div>
  }
}