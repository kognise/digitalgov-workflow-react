import { Component } from 'react'
import Link from 'next/link'
import cnh from '../lib/cnh'

class Item extends Component {
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
  render() {
    return <nav role='navigation' className='margin-y-5 padding-y-1'>
      <h4 className='margin-0 margin-bottom-1 text-light font-sans-3xs text-uppercase'>Edit our Pages</h4>
      <ul className='add-list-reset'>
        <Item href='/edit/news' first>
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
      </ul>
    </nav>
  }
}