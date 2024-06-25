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
export const VuejsDev = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Vue.js Development Company'} linkTo={'#'} firstLiText={'Certified Vue.JS Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Vue.JS Development Company in Las Vegas & NYC, USA'}
        mainpara={'Software Pro specialized in building fast, secure, and lightweight applications using the Vue.JS framework.'}
        title1={'Vue.Js Custom Application Development'}
        para1={'Software Pro has extensive experience in Vue.JS development and developing next-generation applications using robust Vue.JS technology. With a team of expert Vue.JS developers, we are providing high-end Vue.JS application development services tailor-made to clients’ business requirements. From web application to mobile application, single page application to real-time application development, we provide full-cycle Vue.JS development service.'}
        title2={'Vue.JS Software Development'}
        para2={'As a leading software development company in Las Vegas, Software Pro has been providing development solutions for a wide range of frameworks and technologies including Vue.JS, React.JS, and many others. Our dedicated developers offer Vue.JS development service and build robust, scalable, and efficient Software\'s and apps that meet high technological standards and business needs.'}
        title3={'Vue.JS eCommerce Marketplace, Search Engine & widgets Development'}
        para3={'With extended expertise in developing B2B, B2C, and P2P marketplaces, Software Pro provides premium Vue.JS eCommerce development services in Las Vegas, USA. Our Vue.JS development team develops efficient and functional eCommerce marketplaces. To help you to maximize your ROI, we build with fast, reliable, and efficient search engines and high performing widgets for your online store.'}
        title4={'Vue.JS Data Analytics Tools Development'}
        para4={'Software Pro has been providing end-to-end development solutions to multiple businesses and automating and streamlining their business processes. Using the robust Vue Router framework, we offer Vue.JS Data analytics tools development service in Las Vegas, USA. By understanding your business KPIs, our developers develop data analytics tools for your business to help you in actionable data insights.'}
        title5={'Vue.JS Maintenance & Support'}
        para5={'FrAt Software Pro, a leading Vue.JS development company, we provide full-cycle Vue.JS maintenance & support service to ensure the smooth functioning of your system. Our proactive maintenance team and developers are available 24/7 and continually monitoring, performing bug fixing, upgrading, and improving performance. Whether you want to add functionality, and maintenance to your new system or existing system, we got your back.'}
        title6={'Vue.JS Migration'}
        para6={'Want to switch your existing system\'s platform? Software Pro is a trusted agency in Las Vegas for platform migration services. Whether you want to upgrade to the latest Vue.JS version or migrate from Angular, React, JavaScript to Vue.JS framework, our Vue.JS developers with a pragmatic approach helps in hassle-free Vue.JS migration solution to clients without risking the system\'s performance.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'VUE.JS DEVELOPMENT SERVICES'}
        title1={'Technologies & Methodologies'}
        title2={'Vue.Js Development Solutions'}
        title3={'Vue.js Capabilities'}
        array1={['JavaScript', 'Vuex', 'Vue Router', 'Fastify', 'TypeScript', 'Buefy', 'TypeORM', 'Agile & SCRUM Methodology']}
        array2={['Vue.js UI Development', 'Vue.js Front-end Development', 'Real-time Application Development', 'Vue.js Data Management Solution', 'Vue.Js Music & streaming Apps', 'Social & Interactive Apps Development', 'Vue.js Third-Party Integration Service']}
        array3={['Efficient State Management', 'Automated Two-way Data Binding', 'Artificial hash-based URLs', 'Virtual DOM', 'Component Level Caching']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}