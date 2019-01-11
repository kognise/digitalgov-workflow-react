import { Component } from 'react'
import Layout from '../../components/EditLayout.js'
import Card from '../../components/Card.js'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'
import withData from '../../lib/withData'

import '../../styles/app.scss'

const query = gql`
query posts {
  posts {
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
    return <Layout medium='News' live='https://demo.digital.gov/posts/' new='post'>
      <Query query={query}>
        {({ loading, error, data }) => {
          if (error) return <div>Error loading posts!</div>
          if (loading) return <div>Loading...</div>
          return data.posts.map((post, index) => {
            let summary = ''
            if (post.deck) {
              summary += post.deck
              summary += ' '
            }
            summary += post.summary || ''
            return <article className='margin-bottom-105' key={index}>
              <div className='grid-row grid-gap-1'>
                <div className='grid-col-12 tablet:grid-col-10'>
                  <Card title={post.title} href={'https://demo.digital.gov' + post.location.websitePath} tags={post.topics}>
                    {summary}
                  </Card>
                </div>
                <div className='grid-col-12 tablet:grid-col-2'>
                  <a className='margin-bottom-1 usa-button usa-button-fullwidth padding-1 text-normal' href={post.location.editURL}>
                    Edit page
                  </a>
                  <Link href={{ pathname: '/topics', query: { page: post.location.filePath } }}>
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