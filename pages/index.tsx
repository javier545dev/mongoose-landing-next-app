import { Layout } from '../components/Layout/Layout'
import { Hero } from '../components/hero/Hero'
import { Course } from '../components/course/Course'
import { Services } from '../components/services/Services'
import { About as AboutComponent } from '../components/about/About'

export default function HomePage() {
  return (
    <>
      <Layout>
        <Hero />
        <Course />
        <Services />
        <AboutComponent />
      </Layout>
    </>
  )
}
