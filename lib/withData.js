import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const config = {
  link: new HttpLink({
    uri: 'https://dwrb.herokuapp.com/'
  })
}

export default withData(config)