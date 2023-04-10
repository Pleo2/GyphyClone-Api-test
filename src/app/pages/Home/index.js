import HomePageBanner from 'app/components/HomePageBanner'
import MainSection from 'app/components/MainSection'
import ClipsSection from 'app/components/ClipsSection'
import StoriesSection from 'app/components/StoriesSection'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function Home () {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Giphy clone Test API</title>
        </Helmet>
        <HomePageBanner />
        <MainSection />
        <ClipsSection />
        <StoriesSection />
      </HelmetProvider>
    </>
  )
}
