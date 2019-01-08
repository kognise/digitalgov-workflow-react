import { Component } from 'react'

export default class extends Component {
  render() {
    return <span className='bg-gray-5 margin-bottom-05 padding-x-1 display-inline-block line-height-sans-1 padding-y-05 radius-md bg-secondary-lighter'>
      {this.props.children}
    </span>
  }
}