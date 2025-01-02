import React from 'react'
import { SalesBanner } from './banner'
import { Topics } from './topics'
import { Profile } from './profile'
import { InfoSection } from './info'
import { MobTabletView } from './mobileTabletView'
import { Footer } from './footer'
import { EmpowerSection } from './empower'
import { ReviewsSection } from './reviews'

export const DigitalTransformationalProducts = () => {
  return (
    <div className=''>
      <SalesBanner/>
      <Topics/>
      <Profile/>
      <InfoSection/>
     <EmpowerSection/>
     <ReviewsSection/>
      <MobTabletView/>
      <Footer/>
    </div>
  )
}

