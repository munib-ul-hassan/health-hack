import React from 'react'
import { EBookCard } from './card'
import { RouteBar } from '../../routebar'
import { EBookCourseOutline } from './courseOutline'
import { EbookRelatedSection } from './relatedBooks'
import { EbookBanner } from './ebookBanner'

export const EbookCourseDetails = () => {
  return (
    <div>
         <div className="w-full mx-auto flex justify-start items-start my-2 gap-5 border-b-2 border-solid  border-[#E0E0E0] pb-4"> 
        <RouteBar/>
        </div>
        <div className="w-mainWidth mx-auto flex justify-start items-start my-10 gap-10"> 
        <div className="w-1/3">
        <EBookCard/>  
        </div>
        <div className="w-3/4">
          <EBookCourseOutline/>
        </div>
      </div>
      <EbookBanner/>

      <EbookRelatedSection/>
    </div>
  )
}
