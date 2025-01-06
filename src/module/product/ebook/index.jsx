import React from 'react'
import { Banner } from './banner';
import { BookSection } from './bookSection';
import { AdvertisementBanner } from './discoverBanner';
import { AllBooks } from './allBooks';

export const EBook = () => {
  return (
    <div>
      <Banner/>
      <BookSection/>
      <AdvertisementBanner/>
      <AllBooks/>
    </div>
  )
};

