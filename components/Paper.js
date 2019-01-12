import PropTypes from 'prop-types'
import { Component } from 'react'

export default class extends Component {
  displayName = 'Paper'

  propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }

  render() {
    return <div className='paper bg-white height-auto'>
      {this.props.children}
    </div>
  }
}