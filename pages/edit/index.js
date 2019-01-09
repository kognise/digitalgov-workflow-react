import { Component } from 'react'
import Layout from '../../components/EditLayout.js'
import ContentTypeNavigation from '../../components/ContentTypeNavigation.js'
import Link from 'next/link'

import '../../styles/app.scss'

class Item extends Component {
  render() {
    return <h2 className='margin-0 margin-bottom-2'>
      <Link href={this.props.href}>
        <a className='text-light text-no-underline border-2px radius-md text-primary visited:text-primary hover:text-primary hover:border-base-darker display-inline-block padding-y-05 padding-x-2 border-primary'>
          {this.props.children}
        </a>
      </Link>
    </h2>
  }
}

export default class extends Component {
  render() {
    return <Layout medium='Content Types' live='https://demo.digital.gov/' home>
      <ContentTypeNavigation item={Item} simpler />
    </Layout>
  }
}