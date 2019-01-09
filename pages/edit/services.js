import { Component } from 'react'
import Layout from '../../components/EditLayout.js'
import Card from '../../components/Card.js'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'
import withData from '../../lib/withData'

import '../../styles/app.scss'

const query = gql`
query services {
  services {
    title
    summary
    deck
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
    return <Layout medium='Services' live='https://demo.digital.gov/services/'>
      <Query query={query}>
        {({ loading, error, data }) => {
          if (error) return <div>Error loading services!</div>
          if (loading) return <div>Loading...</div>
          return data.services.map((service, index) => {
            let summary = ''
            if (service.deck) {
              summary += service.deck
              summary += ' '
            }
            summary += service.summary || ''
            return <article className='margin-bottom-105' key={index}>
              <div className='grid-row grid-gap-1'>
                <div className='grid-col-12 tablet:grid-col-10'>
                  <Card title={service.title} href={'https://demo.digital.gov' + service.location.websitePath}>
                    {summary}
                  </Card>
                </div>
                <div className='grid-col-12 tablet:grid-col-2'>
                  <a className='margin-bottom-1 usa-button usa-button-fullwidth padding-1 text-normal' href={service.location.editURL}>
                    Edit page
                  </a>
                  <Link href={{ pathname: '/topics', query: { page: service.location.filePath } }}>
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