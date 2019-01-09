import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return <html lang='en'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/png' href='/static/icon.favicon.png' />
        <link rel='shortcut icon' type='image/png' href='/static/icon.favicon.png' />
      </Head>
      <body className='bg-primary-vivid' lang='en'>
        <Main />
        <NextScript />
      </body>
    </html>
  }
}