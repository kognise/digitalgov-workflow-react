import { Component } from 'react'
import Paper from '../components/Paper'
import Main from '../components/Main'
import statusCodes from 'builtin-status-codes'
import PropTypes from 'prop-types'

import '../styles/app.scss'

export default class extends Component {
  propTypes = {
    code: PropTypes.number,
    message: PropTypes.string
  }

  static getInitialProps(ctx) {
    const code = ctx.res.statusCode || 400
    const message = statusCodes[code]
    return { code, message }
  }

  render() {
    return <Paper>
      <Main padding='10'>
        <h1 className='text-center text-light font-sans-3xl'>Error {this.props.code}</h1>
        <h1 className='text-center text-light'>{this.props.message}</h1>
      </Main>
    </Paper>
  }
}