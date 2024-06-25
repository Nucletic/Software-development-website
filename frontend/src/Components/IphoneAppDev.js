import React from 'react'
import { NavBar } from './NavBar';
import { TrustedBy } from './TrustedBy';
import softwareBackground from '../Images/homepage-banner9.png'
import { OtherFeatures } from './OtherFeatures';
import { ClientReviews } from './ClientReviews';
import { SoftwareOtherServices } from './ClientReviews';
import { PartnerWith } from './PartnerWith';
import { TechStack } from './PartnerWith';
import { ClientsPartners } from './PartnerWith';
import { GetConnectedSection } from './PortFolioSection';

export const IphoneAppDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Iphone App Development Company'} linkTo={'#'} firstLiText={'Certified iOS Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'iOS APP Development Company in Las Vegas and NYC, USA'}
        mainpara={'As a Specialized Full-cycle iOS app development company, Software Pro build impactful and feature-rich iOS applications.'}
        title1={'Custom iOS/iPhone App Development'}
        para1={'Software Pro is offering bespoke White label iOS app development services in Las Vegas, USA. With agile process capabilities, our in-house team of expert iOS developers has years of experience in developing custom iOS apps according to your business needs. By maintaining Apple iOS development standards and requirements, we create bug-free iOS apps for multiple business industries.'}
        title2={'iOS UI/UX Design'}
        para2={'For over years, Software Pro has been developing high-performance iOS apps for multiple Apple devices. From design to development, we are proficient in custom Apple application development. We have a team of expert UI developers who are adept in creating mobile-friendly and user-friendly iOS mobile experience for customers and design Apple\'s UI standard complined interfaces.'}
        title3={'Real-Time ECommerce iOS Application'}
        para3={'As a leading iOS app development company, Software Pro has extensive expertise in world-class eCommerce iOS apps to cater to your business goals. To cope up with the changing market trends and growing buyer\'s needs, we offer powerful eCommerce iOS application solutions that fit perfect for your eCommerce business. With enhanced features and user experience, our iOS app solution ensures the lowest cart abandonment rate.'}
        title4={'Enterprise iOS App Development'}
        para4={'With the experience of over a decade in iOS app development, Software Pro provides top-notch enterprise iOS application development solutions to large and enterprise-level businesses. Whether you need B2B/B2C or B2C apps, we are a one-stop solution for high-quality diverse enterprise mobile apps that can increase profitability.'}
        title5={'iOS Maintenance & Support'}
        para5={'Software Pro provides end-to-end iOS maintenance & support services in Las Vegas, USA. We offer personalized packages for iOS app maintenance and support to clients for their existing and deployed apps. From Apple latest updates, version releases, bug fixing to regular monitoring, our developers are available round-the-clock to the optimal performance of your iOS application'}
        title6={'Expert iOS Developers'}
        para6={'Hire adept iOS developers from Software Pro who specialize and have years of experience in iOS development. Our customer-centric approach and agility allow the iOS developers to build high-performance iOS apps that fit the requirements of the app store. Dedicated team of iOS developers is experts in rapid application development through agile processes.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'IOS DEVELOPMENT SERVICES'}
        title1={'Technology Stack'}
        title2={'Toolset'}
        title3={'iOS Development Solution'}
        array1={['iCloud and CloudKit', 'In-App Purchase', 'App Extensions', 'Apple Pay', 'Wallet and PassKit', 'SiriKit', 'WebKit', 'MusicKit', 'Core ML', 'ARKit', 'SceneKit']}
        array2={['Apple\'s Xcode', 'JetBrains AppCode', 'Sketch', 'Photoshop', 'Figma', 'MarvelApp', 'Flutter']}
        array3={['iPhone UI/UX Design', 'iPhone/iPad Game Development', 'iPhone Widget Development', 'iPhone App Update & Optimization', 'Video & Audio iOS Development', 'Apple Watch App Development', 'Apple TV App Development', 'App Store Deployment']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
