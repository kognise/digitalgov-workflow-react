import { Component } from 'react'
import Layout from '../../components/EditLayout.js'
import Card from '../../components/Card.js'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'
import withData from '../../lib/withData'

import '../../styles/app.scss'

const query = gql`
query resources {
  resources {
    title
    summary
    deck
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
    return <Layout medium='Resources' live='https://demo.digital.gov/resources/' info='The resource pages on digital.gov are some of the most visited pages on our site. Many of the resource pages have been authored by experts from across the government community.'>
      <Query query={query}>
        {({ loading, error, data }) => {
          if (error) return <div>Error loading resources!</div>
          if (loading) return <div>Loading...</div>
          return data.resources.map((resource, index) => {
            let summary = ''
            if (resource.deck) {
              summary += resource.deck
              summary += ' '
            }
            summary += resource.summary || ''
            return <article className='margin-bottom-105' key={index}>
              <div className='grid-row grid-gap-1'>
                <div className='grid-col-12 tablet:grid-col-10'>
                  <Card title={resource.title} href={'https://demo.digital.gov' + resource.location.websitePath} tags={resource.topics}>
                    {summary}
                  </Card>
                </div>
                <div className='grid-col-12 tablet:grid-col-2'>
                  <a className='margin-bottom-1 usa-button usa-button-fullwidth padding-1 text-normal' href={resource.location.editURL}>
                    Edit page
                  </a>
                  <Link href={{ pathname: '/topics', query: { page: resource.location.filePath } }}>
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