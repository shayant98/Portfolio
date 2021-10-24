
import Document, {  Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   render() {
    return (
      <Html >
        <Head />
        <body className="scrollbar scrollbar-w-2 scrollbar-thumb-navy-light hover:scrollbar-thumb-red-400 scrollbar-track-navy-normal ">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
