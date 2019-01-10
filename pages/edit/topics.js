import { Component } from 'react'
import Layout from '../../components/EditLayout.js'
import Card from '../../components/Card.js'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Link from 'next/link'
import withData from '../../lib/withData'

import '../../styles/app.scss'

const query = gql`
query topics {
  topics {
    san {
      slug
      name
    }
    weight
    location {
      editURL
    }
  }
}
`

export default withData(class extends Component {
  render() {
    return <Layout medium='Topics' live='https://demo.digital.gov/topics/'>
      <Query query={query}>
        {({ loading, error, data }) => {
          if (error) return <div>Error loading topics!</div>
          if (loading) return <div>Loading...</div>
          return <table className='usa-table usa-table-borderless'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Slug</th>
                <th>Weight</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {data.topics.map((topic, index) => {
                let color = ''
                switch(topic.weight) {
                  case 1:
                    color = 'text-green'
                    break
                  case 2:
                    color = 'text-yellow'
                    break
                  default:
                    color = 'text-red'
                }
                return <tr key={index}>
                  <td>{topic.san.name}</td>
                  <td>{topic.san.slug}</td>
                  <td className={color}>{topic.weight}</td>
                  <td><a href={topic.location.editURL}>Edit</a></td>
                </tr>
              })}
            </tbody>
          </table>
        }}
      </Query>
    </Layout>
  }
})