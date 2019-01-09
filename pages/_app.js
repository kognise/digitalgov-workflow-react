import App, { Container } from 'next/app'
import React from 'react'
import NextSEO from 'next-seo'
import config from '../lib/seo'

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Container>
      <NextSEO config={config} />
      <Component {...pageProps} />
    </Container>
  }
}