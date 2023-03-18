import React from 'react';
import HomePageBanner from '../../components/HomePageBanner';
import MainSeccion from '../../components/MainSeccion'
import ClipsSeccion from '../../components/ClipsSeccion';
import StoriesSeccion from '../../components/StoriesSeccion';

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
