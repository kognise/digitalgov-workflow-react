import { Component, Fragment } from 'react'
import Tag from './Tag'
import { AllHtmlEntities as Entities } from 'html-entities'
import PropTypes from 'prop-types'

const entities = new Entities()

export default class extends Component {
  displayName = 'Card'

  propTypes = {
    tags: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        slug: PropTypes.string,
        name: PropTypes.string
      })
    ])),
    'tags.map': PropTypes.func,
    href: PropTypes.string,
    title: PropTypes.string.isRequired,
    timing: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }

  render() {
    let tags = null
    if (this.props.tags) {
      tags = this.props.tags.map((tag, index) => {
        return <Fragment key={index}>
          <Tag>
            {entities.decode(tag.name || tag)}
          </Tag>
          {' '}
        </Fragment>
      })
    }
    return <header className='bg-base-lightest padding-2 radius-md margin-bottom-1'>
      <h3 className='margin-0 margin-bottom-1'>
        <a className='text-no-underline hover:text-underline text-ink visited:text-ink' href={this.props.href} title={entities.decode(this.props.title)}>
          {entities.decode(this.props.title)}
        </a>
      </h3>
      <h5 className="margin-0 margin-bottom-105 text-light font-sans-md">
        {this.props.timing}
      </h5>
      <p className='margin-0 font-sans-2xs'>
        {entities.decode(this.props.children)}
      </p>
      {tags}
    </header>
  }
}