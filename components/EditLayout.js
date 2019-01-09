import { Component } from 'react'
import Paper from './Paper'
import Main from './Main'
import Header from './Header'
import Link from 'next/link'

export default class extends Component {
  render() {
    let backButton = null
    if (!this.props.home) {
      backButton = <h5 className='margin-0 margin-bottom-1 font-sans-xs text-medium'>
        <Link href='/edit'>
          <a className='padding-y-05 padding-x-1 visited:text-primary text-no-underline radius-md border-primary border-width-1px border-solid hover:text-primary hover:border-base-darker display-inline-block text-normal'>
            All Content Types
          </a>
        </Link>
      </h5>
    }
    return <Paper>
      <Header />
      <Main padding='4' gridType='desktop-lg'>
        <div className='grid-row grid-gap-4'>
          <div className='grid-col-12 tablet:grid-col-4'>
            <section className='margin-bottom-3'>
              {backButton}
              <h1 className='margin-0 font-sans-3xl text-thin'>All {this.props.medium}</h1>
              <p>Live: <a href={this.props.live} title={'Go to ' + this.props.live}>{this.props.live}</a></p>
            </section>
          </div>
          <div className='grid-col-12 tablet:grid-col-8'>
            <section>
              {this.props.children}
            </section>
          </div>
        </div>
      </Main>
    </Paper>
  }
}