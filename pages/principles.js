import { Component } from 'react'
import Layout from '../components/ArticleLayout'

import '../styles/app.scss'

export default class extends Component {
  render() {
    return <Layout>
      <header className='margin-bottom-3'>
        <h1 className='margin-0 margin-bottom-2 text-thin font-sans-2xl'>Our Guiding Principles</h1>
      </header>
      <section className='font-sans-md'>
        <h2>Elevate digital literacy and understanding</h2>
        <p>We aim to unpack complexity and make it possible for a wide audience to confidently understand digital.</p>

        <h2>Bring a human focus to digital</h2>
        <p>We cannot talk about technology without talking about the people who create it, and the people it affects.</p>

        <h2>Don’t fear the problems</h2>
        <p>We believe talking about challenges and unsolved problems is as important as talking about proven solutions.</p>

        <h2>Make collaboration easy</h2>
        <p>Open collaboration across government is critical to a secure, digital future. It’s Digital.gov’s job to enable collaboration and make it easier.</p>

        <h2>Listen</h2>
        <p>Everything we do is informed by what our audience needs. We apply multiple methods for measuring, listening, and understanding to our products.</p>

        <h2>Work in the open</h2>
        <p>We do all of our work in the open and strive to organize our work in ways that allow others to participate.</p>
      </section>
    </Layout>
  }
}