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

export const AndroidDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Android App Development Company'} linkTo={'#'} firstLiText={'Certified Android Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Android App Development Company in New York and Las Vegas, USA'}
        mainpara={'As a reputed Android app development company, we develop scalable, efficient, and robust applications for multiple Android devices.'}
        title1={'Custom Android Application Development'}
        para1={'Software Pro offers 360 degrees Android Application development solutions to multiple businesses of diverse industries. We develop customized Android apps that align with your business requirements. Our certified Android developers are adept in building scalable, flexible, and reliable android apps and web-based android applications. We focus to deliver you a world-class development solution that can maximize your ROI.'}
        title2={'Native Android Application Development'}
        para2={'Leveraging cutting-edge technology, Software Pro offers Native Android Application development service in Las Vegas, USA. With the single platform deployment capability and enhanced user-experience, our Native Android developers develop robust, functionalities and feature enriched android apps that can work optimally on native platforms.'}
        title3={'Enterprise Android Application Development'}
        para3={'Software Pro is a crew of pro Android developers who have gained years of experience in developing robust Android applications for your enterprise. With our custom enterprise Android application development service, we build scalable and flexible J2ME/JAVA based app solutions for our clients that meet their business needs.'}
        title4={'UI/UX Design'}
        para4={'With our team of proficient UI/UX app designers, we provide full-cycle UI/UX app design services in Las Vegas, USA. We create interactive and bespoke UI designs with easy to use navigation that improves user experience. Our Android UI/UX design service will give you appealing interfaces and designs to gain a competitive edge over your competitors.'}
        title5={'Android Apps Maintenance & Support'}
        para5={'At Software Pro, we offer Android App maintenance and support services to businesses after the successful deployment. In addition to Android App development, we provide 24/7 technical & maintenance support and bug testing & monitoring service to ensure the seamless functioning of your application.'}
        title6={'Android Apps Upgrading & Migration'}
        para6={'With extensive expertise in App migration, we provide Android apps upgrading and migration service that allows the secure and uninterrupted migration of your existing iOS application to Android. Our experienced Android developers build cross-compatible apps and experts in integrating high-performance UI/UX and functionality components as per your business needs.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'ANDROID DEVELOPMENT SERVICES'}
        title1={'Languages & Tools'}
        title2={'Framework & Libraries'}
        title3={'Android Development Solutions'}
        array1={['Java', 'Kotlin', 'JavaScript', 'XML', 'Android SDK', 'Android NDK']}
        array2={['RetroFit', 'React Native', 'Volley', 'Dagger2', 'Gradle', 'Dexter', 'jUnit', 'Picasso']}
        array3={['Android Games Apps', 'Android Wear App Development', 'Android Tablet Development', 'Android TV App Development', 'Android Widget Development', 'Google Play Store Assistance', 'Android mCommerce Apps Development']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
