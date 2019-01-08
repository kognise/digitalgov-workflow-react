import { Component } from 'react'

export default class extends Component {
  render() {
    return <main id='main-content' className={`padding-y-${this.props.padding || '1'}`}>
      <div className={`grid-container${this.props.gridType ? '-' + this.props.gridType : ''}`}>
        {this.props.children}
      </div>
    </main>
  }
}