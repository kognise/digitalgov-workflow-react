import { Component } from 'react'
import Paper from '../components/Paper'
import Main from '../components/Main'
import Navigation from '../components/Navigation'
import Link from 'next/link'

import '../styles/app.scss'

export default class extends Component {
  render() {
    return <Paper>
      <Main padding='5' gridType='mobile-lg'>
        <div className='grid-row grid-gap-4'>
          <div className='grid-col-12'>
            <section className='margin-top-9'>
              <img className='width-8 margin-x-auto margin-top-9 display-block' src='/static/icon.png' alt='Digital.gov' />
              <h1 className='usa-logo-text text-center text-light font-sans-3xl margin-top-2'>
                <Link href='/'>
                  <a className='text-no-underline text-base-darkest visited:text-base-darkest' accessKey='1' title='Home' aria-label='Digital.gov'>
                    Digital.gov
                  </a>
                </Link>
              </h1>
              <h2 className='text-center text-light'>We work on our content in the open. Feel free to explore.</h2>
            </section>
          </div>
        </div>
        <div className='grid-row grid-gap-4'>
          <div className='grid-col-8 grid-offset-2'>
            <Navigation />
          </div>
        </div>
      </Main>
    </Paper>
  }
}