import HomePageBanner from 'app/components/HomePageBanner'
import MainSeccion from 'app/components/MainSeccion'
import ClipsSeccion from 'app/components/ClipsSeccion'
import StoriesSeccion from 'app/components/StoriesSeccion'
import { Helmet } from 'react-helmet'

export default function Home () {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      <Helmet>
        <title>Giphy clone Test API</title>
      </Helmet>
      <HomePageBanner />
      <MainSeccion />
      <ClipsSeccion />
      <StoriesSeccion />
    </>
  )
}
