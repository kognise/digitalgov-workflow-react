import { Component } from 'react'
import Paper from './Paper'
import Main from './Main'
import Header from './Header'

export default class extends Component {
  render() {
    return <Paper>
      <Header />
      <Main padding='4' gridType='desktop-lg'>
        <div className='grid-row grid-gap-4'>
          <div className='grid-col-12 tablet:grid-col-4'>
            <section className='margin-bottom-3'>
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