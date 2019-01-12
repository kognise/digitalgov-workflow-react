import { Component } from 'react'
import PropTypes from 'prop-types'

export default class extends Component {
  displayName = 'Main'

  propTypes = {
    padding: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    className: PropTypes.string,
    gridType: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }

  render() {
    return <main id='main-content' className={`padding-y-${this.props.padding || '1'} ` + (this.props.className || '')}>
      <div className={`grid-container${this.props.gridType ? '-' + this.props.gridType : ''}`}>
        {this.props.children}
      </div>
    </main>
  }
}