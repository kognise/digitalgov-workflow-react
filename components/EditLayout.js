import { Component } from 'react'
import Paper from './Paper'
import Main from './Main'
import Header from './Header'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default class extends Component {
  constructor(props) {
    super(props)
    library.add(faArrowLeft)
  }

  render() {
    let backButton = null
    if (!this.props.home) {
      backButton = <Link href='/edit'>
        <a className='usa-button usa-button-outline padding-1 margin-bottom-1 text-normal'>
          <FA icon='arrow-left' /> All Content Types
        </a>
      </Link>
    }

    let newButton = null
    if (this.props.new) {
      newButton = <Link href={'/new/' + this.props.new}>
        <a className='usa-button padding-1 margin-bottom-1 text-normal'>New</a>
      </Link>
    }

    let info = null
    if (this.props.info) {
      info = <div className='margin-y-3 font-sans-md'>
        <p>
          {this.props.info}
        </p>
      </div>
    }

    return <Paper>
      <Header />
      <Main padding='4' gridType='desktop-lg'>
        <div className='grid-row grid-gap-4'>
          <div className='grid-col-12 tablet:grid-col-4'>
            <section className='margin-bottom-3'>
              {backButton} {newButton}
              <h1 className='margin-0 font-sans-3xl text-thin'>All {this.props.medium}</h1>
              <p>Live: <a href={this.props.live} title={'Go to ' + this.props.live}>{this.props.live}</a></p>
              {info}
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