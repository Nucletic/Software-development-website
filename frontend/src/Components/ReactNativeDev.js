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


export const ReactNativeDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'React Native App Development Services'} linkTo={'#'} firstLiText={'Certified React Native Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Hire Top React Native Development Agency in NYC and Las Vegas | Software Pro'}
        mainpara={'Leverage the expertise of Software Pro expert react native developers to build reliable cross-platform mobile applications'}
        title1={'Custom React Native Apps Development'}
        para1={'Software Pro is a leading React Native Apps development agency in Las Vegas, USA. Our experienced react native programmers using the power and full potential of React native framework build robust and high-performance cross-platform apps tailor-made to client\'s business requirements.'}
        title2={'React Native Android & iOS App Development'}
        para2={'Leveraging the cutting edge technologies and React Native framework, Software Pro provides React Native Android & iOS App development services in Las Vegas, USA. From designing UI elements to top-notch iOS and Android apps, our expert React Native developers helps businesses in building robust and reliable React solutions.'}
        title3={'VR & AR Apps Development'}
        para3={'As a trusted React development agency, Software Pro supplements VR & AR Apps development services in Las Vegas, USA. With the extended experiences of realities, our developers are proficient in building usable and resonating augmented and virtual reality apps for diverse industries.'}
        title4={'UI/UX Design'}
        para4={'To create responsive and eye-catching interfaces, Software Pro offers React Native interactive UI/UX design and development services. Our developers help businesses and clients in designing intuitive and captivating UI/UX of mobile and web apps and build high end React solutions as per your business needs.'}
        title5={'React Native MVP Development'}
        para5={'With years of experience, Software Pro certified React Native programmers have extended expertise in React Native MVP development services. Through our MVP development service, we maximize user validation and help in creating interactive applications iteratively.'}
        title6={'Server-Side API\'s Development'}
        para6={'Hire dedicated and expert React Native developers from Software Pro to build server-side APIs and to add functionalities to your serverless React native apps. Our React native programmers build server and robust, scalable, and adaptable APIs for secure and reliable communication between mobile apps interface and server.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'REACT NATIVE DEVELOPMENT SERVICES'}
        title1={'Front-End Technologies'}
        title2={'Backend Technologies'}
        title3={'React Native Development Capabilities'}
        array1={['React', 'Redux', 'GraphQL', 'Babel', 'Axio', 'Apollo', 'ESLint', 'Moment.js']}
        array2={['Rails', 'Hanami', 'RSpec', 'Puma', 'gRPC', 'PostgreSQL', 'Rackspace', 'Nginx']}
        array3={['Cross-Platform Compatibility', 'Full-Cycle Development', 'Real-Time Updates', 'MVP Development', 'Fast Speed and Performance', 'On-demand Scaling', 'Reusability & Code Audit', 'High-end Developers Tool']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
