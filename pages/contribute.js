import { Component } from 'react'
import Layout from '../components/ArticleLayout'

import '../styles/app.scss'

export default class extends Component {
  render() {
    return <Layout>
      <header className='margin-bottom-3'>
        <h1 className='margin-0 margin-bottom-2 text-thin font-sans-2xl'>Contribute to Digital.gov</h1>
        <div className='text-light font-sans-lg'>Become a contributor</div>
      </header>
      <section className='font-sans-md'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue aliquet tincidunt. Cras in libero rhoncus, semper metus eu, finibus nunc. Nunc feugiat lorem tellus, et sollicitudin eros feugiat vitae. Aliquam auctor velit nec auctor semper. Donec egestas felis id turpis sollicitudin blandit vitae quis libero. Ut massa arcu, condimentum vitae laoreet auctor, blandit sit amet enim. Phasellus ornare rhoncus urna a lacinia. Nullam leo velit, ullamcorper id est ac, consectetur porttitor diam. In eu mollis nulla. Aenean molestie, urna non accumsan posuere, libero leo hendrerit ex, at lobortis nisl justo at nisi. Suspendisse potenti. Etiam nibh leo, vulputate sed ligula ac, mattis dictum sapien. Proin eu mi vitae sapien fringilla consequat. Maecenas vel purus nec mauris dignissim pellentesque. Maecenas lectus eros, posuere id eros ut, luctus suscipit odio.</p>
      </section>
    </Layout>
  }
}