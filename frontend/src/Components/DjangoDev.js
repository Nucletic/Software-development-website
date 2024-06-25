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

export const DjangoDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Django Development Company'} linkTo={'#'} firstLiText={'Certified Django Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Django Development Company in Las Vegas and NYC, USA'}
        mainpara={'Hire expert Django developers to build high-performance and powerful web applications for your business.'}
        title1={'Custom Django Website Development'}
        para1={'Software Pro is a specialized and reputed Django Development Company in Las Vegas, USA. Our certified and high-level Django programmers offer scalable, robust, and highly functional website development services on the Django framework. Through a pragmatic Django framework, we build responsive and simple to complex websites for diverse business industries.'}
        title2={'Django Mobile & Web Application'}
        para2={'Software Pro has a team of dedicated Django developers and delivers Django based solutions for over years. Leveraging the potential of a powerful Django framework, we are specialized in Django Mobile & Web application development. We build interactive and feature enriched Android, iOS, and web applications to streamline business processes.'}
        title3={'Django E-commerce and M-Commerce Development'}
        para3={'As a leading Django development company, Software Pro provides Django E-commerce and M-commerce development services in Las Vegas, USA. Our interactive Django Based e-commerce and mobile commerce solutions allow wider interaction and enhanced shopping experience with maximum profitability and growth. We build custom Django eCommerce solutions to meet clients\' business needs.'}
        title4={'Django RESTFull API Development with Django REST Framework'}
        para4={'Software Pro is a clutch-award winning agency and has a dedicated in-house team of expert programmers and developers. Our Django developers develop RESTful APIs using the Django REST framework to enhance core features and functionality of existing web solutions.'}
        title5={'Django Application & Website Interface Development'}
        para5={'Software Pro provides high-performance Django Application & Website Interface development across multiple businesses. Unleashing the power of the Django framework, we develop robust, scalable, and flexible Django applications as well as interactive, fully responsive, and attractive web interfaces with proven front-end code standards.'}
        title6={'Django Migration Solution'}
        para6={'Software Pro has been providing technology migration support for multiple businesses. Whether you want to upgrade your existing solution or need smooth Django migration from any other technology stack, Software Pro is one stop for all solutions. We provide hassle-free and smooth Django migration services to businesses without risking any data loss.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'DJANGO DEVELOPMENT SERVICES'}
        title1={'Django Technology Stack'}
        title2={'Django Development Solution'}
        title3={'Industry Domains and Verticals'}
        array1={['Nginx', 'Apache', 'Gunicorn', 'Django REST Framework', 'Redis', 'Haystack', 'Django Debug Toolbar', 'Django CMS', 'Celery']}
        array2={['Chatbots and Virtual Agents', 'Fast Web Application Development', 'PayPal, PayU, eBay, Stripe, and many others Payment gateways integration', 'Django based Workflow Automation System', 'Django Oscar based eCommerce Application', 'Development','Python Selenium Test Automation System', 'Data Mining and Analysis', 'CI & CD with Django']}
        array3={['Banking & Finance', 'Automobile & Transportation', 'Healthcare', 'e-Learning & e-Commerce', 'Real Estate', 'Media & Entertainment', 'Warehouse', 'Insurance', 'Food & Restaurant']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
