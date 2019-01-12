import { Component } from 'react'
import Paper from './Paper'
import Main from './Main'
import Navigation from './Navigation'
import Header from './Header'
import ContentTypeNavigation from './ContentTypeNavigation'
import PropTypes from 'prop-types'

export default class extends Component {
  displayName = 'ArticleLayout'

  propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }

  render() {
    return <Paper>
      <Header />
      <Main padding='4' gridType='desktop-lg'>
        <div className='grid-row grid-gap-6'>
          <div className='grid-col-12 tablet:grid-col-2'>
            <Navigation />
            <ContentTypeNavigation />
          </div>
          <div className='grid-col-12 tablet:grid-col-8'>
            <article>
              {this.props.children}
            </article>
          </div>
        </div>
      </Main>
    </Paper>
  }
}