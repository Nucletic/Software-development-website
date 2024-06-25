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

export const WebappsDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Web Apps Development Services'} linkTo={'#'} firstLiText={'Certified Web App Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Custom Web App Development Company in NYC and Las Vegas, USA'}
        mainpara={'Software Pro has proven solutions and services for Web App Development & Maintenance with High-Quality Standards. Get hassle-free outsource app development services to augment your staff and tap into skilled workforce.'}
        title1={'Custom Web App Design and Development Services'}
        para1={'Software Pro provides powerful and scalable custom app development and design services in the USA. Leveraging the latest technologies, we ensure to deliver custom solutions to our clients. Using Xamarin, HTML5, and Javascript, we develop highly responsive and cross-platform applications. Using the latest technologies, we deliver high-tech and robust web solutions, web applications, Android, iOS, and hybrid apps tailored to meet your business goals.'}
        title2={'Tech Immersion'}
        para2={'Software Pro expertise includes working with Zurb Foundation, SASS, LESS, Bootstrap, Zend, CMS, CodeIgniter, Angular JS, AWS, React.js, HTML/CSS, JavaScript, Node.Js, Ajax, JQuery, Responsive Web Design, Twitter Bootstrap etc. For backend, we work with PHP, Laravel, PayPal, Braintree, WebPay, WHMCS. The databases we frequently use are MySQL, PostgreSQL, SQLite, MongoDB.'}
        title3={'Web App Maintenance & Support'}
        para3={'From Bug fixing, content updation, Hosting Support & Migration to custom developed web applications, our team of experts is always available to address your needs. Software Pro provides continuous and seamless maintenance and support services for custom web development solutions. With years of experience, our six sigma certified professionals help the clients to maintain and upgrade web applications, B2B, and B2C cloud-based software.'}
        title4={'HTML5 Mobile & Web Application Development'}
        para4={'Software Pro can deliver outstanding results if you wish to develop HTML5 Apps for your next business idea implementation. Software Pro has proven excellence with proven code standards, delivering HTML5 consisting of W3C valid HTML5/CSS3 codes, all manually generated & hand-crafted by our experienced front-end developers. We also excel at rendering high quality & well-structured PSD or design to responsive HTML conversion services by accepting files in diversified designs & formats comprising PDF, PSD, JPG, PNG, AI, etc.'}
        title5={'UI/UX Design'}
        para5={'From strategy, UX design to UI implementation, our certified designers understand your business goals and create high end, user-centric intuitive design experience to bring value to your business. Software Pro specialized in designing and developing interactive user interfaces for web and native mobile apps with cross-browser support.'}
        title6={'CMS Web Applications'}
        para6={'We understand our clients\' requirements and strive to deliver cost-effective and easy-to-use solutions. Software Pro offers a wide range of scalable and flexible web-based CMS solutions to facilitate the clients in easy customization and content management. By integrating latest technologies, we help businesses with custom CMS solutions for their needs.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'WEB APP DEVELOPMENT SERVICES'}
        title1={'Full Cycle Web App Development'}
        title2={'Web Application Solutions'}
        title3={'Web App Development Technologies'}
        array1={['Web Application Ideation', 'Web Application Architecture Design', 'UI & UX Design', 'Front-end & Backend Solution']}
        array2={['Content Management Solutions', 'Customer Relationship Management System Development', 'CRM Consultation', 'Enterprise Level Web Applications', 'Responsive Website Design and Development', 'Enterprise Information & Knowledge Portal Development', 'Cross-Platform Application Development', 'Rich Internet Application Development & Implementation', 'HTML5 Website Development', 'B2B & B2C Ecommerce Development', 'SaaS Development', 'Web Portals Development', 'MVPS Development']}
        array3={['PHP', '.NET', 'Node.Js', 'Xamarian', 'Hanami', 'Ruby on Rails', 'Codeigniter', 'Laravel', 'React', 'Redux', 'Databases: MongoDB, MySQL, Redis, PostgreSQL']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}