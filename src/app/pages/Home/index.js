import HomePageBanner from 'app/components/HomePageBanner'
import MainSection from 'app/components/MainSection'
import ClipsSection from 'app/components/ClipsSection'
import StoriesSection from 'app/components/StoriesSection'
import { Helmet } from 'react-helmet'

export default function Home () {
  return (
    <>
      <Helmet>
        <title>Giphy clone Test API</title>
      </Helmet>
      <HomePageBanner />
      <MainSection />
      <ClipsSection />
      <StoriesSection />
    </>
  )
}
