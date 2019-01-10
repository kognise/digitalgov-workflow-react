import { Component } from 'react'
import GovBanner from './GovBanner'
import Link from 'next/link'

export default class extends Component {
  render() {
    return <>
      <a className='usa-skipnav' href='#main-content'>Skip to main content</a>
      <GovBanner />
      <header className='padding-y-4'>
        <div className='grid-container grid-container-desktop-lg'>
          <div className='grid-row grid-gap-4'>
            <div className='grid-col-12 tablet-lg:grid-col-5'>
              <h1 className='usa-logo-text'>
                <Link href='/'>
                  <a className='text-no-underline text-light font-sans-xl text-black visited:text-black' accessKey='1' title='Home'>
                    <img className='width-4 margin-right-1 position-relative top-05' src='/static/icon.transparent.png' alt='Logo' />
                    Digital.gov
                  </a>
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </header>
    </>
  }
}