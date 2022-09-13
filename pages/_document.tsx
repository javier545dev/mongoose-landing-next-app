import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => (
  <Html className='scroll-smooth'>
    <Head>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
      <link
        href='https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap'
        rel='stylesheet'
      />
    </Head>
    <body className='bg-neutral font-outfit'>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
