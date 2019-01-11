import { Component } from 'react'
import Paper from '../../components/Paper'
import Header from '../../components/Header'
import Main from '../../components/Main'
import TagsInput from '../../components/TagsInput'
import moment from 'moment'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import slugify from '../../lib/slugify'

export default class extends Component {
  state = {
    postType: 'dg',
    headline: '',
    deck: '',
    source: '',
    url: '',
    summary: '',
    topics:  [],
    authors: [],
    date: moment().format('YYYY-MM-DD'),
    time: moment().format('HH:mm')
  }

  constructor(props) {
    super(props)
    library.add(faBolt)
  }

  render() {
    let headlineInput = null
    let summaryInput = null
    if (this.state.postType !== 'elsewhere') {
      headlineInput = <>
        <label className='usa-label' htmlFor='headline'>Headline</label>
        <input className='usa-input'
          name='headline'
          id='headline'
          value={this.state.headline}
          onChange={this.headlineChanged.bind(this)} />
        <p className='margin-y-05 font-sans-xs text-base-dark'>The headline should be...</p>
      </>

      summaryInput = <>
        <label className='usa-label' htmlFor='summary'>Summary</label>
        <textarea className='usa-textarea'
          name='summary'
          id='summary'
          value={this.state.summary}
          onChange={this.summaryChanged.bind(this)} />
        <p className='margin-y-05 font-sans-xs text-base-dark'>The summary should be...</p>
      </>
    }

    let sourceInputs = null
    if (this.state.postType !== 'dg') {
      sourceInputs = <>
        <label className='usa-label' htmlFor='source'>Source</label>
        <select className='usa-select' name='source' id='source' value={this.state.source} onChange={this.sourceChanged.bind(this)}>
          <option value='value1'>Option A</option>
          <option value='value2'>Option B</option>
          <option value='value3'>Option C</option>
        </select>
        <p className='margin-y-05 font-sans-xs text-base-dark'>Who published this?</p>

        <label className='usa-label' htmlFor='url'>Source URL</label>
        <input className='usa-input'
          name='url'
          id='url'
          value={this.state.url}
          onChange={this.urlChanged.bind(this)} />
        <p className='margin-y-05 font-sans-xs text-base-dark'>The URL where this was published (e.g. https://18f.gsa.gov/content-guide)</p>
      </>
    }

    return <Paper>
      <Header />
      <Main className='bg-primary-darker text-white' padding='4' gridType='desktop-lg'>
        <div className='grid-row grid-gap-4'>
          <div className='grid-col-12 tablet:grid-col-6'>
            <header className='margin-bottom-3'>
              <h1 className='margin-0 text-thin font-sans-2xl'>New Post</h1>
            </header>
            <form className='margin-y-05 bg-base-lighter padding-y-2px padding-x-3 text-ink radius-md' acceptCharset='utf-8'>
              <h3>What type of post will this be?</h3>
              <fieldset className='usa-fieldset'>
                <legend className='usa-sr-only'>Type of post</legend>
                <ul className='usa-input-list'>
                  <li>
                    <input className='usa-radio-input'
                      type='radio'
                      name='post-type'
                      id='post-type-dg'
                      value='dg'
                      checked={this.state.postType === 'dg'}
                      onChange={this.postTypeChanged.bind(this)} />
                    <label className='usa-radio-label' htmlFor='post-type-dg'>
                      This will be a blog post on Digital.gov (Here is an example)
                    </label>
                  </li>
                  <li>
                    <input className='usa-radio-input'
                      type='radio'
                      name='post-type'
                      id='post-type-refer'
                      value='refer'
                      checked={this.state.postType === 'refer'}
                      onChange={this.postTypeChanged.bind(this)} />
                    <label className='usa-radio-label' htmlFor='post-type-refer'>
                      This will spotlight a page on Digital.gov (e.g resouce, community page, etc...)
                    </label>
                  </li>
                  <li>
                    <input className='usa-radio-input'
                      type='radio'
                      name='post-type'
                      id='post-type-elsewhere'
                      value='elsewhere'
                      checked={this.state.postType === 'elsewhere'}
                      onChange={this.postTypeChanged.bind(this)} />
                    <label className='usa-radio-label' htmlFor='post-type-elsewhere'>
                      This will spotlight a page on a separate website/URL
                    </label>
                  </li>
                </ul>
              </fieldset>

              {headlineInput}

              <label className='usa-label' htmlFor='deck'>Deck / Blurb</label>
              <textarea className='usa-textarea'
                name='deck'
                id='deck'
                value={this.state.deck}
                onChange={this.deckChanged.bind(this)} />
              <p className='margin-y-05 font-sans-xs text-base-dark'>The deck should be...</p>

              {sourceInputs}

              {summaryInput}

              <label className='usa-label' htmlFor='topics'>Topics</label>
              <TagsInput idOrName='topics' handleChange={this.topicsChanged.bind(this)} sans={[]} />
              <p className='margin-y-05 font-sans-xs text-base-dark'>
                <em>Select the 2-3 topics that best fit</em>
              </p>

              <label className='usa-label' htmlFor='authors'>Authors</label>
              <TagsInput idOrName='authors' handleChange={this.authorsChanged.bind(this)} sans={[]} />
              <p className='margin-y-05 font-sans-xs text-base-dark'>
                <em>
                  Select the people who've contributed to this. Don't see the person you're looking for?
                  {' '}
                  <a target='_blank' href='https://github.com/GSA/digitalgov.gov/tree/demo/data/people/authors' title='Add a new contributor'>
                    Add a contributor
                  </a>
                </em>
              </p>

              <label className='usa-label' htmlFor='date'>Publish Date</label>
              <input className='usa-input'
                name='date'
                id='date'
                value={this.state.date}
                onChange={this.dateChanged.bind(this)} />
              <p className='margin-y-05 font-sans-xs text-base-dark'>YYYY-MM-DD (e.g. 2018-09-29)</p>

              <label className='usa-label' htmlFor='time'>Time</label>
              <input className='usa-input'
                name='time'
                id='time'
                value={this.state.time}
                onChange={this.timeChanged.bind(this)} />
              <p className='margin-top-05 margin-bottom-1 font-sans-xs text-base-dark'>24-hour time (e.g. 15:32)</p>
            </form>
          </div>
          <div className='grid-col-12 tablet:grid-col-6'>
            <p className='margin-bottom-105 font-sans-md text-light line-height-sans-3'>
              <strong>Spotlight Preview</strong> &mdash; How this page will likely look in Spotlight
            </p>
            <article className='bg-base-lighter radius-md margin-0 margin-bottom-5 padding-2 text-ink'>
              <p className='font-sans-md'>{this.state.deck}</p>
              <div className='flex-row display-flex flex-align-end flex-justify'>
                <p>
                  <a className='text-no-underline text-ink visited:text-ink' href='#' title='Digital.gov'>
                    <img className='width-2 margin-right-05 position-relative top-2px' src='/static/icon.transparent.png' alt='Digital.gov Logo' />
                    Digital.gov
                  </a>
                  <em className='clicks text-accent-warm-dark font-sans-2xs margin-x-1'>
                    <FA icon='bolt' /> 99 views
                  </em>
                </p>
                <div className='topics'>
                  <a className='text-primary-darker display-inline-block margin-x-2px text-no-underline bg-primary-light font-sans-3xs padding-y-2px padding-x-1 radius-pill' href='#'>
                    Design
                  </a>
                  <a className='text-primary-darker display-inline-block margin-x-2px text-no-underline bg-primary-light font-sans-3xs padding-y-2px padding-x-1 radius-pill' href='/topics/open-data/' data-topic='open-data'>
                    Open Data
                  </a>
                </div>
              </div>
            </article>

            <p className='margin-bottom-105 font-sans-md text-light line-height-sans-3'>
              <strong>SEO Preview</strong> &mdash; How this page will likely look in Google
            </p>
            <article className='seo-preview bg-white radius-md margin-0 margin-bottom-5 padding-2'>
              <h3 className='seo-preview-title'>
                {this.state.postType === 'elsewhere' ? 'headline' : this.state.headline} / DigitalGov - Building the 21st Century Digital Government
              </h3>
              <p className='seo-preview-url'>
                https://digital.gov/{this.state.date.replace('-', '/')}/{this.state.postType === 'elsewhere' ? 'headline' : slugify(this.state.headline)}
              </p>
              <p className='seo-preview-content'>
                {this.state.deck}
              </p>
            </article>

            <p className='margin-bottom-105 font-sans-md text-light line-height-sans-3'>
              <strong>Front Matter Preview</strong> &mdash; This is the additional data <em>(a.k.a. front-matter)</em> that will help build this page on Digital.gov
            </p>
            <pre className='text-bold overlay-overflow text-ink bg-white padding-2 radius-md'>
              {this.state.fmFilename}
            </pre>
            <pre className='bg-white overlay-overflow text-ink padding-2 radius-md'>
              {this.state.fmContent}
            </pre>

            <a className='usa-button usa-button-fullwidth margin-bottom-1'
              href={'https://github.com/GSA/digitalgov.gov/new/demo/content/posts/'
                + this.state.date.substr(0, this.state.date.length - 3).replace('-', '/')
                + '/draft?filename='
                + encodeURIComponent(this.state.fmFilename)
                + '&value='
                + encodeURIComponent(this.state.fmContent)}>
              Create in GitHub &raquo;
            </a>
            <a className='usa-button usa-button-outline usa-button-fullwidth' href='https://github.com/GSA/digitalgov.gov/wiki'>
              A guide to publishing in GitHub
            </a>
          </div>
        </div>
      </Main>
    </Paper>
  }

  postTypeChanged(event) {
    this.setState({
      postType: event.target.value
    }, this.updateFrontMatter)
  }

  headlineChanged(event) {
    this.setState({
      headline: event.target.value
    }, this.updateFrontMatter)
  }

  deckChanged(event) {
    this.setState({
      deck: event.target.value
    }, this.updateFrontMatter)
  }

  sourceChanged(event) {
    this.setState({
      source: event.target.value
    }, this.updateFrontMatter)
  }

  urlChanged(event) {
    this.setState({
      url: event.target.value
    }, this.updateFrontMatter)
  }

  summaryChanged(event) {
    this.setState({
      summary: event.target.value
    }, this.updateFrontMatter)
  }

  topicsChanged(topics) {
    this.setState({ topics }, this.updateFrontMatter)
  }

  authorsChanged(authors) {
    this.setState({ authors}, this.updateFrontMatter)
  }

  dateChanged(event) {
    this.setState({
      date: event.target.value.trim()
    }, this.updateFrontMatter)
  }

  timeChanged(event) {
    this.setState({
      time: event.target.value.trim()
    }, this.updateFrontMatter)
  }

  updateFrontMatter() {
    const fmFilename = [
      this.state.date,
      this.state.postType === 'elsewhere' ? 'headline' : slugify(this.state.headline),
      slugify(this.state.deck)
    ].join('-')
    const fmContent = `
---
slug: ${[
  this.state.postType === 'elsewhere' ? 'headline' : slugify(this.state.headline),
  slugify(this.state.deck)
].join('-')}
date: ${this.state.date} ${this.state.time}:00 -0500
${this.state.postType === 'elsewhere' ? '' : `\ntitle: '${this.state.headline}'`}
deck: '${this.state.deck}'${this.state.postType === 'elsewhere' ? '' : `\nsummary: '${this.state.summary}'`}

authors:
${' - ' + this.state.authors.join('\n - ')}
topics:
${' - ' + this.state.topics.join('\n - ')}${this.postType === 'dg' ? '' : `

source: '${this.state.source}'
source_url: '${this.state.url}'
`.trimRight()}
---
    `.trim()
    this.setState({ fmFilename, fmContent })
  }
}