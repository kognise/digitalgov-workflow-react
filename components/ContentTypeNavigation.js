import { Component } from 'react'
import Link from 'next/link'
import cnh from '../lib/cnh'
import PropTypes from 'prop-types'

class DefaultItem extends Component {
  displayName = 'DefaultItem'

  propTypes = {
    href: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.object
    ]),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    first: PropTypes.bool
  }

  render() {
    return <li>
      <Link href={this.props.href}>
        <a className={cnh('padding-y-1 font-sans-2xs display-block text-no-underline text-black visited:text-black', {
          'border-top border-base-light': !this.props.first
        })}>
          {this.props.children}
        </a>
      </Link>
    </li>
  }
}

export default class extends Component {
  displayName = 'Navigation'

  propTypes = {
    item: PropTypes.node,
    simpler: PropTypes.bool
  }
  render() {
    const Item = this.props.item || DefaultItem
    const Items = () => (<>
      <Item href='/edit/posts' first>
        News
      </Item>
      <Item href='/edit/events'>
        Events
      </Item>
      <Item href='/edit/resources'>
        Resources
      </Item>
      <Item href='/edit/services'>
        Services
      </Item>
      <Item href='/edit/communities'>
        Communities
      </Item>
      <Item href='/edit/topics'>
        Topics
      </Item>
      <Item href='/edit/people'>
        People
      </Item>
      <Item href='/edit/promos'>
        Promos
      </Item>
      <Item href='/edit/sources'>
        Sources
      </Item>
    </>)
    return <nav role='navigation' className={this.props.simpler ? '' : 'margin-y-5 padding-y-1'}>
      <h4 className='margin-0 margin-bottom-1 text-light font-sans-3xs text-uppercase' hidden={this.props.simpler} aria-hidden={(!!this.props.simpler).toString()}>Edit our Pages</h4>
      {this.props.item ? <Items /> : <ul className='add-list-reset'><Items /></ul>}
    </nav>
  }
}