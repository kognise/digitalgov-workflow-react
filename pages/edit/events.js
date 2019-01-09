import { Component } from 'react'
import Layout from '../../components/EditLayout.js'
import Card from '../../components/Card.js'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'
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
    registrationURL
    topics {
      name
    }
    location {
      editURL
      filePath
      websitePath
    }
  }
}
`

export default withData(class extends Component {
  render() {
    return <Layout medium='Events' live='https://demo.digital.gov/events/'>
      <Query query={query}>
        {({ loading, error, data }) => {
          if (error) return <div>Error loading events!</div>
          if (loading) return <div>Loading...</div>
          return data.events.map((event, index) => {
            let timingString = ''
            const start = moment(event.start)
            const end = moment(event.end)
            timingString += start.format('dddd, MMMM Do, YYYY, h:mm A')
            timingString += ' to '
            if (end.format('MMDDYYYY') !== start.format('MMDDYYYY')) {
              timingString += end.format('dddd, MMMM Do, YYYY, h:mm A')
            } else {
              timingString += end.format('h:mm a')
            }
            const timing = <a href={event.registrationURL}>
              {timingString}
            </a>
            return <article className='margin-bottom-105' key={index}>
              <div className='grid-row grid-gap-1'>
                <div className='grid-col-12 tablet:grid-col-10'>
                  <Card title={event.title} href={'https://demo.digital.gov' + event.location.websitePath} timing={timing} tags={event.topics}>
                    {event.summary}
                  </Card>
                </div>
                <div className='grid-col-12 tablet:grid-col-2'>
                  <a className='margin-bottom-1 usa-button usa-button-fullwidth padding-1 text-normal' href={event.location.editURL}>
                    Edit page
                  </a>
                  <Link href={{ pathname: '/topics', query: { page: event.location.filePath } }}>
                    <a className='usa-button usa-button-fullwidth usa-button-outline padding-1 text-normal'>
                      Edit topics
                    </a>
                  </Link>
                </div>
              </div>
            </article>
          })
        }}
      </Query>
    </Layout>
  }
})