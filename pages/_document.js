import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head />
        <body className='bg-primary-vivid' lang='en'>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}