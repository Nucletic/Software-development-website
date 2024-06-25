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

export const NodejsDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Nodejs Development Company'} linkTo={'#'} firstLiText={'Certified Node.js Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Node.js Development Company in NYC and Las Vegas USA'}
        mainpara={'Hire Node.JS Developers from Software Pro to build functionality enrich, robust, real time and scalable web and mobile applications.'}
        title1={'Custom Node.js web Development'}
        para1={'As a top Node.js development company in the USA, Software Pro provides scalable Node.js Web development services to businesses. Our custom Node.js development service offers real-time chat applications development, server-side applications, frontend & backend development, cross-platform applications, and real-time web API development.'}
        title2={'Enterprise Software Development'}
        para2={'Our developers have extensive experience in developing scalable Enterprise solutions using Node.js technology. Using agile methodologies and the right business tools, we ensure to develop robust solutions tailored to meet your requirements. Our highly skilled Node.js developers have expertise in developing complex Enterprise software environments for businesses.'}
        title3={'Custom Node.js Portal Development'}
        para3={'Hire experienced and highly skilled Node.js developers to get custom web portal development services to boost your business growth. At Software Pro, we offer reliable and secure internal & web portal design and development services in the USA. Our test-driven development methodology through Node.js enables us to deliver robust solutions to our clients.'}
        title4={'Node.js API Development and Integration'}
        para4={'At Software Pro, our highly efficient and expert developers build REST APIs and deliver API development services for web & mobile applications. Using Node.Js framework and MongoDB databases, we develop custom enterprise-oriented API\'s to deliver high-performance application solutions to clients.'}
        title5={'Node.js Web & Mobile Application'}
        para5={'With comprehensive Node.js expertise, Our expert team of developers builds secure and powerful web and mobile apps using Node.js framework. Being a reliable Node.js development company, Software Pro creates scalable real-time web and mobile apps that meet your business requirements.'}
        title6={'Node.js Maintenance and Support'}
        para6={'Software Pro\'s support team is readily available to provide you maintenance solutions for your Node.Js applications. Our efficient and dedicated team is available round the clock, so you can reach us for Node.js consulting and maintenance support. From development, troubleshooting, deployment to upgrade, we deliver efficient solutions to our clients.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'NODE.JS DEVELOPMENT SERVICES'}
        title1={'Node.js Tech Stack'}
        title2={'Node.js Custom Solutions'}
        title3={'Node.js Frameworks & Application Servers'}
        array1={['Firebase', 'Reddis', 'MongoDB', 'MariaDB', 'Unit.js', 'Sinoj', 'Catberry', 'Mean', 'CI/CD & DevOps']}
        array2={['Enterprise Application Development', 'API & Plugin Development', 'Chatbots Development', 'Real time Application Development', 'IoT based Applications', 'Robust Ecommerce Solutions', 'Microservices Development']}
        array3={['koa', 'Meteor', 'Sails', 'Passport', 'Mongoose', 'Nginx', 'Apache', 'LoopBack', 'Express']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}