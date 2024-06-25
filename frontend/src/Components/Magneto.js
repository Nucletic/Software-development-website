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

export const Magneto = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Magento Design and Development Services'} linkTo={'#'} firstLiText={'Certified Magento Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Explore Our All-in-One E-Commerce Solutions'}
        mainpara={'Leverage our expertise to get more visibility, high converting traffic, increase average order value, and grow customer lifetime value for your online stores with our professional e-commerce Magento e-commerce solutions.'}
        title1={'Magento Store Customization'}
        para1={'Get a complete customizable Magento e-commerce solution to resonate your online store with your brand. From a simple visit to the purchase of a product, we make people remember your brand to improve conversion and brand loyalty with sales 2X higher than your competitors.'}
        title2={'Magento Landing Pages'}
        para2={'Make your Magento landing pages effective with our expert Magento designers to sell your products even faster. We use precise navigation flows to reduce any distractions that can delay your customer\'s click on the purchase, add to cart, or any other CTAs to buy a product.'}
        title3={'Magento Page Optimization'}
        para3={'Fast speed lets your target customers easily buy products on the go and reduces the cart abandoned rate at your Magento stores. We use effective resource minification and multiple SEO practices for the speedy performance of your Magento store\'s web pages across all devices.'}
        title4={'Magento Store Analytics'}
        para4={'Track and improve how your customers interact with every element of your Magento stores. You can place valuable offers - such as discounts, promotions, and more - based on your customer insights to quickly improve conversion rates and achieve your sales target.'}
        title5={'Magento Data Migration'}
        para5={'Our Magento migration solutions ensure no data loss, 100% uptime, and high performance of your online stores. You can migrate to Magento stores from another or older e-commerce platforms to the newer Magento version quickly and securely.'}
        title6={'Magento Store Audit'}
        para6={'Let us help you with your Magento store\'s in-depth audits. We offer frontend and backend audit services with valuable feedback that can be a game-changer move to improve business productivity, conversions, sales, and ROI.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'Magento Design and Development Services'}
        title1={'Magento Custom Integrations'}
        title2={'Magento Store Development'}
        title3={'Magento Maintenance Services'}
        array1={['Magento Payment Integrations', 'Magento CRM Integration', 'Magento Third-party Extensions', 'Magento ERP Integration', 'Magento Plugin Integration']}
        array2={['Magento Theme Development', 'Magento Store Customization', 'Magento API Development', 'Magento Plugin Development', 'Magento App Development']}
        array3={['Magento Migration Services', 'Magento Maintenance and Support', 'Magento Web Analytics & Audit', 'Magento Performance Optimization', 'Online Resources & Tutorials']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <FAQs FaqArray={
        [
          {
            id: 0,
            question: 'Is outsourcing for Magento migration services a good option?',
            answer: 'When migrating from one platform, you may end up facing technical bottlenecks. That can cost you wasting your resources and money. So, getting it resolved by a Magento experienced professional is indeed a better option. You can consult with our experts here.'
          }, {
            id: 1,
            question: 'Do you design and develop a custom Magento theme?',
            answer: 'We believe in connecting your customers with your brand, which is possible only if they get a unique experience at your online store. For this reason, we design a custom theme for your store to develop on the Magento platform. We provide end-to-end Magento theme development services.'
          }, {
            id: 2,
            question: 'Do you build a custom extension for the Magento stores?',
            answer: 'Your business\'s functions often need to be customized or enhanced with features that are not currently available on the platform. So, we build custom solutions to add those features to your online store to fulfill your business operation needs. You can chat with us about your business'
          }, {
            id: 2,
            question: 'Can you migrate my existing website from another platform to Magento?',
            answer: 'Of course, you can get our migration specialists who are more than fit for transferring your online stores from your current platform to Magento. We can also perform migration from the older Magento version to the latest one. To discuss the ETA, please feel to talk to our team.'
          }
        ]
      } />
      <GetConnectedSection />
    </React.Fragment>
  )
}
