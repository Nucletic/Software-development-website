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

export const CodeIgDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Codeigniter Development Services'} linkTo={'#'} firstLiText={'Certified CodeIgniter Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Hire Codeigniter Development Company in Las Vegss and NYC, USA | Software Pro'}
        mainpara={'Hire Codeigniter developers from Software Pro. We build and deliver powerful and dynamic PHP web solutions through codeigniter framework.'}
        title1={'Custom Codeigniter Development Service'}
        para1={'Software Pro is a top-notch Codeigniter development company in Las Vegas, USA. Our dedicated Codeigniter developers build robust, scalable, and efficient PHP solutions using advanced Codeigniter framework. We deliver custom and result-driven Codeigniter solutions to businesses to achieve their business needs.'}
        title2={'Codeigniter based e-Commerce & CMS Development'}
        para2={'With extended expertise and experience, our skilled Codeigniter developers provide high-performance Codeigniter based eCommerce and CMS solutions development service. Using Codeigniter framework and Ajax, we build an interactive and responsive shopping cart to enhance shopping experience. Our custom CMS development service allows us to cater to your specific business requirements by integrating required functionalities and features.'}
        title3={'Codeigniter Enterprise & Corporate Application Development'}
        para3={'Software Pro has a proficient certified team of developers and is well versed in developing custom enterprise and corporate application solutions using advanced PHP technologies and CI framework. Whether you need a simple or complex application, we understand your requirements and develop feature enriched applications as per your customized needs.'}
        title4={'Codeigniter REST API & Extension Development'}
        para4={'Using the latest technologies and CI framework, we provide Codeigniter REST API and custom extension development service to enhance your existing web application functionality. Our skilled PHP developers are proficient in MVC architecture handling and developing complex and custom REST APIs according to client\'s requirements.'}
        title5={'Codeigniter Maintenance & Migration support'}
        para5={'Software Pro has been providing CI Maintenance & Migration support for multiple businesses and is recognized as a trusted agency for Codeigniter web solutions in Las Vegas, USA. Our developers provide secure and reliable CI migration from any other technology stack where our proactive CI maintenance team provides round-the-clock technical support to clients and ensures seamless operation of the website.'}
        title6={'Agile Codeigniter Developers'}
        para6={'Software Pro has an agile team of developers with proficiency in handling MVC architecture. Our dedicated Codeigniter developers are well versed in developing and deploying results-driven web solutions to clients. Whether you need application development or CI module development, Software Pro\'s Codeigniter developers are flexible and available for both part-time and full time.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'CODEIGNITER DEVELOPMENT SERVICES'}
        title1={'CodeIgniter Technology Stack'}
        title2={'Codeigniter Development Solutions'}
        title3={'Industry Domains and Verticals'}
        array1={['PHP', 'MVC Architecture', 'MySQL', 'PostgreSQL', 'SilverStripe', 'REST API', 'Eclipse PDT', 'Smarty', 'Spry Framework']}
        array2={['CI Website Development', 'CI Web Portal and CMS Development', 'REST API Development', 'Full-fledged Backend for Mobile Apps', 'CI-based Custom Shopping Carts', 'Third-Party Integration', 'Corporate CI Website and Application Development']}
        array3={['Education', 'Healthcare', 'Business & Real Estate', 'Travel & Transportations', 'Food & Entertainment', 'Sports']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
