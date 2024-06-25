import React from 'react'
import { NavBar } from './NavBar';
import { TrustedBy } from './TrustedBy';
import { AboutService } from './AboutService';
import { PartnersPlatFormsAvailable, PlatFormsAvailable, TopPlatFormsAvailable } from './PlatFormsAvailable';
import { EcomPlatFormsAvailable } from './PlatFormsAvailable';
import { ShopifyPlatFormsAvailable } from './PlatFormsAvailable';
import { BusinessPlatFormsAvailable } from './PlatFormsAvailable';
import { DeliveryModel } from './DeliveryModel';
import { Features, WhiteLabeling } from './Features';
import { FeaturesCenter } from './Features';
import { Governance } from './Governance';
import { Augmentation } from './Augmentation';
import { KeystatisticsCenter } from './Features';
import { ReviewSection } from './PortFolioSection';
import { GetConnectedSection } from './PortFolioSection';

export const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar home={true} />
      <TrustedBy />
      <AboutService />
      <PlatFormsAvailable />
      <EcomPlatFormsAvailable />
      <ShopifyPlatFormsAvailable />
      <BusinessPlatFormsAvailable />
      <DeliveryModel />
      <Features />
      <FeaturesCenter />
      <Governance />
      <Augmentation />
      <KeystatisticsCenter />
      <WhiteLabeling />
      <TopPlatFormsAvailable />
      <PartnersPlatFormsAvailable />
      <ReviewSection />
      <GetConnectedSection />
    </React.Fragment>
  )
}