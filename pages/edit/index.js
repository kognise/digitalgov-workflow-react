import { Component } from 'react'
import Paper from '../../components/Paper'
import Main from '../../components/Main'

import '../../styles/app.scss'

export default class extends Component {
  render() {
    return <Paper>
      <Main padding='5'>
        <em>Coming soon!</em>
      </Main>
    </Paper>
  }
}