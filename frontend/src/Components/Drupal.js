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
import { FAQs } from './FAQs';


export const Drupal = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Drupal Design and Development Services'} linkTo={'#'} firstLiText={'Certified Drupal Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Our End-to-End Services For Your Drupal Stores'}
        mainpara={'With our e-commerce Drupal solutions, you can experience efficient business operations, increase productivity, and utilize more possibilities for your brand to stand out from the crowd with superior shopping experiences.'}
        title1={'Drupal E-Commerce Development'}
        para1={'Our Drupal developers can quickly convert your store idea from prototyping to a feature-enriched live Drupal store. Our e-commerce experts use your industry-specific knowledge to integrate all personalized needs of your brand and business processes.'}
        title2={'Drupal Theme Development'}
        para2={'We can create themes from scratch or redesign the existing ones to reflect your brand image at your Drupal stores. We create highly responsive, mobile-first, and optimized UIs that can boost the sales probability of every product in your Drupal store.'}
        title3={'Drupal Module Development'}
        para3={'Drupal modules can add enhanced functions to your Drupal stores. You can add advanced search capabilities to let your customers easily find what they are looking for. We can use throttling to enhance your store\'s performance or set up to install the security updates automatically, you just have to share your needs with us!'}
        title4={'Drupal Third-party Integration'}
        para4={'Experience the seamless Drupal integration for everything that your Drupal store needs to perform fast and improve its business operations. You can integrate it with tools like BI & analytics, CRM, payment, shipping, tax, complex catalog, email marketing, and even more.'}
        title5={'Drupal CMS Development'}
        para5={'Simplify the process of adding, updating, or removing any content at your Drupal store. We develop Drupal CMS solutions to fulfill your business needs while making it scalable for large content volume, adding multi-language features, and better publishing controls.'}
        title6={'Drupal Migration and Upgrades'}
        para6={'You can easily migrate your online store from any e-commerce platform to the latest version of Drupal. We ensure highly secure and complete data transfer while maintaining every aspect of your online store - optimized pages, product catalogs, database, URLs, and others.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'Drupal Design and Development Services'}
        title1={'Drupal Integrations Support'}
        title2={'Drupal Development & Customizations'}
        title3={'Drupal Maintenance & Support'}
        array1={['Drupal Payment Integration', 'Drupal POS Integration', 'Drupal CRM & ERP Integration', 'Drupal Marketing App Integration', 'Drupal Plugin & API Integration']}
        array2={['Drupal Template Development', 'Drupal Plugin Development', 'Drupal Custom Designs', 'Drupal API Development', 'Drupal Store Prototyping']}
        array3={['Drupal Quick Bug Fixes', 'Drupal Updates Installation', 'Drupal Migration Support', 'Drupal Website Audits', 'Online Resources & Support']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <FAQs FaqArray={
        [
          {
            id: 0,
            question: 'Is setting up an online store on the Drupal platform easy?',
            answer: 'Since Drupal is an open-source CMS, it is easy to set up an online store. But if you\'re a novice or non-tech individual, then your online store can be vulnerable to low performance and security threats. So, it is better to let the experts handle your Drupal store development. You can contact our Drupal team to discuss your online store development on the Drupal platform.'
          }, {
            id: 1,
            question: 'Can I scale my business on the Drupal platform?',
            answer: 'Drupal is a great choice for scaling your online business or store. But you may need Drupal experts to fulfill your growing business needs. So, for maximum optimization and seamless performance - even with the large volume of traffic, chat with us to discuss your personalized business scalability process.'
          }, {
            id: 2,
            question: 'Can your agency customize Drupal modules for my business processes?',
            answer: 'Of course, we have years of experience in the e-commerce business. So, we can quickly understand technical and critical points. We examine details of your business activities, objectives, and brand ideas. Then, our experts develop scalable and robust e-commerce solutions through testing approaches.'
          }, {
            id: 2,
            question: 'I need your assistance in data migration. Can your agency help me with that?',
            answer: 'Our specialists guarantee quick data migration with no downtime and without losing any business hours. Contact our team to analyze your data migration project. Then, we can manage the migration procedure of your online store as soon as possible.'
          }
        ]
      } />
      <GetConnectedSection />
    </React.Fragment>
  )
}
