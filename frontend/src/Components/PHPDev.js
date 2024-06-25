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

export const PHPDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'PHP Development Company'} linkTo={'#'} firstLiText={'Certified PHP Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'PHP Development Company in NYC and Las Vegas, USA'}
        mainpara={'Get Full Spectrum dynamic and robust PHP development solutions, including website development, enterprise web portal development, and complex eCommerce solutions.'}
        title1={'Custom PHP Web Development'}
        para1={'Software Pro offers scalable, flexible, and custom PHP web development services in the USA. From simple to complex enterprise web solutions, our PHP developers have years of experience in the development and implementation of web solutions. With extensive expertise in core PHP development, our developers also have a full range of competencies in PHP framework development including Codeigniter, Laravel, Cake, Symfony, and ZEND.'}
        title2={'Custom PHP CMS Development'}
        para2={'Our PHP developers at Software Pro develop fully functional and robust custom CMS solutions by tailoring your business needs. Helping clients with disruptive CMS solutions to manage their websites easily. Using advanced PHP frameworks and technologies, our developers follow best practices to deliver secure CMS solutions.'}
        title3={'PHP Ecommerce Solution Development'}
        para3={'As a leading PHP development company, we create custom eCommerce solutions with a rich set of functionalities to ensure to match the client\'s requirements. From eCommerce website design, custom shopping cart development, to payment gateway integration, our expert PHP developers have expertise in developing and deploying secure and user-friendly PHP eCommerce solutions.'}
        title4={'Custom PHP Portal Development'}
        para4={'Leveraging the latest technologies, multiple databases support, and advanced PHP frameworks, Software Pro provides custom PHP portal development service for all businesses sizes in the USA. With a fully integrated set of functionalities, we offer B2B & B2C portal development, eCommerce portal development, Enterprise level portals, Knowledge management portal development, ERP, and CRM solutions.'}
        title5={'API Integration & Development Service'}
        para5={'From third-party integration in your PHP website to custom API development, Software Pro\'s expert PHP developers deliver scalable and secure API solutions to clients. We develop custom PHP APIs for mobile, desktop, cloud, and web apps. Our API developers also have expertise in integrating private, public, and internal APIs to existing applications.'}
        title6={'Custom PHP Web Application Development'}
        para6={'As a top-notch PHP development agency in the USA, we offer web application development services in all MVC frameworks including CodeIgniter, CakePHP, Laravel, Zend, Yii, and Symfony. With full-cycle PHP development expertise, our developers create dynamic and robust web apps.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'PHP DEVELOPMENT SERVICES'}
        title1={'PHP Development Tech Stack'}
        title2={'PHP Development Solutions'}
        title3={'Full Cycle PHP Consulting Services'}
        array1={['Laravel', 'Codeigniter', 'Yii', 'Zend', 'Symfony', 'MySQL', 'MariaDB', 'MongoDB', 'Vanilla', 'Vue.Js', 'CMS: Joomla, Magneto, WordPress, Opencart']}
        array2={['Custom CMS Development', 'Custom CRM Development', 'Custom Websites and Portal Development', 'B2B & B2C Marketplace Development', 'Robust eCommerce Solution Development', 'Social Networking Solutions']}
        array3={['Custom Application Development consultation', 'Planning and Designing best practices', 'Robust PHP management workflow', 'Architecting and Developing microservices', 'DevOps Automated Workflow', 'Checking Security and Vulnerabilities', 'Usable and Scalable Solution']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
