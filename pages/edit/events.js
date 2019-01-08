import { Component } from 'react'
import Layout from '../../components/EditLayout.js'
import Card from '../../components/Card.js'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../../lib/withData'
import moment from 'moment'

import '../../styles/app.scss'

const query = gql`
query events {
  events {
    title
    summary
    start
    end
    topics {
      name
    }
    location {
      editURL
    }
  }
}
`

export default withData(class extends Component {
  render() {
    return <Layout medium='Events' live='https://demo.digital.gov/events/'>
      <Query query={query}>
        {({ loading, error, data }) => {
          if (error) return <div>Error!</div>
          if (loading) return <div>Loading...</div>
          return data.events.map((event, index) => {
            let timing = ''
            const start = moment(event.start)
            const end = moment(event.end)
            timing += start.format('dddd, MMMM Do, YYYY, h:mm A')
            timing += ' to '
            if (end.format('MMDDYYYY') !== start.format('MMDDYYYY')) {
              timing += end.format('dddd, MMMM Do, YYYY, h:mm A')
            } else {
              timing += end.format('h:mm a')
            }
            return <article className='margin-bottom-105' key={index}>
              <div className='grid-row grid-gap-1'>
                <div className='grid-col-12 tablet:grid-col-10'>
                  <Card title={event.title} timing={timing} tags={event.topics}>
                    {event.summary}
                  </Card>
                </div>
                <div className='grid-col-12 tablet:grid-col-2'>
                  <a className='margin-bottom-1 usa-button text-normal' href={event.location.editURL}>
                    Edit page
                  </a>
                </div>
              </div>
            </article>
          })
        }}
      </Query>
    </Layout>
  }
})