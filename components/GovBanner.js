import { Component } from 'react'
import cnh from '../lib/cnh'

export default class extends Component {
  state = {
    expanded: false
  }

  render() {
    return <div className='usa-banner'>
      <div className='usa-accordion'>
        <header className={cnh('usa-banner-header', {
          'usa-banner-header-expanded': this.state.expanded
        })} role='presentation'>
          <div className='usa-banner-inner grid-container-desktop-lg'>
            <div className='grid-col-auto'>
              <img className='usa-banner-header-flag' src='/static/images/favicons/favicon-57.png' alt='U.S. flag' />
            </div>
            <div className='grid-col-fill tablet:grid-col-auto'>
              <p className='usa-banner-header-text'>
                An official website of the United States government
              </p>
              <p className='usa-banner-header-action' aria-hidden='true'>
                Here's how you know
              </p>
            </div>
            <button className='usa-accordion-button usa-banner-button' aria-expanded={this.state.expanded.toString()} aria-controls='gov-banner' onClick={this.toggleBanner.bind(this)}>
              <span className='usa-banner-button-text'>Here's how you know</span>
              {' '}
            </button>
          </div>
        </header>
        <div className='usa-banner-content usa-accordion-content' id='gov-banner' hidden={!this.state.expanded}>
          <div className='grid-row grid-gap-lg'>
            <div className='usa-banner-guidance-gov tablet:grid-col-6'>
              <img className='usa-banner-icon' src='/static/images/icon-dot-gov.svg' alt='Dot gov' />
              <div className='usa-banner-description'>
                <p>
                  <strong>The .gov means it’s official.</strong>
                  <br />
                  Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you’re on a federal government site.
                </p>
              </div>
            </div>
            <div className='usa-banner-guidance-ssl tablet:grid-col-6'>
              <img className='usa-banner-icon' src='/static/images/icon-https.svg' alt='Https' />
              <div className='usa-banner-description'>
                <p>
                  <strong>The site is secure.</strong>
                  <br />
                  The <strong>https://</strong> ensures that you are connecting to the official website and that any information you provide is encrypted and transmitted securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  toggleBanner() {
    this.setState({
      expanded: !this.state.expanded
    })
  }
}