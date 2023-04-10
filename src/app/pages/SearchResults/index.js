import HomePageBanner from 'app/components/HomePageBanner'
import SearchListGifs from 'app/components/SearchListGifs'
import TrendingSearchSection from 'app/components/TrendingSearchSection'

export default function SearchResults () {
  return (
    <>
      <TrendingSearchSection/>
      <HomePageBanner />
      <SearchListGifs />
    </>
  )
}
