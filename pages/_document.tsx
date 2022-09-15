import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => (
  <Html className='scroll-smooth'>
    <Head>
      <meta name='description' content='Everything related to your cryptocurrency education and how to invest safe and confident' />
      <link rel='icon' href='/favicon.ico' />
      <link
        href='https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700;900&display=swap'
        rel='stylesheet'
      />
    </Head>
    <body className='bg-neutral font-outfit overflow-auto w-full h-screen snap-y snap-mandatory'>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
