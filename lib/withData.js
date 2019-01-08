import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: 'http://localhost.me:4000/'
  })
}

export default withData(config)