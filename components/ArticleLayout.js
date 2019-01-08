import { Component } from 'react'
import Paper from './Paper'
import Main from './Main'
import Navigation from './Navigation'
import Header from './Header'
import ContentTypeNavigation from './ContentTypeNavigation'

export default class extends Component {
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