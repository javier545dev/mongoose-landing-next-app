import Head from 'next/head'
import { Layout } from '../components/Layout/Layout'
import { Hero } from '../components/hero/Hero'
import { Course } from '../components/course/Course'
import { Services } from '../components/services/Services'
import { About as AboutComponent } from '../components/about/About'

export default function HomePage() {
  return (
    <>
      <Head>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          content="text/html; charset=UTF-8; X-Content-Type-Options=nosniff"
          httpEquiv="Content-Type"
        />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="description" content="InstaPet" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://example.com/images/image.jpg" />

        <title>Mongoose FinTech</title>
        <meta property="og:title" content="Mongoose" />
        <meta property="og:site_name" content="MongooseTech" />
        <meta property="og:url" content="https://mongoose-tech.vercel.app" />
        <meta property="og:locale" content="es_LA" />
        <meta name="description" content="Simplifying access to cryptocurrencies and financial inclusion..." />

      </Head>
      <Layout>
        <Hero />
        <Course />
        <AboutComponent />
        <Services />
      </Layout>
    </>
  )
}
