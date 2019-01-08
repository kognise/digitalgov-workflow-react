import { Component } from 'react'
import Link from 'next/link'

class Item extends Component {
  render() {
    return <li className='padding-y-05'>
      <Link href={this.props.href}>
        <a className='font-sans-xs text-bold text-no-underline'>
          {this.props.children}
        </a>
      </Link>
    </li>
  }
}

export default class extends Component {
  render() {
    return <nav role='navigation'>
      <ul className='add-list-reset'>
        <Item href='/contribute'>Contribute</Item>
        <Item href='/edit'>Edit our pages</Item>
        <Item href='/update-profile'>Update Your Profile</Item>
        <Item href='/principles'>Principles &amp; Guidelines</Item>
        <Item href='/style-guide'>Style Guide</Item>
      </ul>
    </nav>
  }
}