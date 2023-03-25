import React from 'react';
import HomePageBanner from 'app/components/HomePageBanner';
import MainSeccion from 'app/components/MainSeccion'
import ClipsSeccion from 'app/components/ClipsSeccion';
import StoriesSeccion from 'app/components/StoriesSeccion';

export default function Home() {
  return (
    <>
      <HomePageBanner />
      <MainSeccion />
      <ClipsSeccion />
      <StoriesSeccion />
    </>
  );
}
