import { Component, Fragment } from 'react'
import Tag from './Tag'

export default class extends Component {
  render() {
    let tags = null
    if (this.props.tags) {
      tags = this.props.tags.map((tag, index) => {
        return <Fragment key={index}>
          <Tag>
            {tag.name || tag}
          </Tag>
          {' '}
        </Fragment>
      })
    }
    return <header className='bg-base-lightest padding-2 radius-md'>
      <h3 className='margin-0 margin-bottom-1'>
        <a className='text-no-underline text-ink visited:text-ink' href={this.props.href} title={this.props.title}>
          {this.props.title}
        </a>
      </h3>
      <h5 className="margin-0 margin-bottom-105 text-light font-sans-md">
        {this.props.timing}
      </h5>
      <p className='margin-0 font-sans-2xs'>
        {this.props.children}
      </p>
      {tags}
    </header>
  }
}