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

export const MeanDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Mean Stack Development Services'} linkTo={'#'} firstLiText={'Certified Mean Stack Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Hire Mean Stack Development Agency in Las Vegas and New York City, USA | Software Pro'}
        mainpara={'Leveraging the cutting edge technologies and MEAN Stack framework capabilities, we build powerful, robust, and scalable websites and mobile applications.'}
        title1={'Custom MEAN Stack Application Development'}
        para1={'Software Pro provides MEAN Stack development services in Las Vegas, USA, and develops efficient & real-time applications for multiple business industries. Combining the potential of four technologies ( MongoDB, ExpressDB, Angular.Js, and Node.Js), our MEAN stack development allows full-cycle JavaScript feature enriched app development that meets your business needs.'}
        title2={'MEAN Stack Web & Mobile Application Development'}
        para2={'Software Pro is a trusted and renowned MEAN stack development Company in Las Vegas and helps businesses with providing innovative business solutions. We have an experienced team of MEAN stack developers and are adept at developing robust and efficient MEAN stack based Web & Mobile applications according to client\'s requirements.'}
        title3={'MEAN Stack ERP & E-COMMERCE Development'}
        para3={'We provide robust and scalable MEAN stack based ERP and E-commerce solutions in Las Vegas, USA. Our offshore MEAN stack developers are well-versed to develop high-performing ERP solutions with scalable and secure architecture. Hire our expert developers to build your flexible eCommerce solution using NO-SQL and robust MEAN stack framework.'}
        title4={'MEAN Stack Consulting'}
        para4={'Software Pro offers full-cycle MEAN stack consulting services in Las Vegas, USA. Software Pro\'s consultant by understanding your business requirements and KPIs help you to decide what framework should be used for the specific project scope. Get MEAN stack consultation for your project within a competitive budget.'}
        title5={'MEAN Stack Maintenance & Support'}
        para5={'After the project completion, we offer complete MEAN stack maintenance and support services in Las Vegas, USA. We continually monitor your system for ongoing updates to ensure optimal performance of your system and provide full-fledged round-the-clock support after deployment. Our capable developers and maintenance team are proficient to deal with your futuristic requirements.'}
        title6={'MEAN Stack Migration'}
        para6={'In addition to MEAN stack development services, Software Pro offers MEAN stack migration assistance to the global clientele. Our well-experienced developers can help you in the smooth and seamless migration of your existing web applications and solutions to the MEAN stack framework. Hire MEAN stack developers from Software pro to get end-to-end MEAN stack migration services that can add a competitive edge to your business.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'MEAN STACK DEVELOPMENT SERVICES'}
        title1={'Technology Stack'}
        title2={'MEAN Stack Development Solutions'}
        title3={'MEAN Stack Capabilities'}
        array1={['Node.js', 'MongoDB', 'Angular.js', 'Express.js', 'Backbone.js', 'JavaScript, CoffeeScript, TypeScript']}
        array2={['ExpressJS Design and Development', 'NodeJS Development', 'AngularJS Development', 'MEAN Stack Porting', 'Rapid MEAN Stack Application Development', 'Automated Business Intelligence and Reporting System']}
        array3={['Open-source and Reliable Framework', 'Javascript based End-to-End Development', 'Extensive Library Availability', 'Secure Migration with NoSQL', 'Single Page Application Development']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}