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
export const SoftwareDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Best Software Development Services'} linkTo={'#'} firstLiText={'Certified Software Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Optimized Custom Software Development'}
        mainpara={'Get professional application development services, building stunning apps with evolving interfaces and scalable back-ends.'}
        title1={'Optimized Custom Software Development'}
        para1={'We believe in improving productivity with design and technology. Our philosophy is to align your expectations with our innovation. Software Pro owns an edge in developing the best custom software and websites with the limitation of client\'s requirements & budget. Our experts are unique in their development approach that provides us consistency and reliability, being the leading agency in the custom software development industry. We have successfully collaborated with many start-ups, mid-markets as well as enterprises in custom software projects. We are sure that our core competency will fill up your digital needs.'}
        title2={'Intelligent Enterprise Portals'}
        para2={'Software Pro has expertise in developing portals for corporates with exact alignment of their requirements. Our clients have reported a significant increase in the efficiency and productivity in their business process with our vibrant and result-oriented solutions. Our team enriches the portals with brilliant user interface, desired workflow, and required functionality. Our leveraging enterprise portal helps your organization to focus on your goal with immaculate and synchronized experience.'}
        title3={'Software Product Development'}
        para3={'From product conceptualization, design to implementation, Software Pro develops the best custom software product development solution tailoring your business needs. As the leading software product development agency in the USA, we offer SaaS, mobile apps, and desktop application development services. Our competent tech experts have huge domain expertise in developing software products in latest technologies including VR, Cloud computing, Blockchain, BigData, Computer Vision, IoT, AI and AR. We leverage latest technologies and methodologies like Agile, Scrum and DevOps to develop robust software product solutions. To assure product quality, our QA and product testing team employ CMMI model and proven testing practices to deliver high-end products.'}
        title4={'VR, Cloud Computing, Blockchain, and Big Data Development Service'}
        para4={'Software Pro continuously working on the latest technologies and delivering cutting-edge technology solutions to clients. From Cloud computing, Blockchain to Big Data, our expert developers build competitive solutions for clients. We offer scalable, flexible, and robust Augmented Reality, Virtual Reality, Blockchain, and Machine Learning tech services to businesses.'}
        title5={'Software Maintenance and Support Services'}
        para5={'Software Pro provides top-notch software maintenance and support services to customers. With a proactive approach our maintenance team delivers corrective, adaptive, perfective, and preventive support to customers. From bug fixing, migration and upgrading to other technology, we provide solutions that fit your requirements.'}
        title6={'Computer Vision, IoT, AI, and AR Development'}
        para6={'At Software Pro, we help businesses to digitally transform and automate business operations with Artificial intelligence and Computer vision. Our custom-built AI powered chatbots help businesses to track user\'s feedback, our computer vision tech experts ensure to benefit businesses with smart and deep data analysis solutions. We provide custom AR, IoT, and AI solutions to a wide range of business domains including healthcare, fintech, education, and many others.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'SOFTWARE DEVELOPMENT SERVICES'}
        title1={'Software Product Development Technologies'}
        title2={'Software Product Development Technologies'}
        title3={'Software Development Solutions for Enterprises'}
        array1={['Agile', 'Lean', 'DevOps', 'Waterfall', 'Scrum', 'XP', 'Prototype', 'RAD']}
        array2={['Java Development', '.NET Development', 'PHP Development', 'Python Development', 'Ruby on Rails Development', 'Mean Stack Development']}
        array3={['Blockchain Software Development', 'Software Consulting: Agile Consulting, IoT Consulting, CRM Consulting, Computer Vision', 'Rapid Prototyping and Iterative Development', 'Large Scale Software Development', 'Embedded Software Development', 'API Development', 'SaaS Enhancement, Consulting, and Development', 'AR/VR Software Development', 'IoT and BigData Software Development']} />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}
