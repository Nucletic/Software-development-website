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

export const Wordpress = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'WordPress Design and Development Services'} linkTo={'#'} firstLiText={'Certified WordPress Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Our Dedicated WordPress Services For Your Online Stores'}
        mainpara={'Explore the potential of your business with online stores! With our top-rated WordPress development solutions, we look at the end-to-end needs of your online business and help you sell better at any time and any place!'}
        title1={'WordPress Customized Stores'}
        para1={'With our WordPress customized stores, you can create an ultimate shopping experience for your customers, and also easily handle all the technical aspects of your online stores. Like installing manual patches, security issues, web hosting, and more. Your online store not only looks professional but also functions perfectly well, letting you win customers more quickly.'}
        title2={'WordPress Secure Migration'}
        para2={'Keep up with the latest tools and technologies of the e-commerce platforms by using the migration process. Not only because it\'s new and trendy, but to save your online store from multiple security threats. Our WordPress experts thoroughly study your online store and plan every step in detail to make a secure migration to the WordPress platform.'}
        title3={'WordPress Catalogue Management'}
        para3={'Get the updated information about your products in a user-friendly format with our customized catalog management solution. We let you easily handle the inventory, description, price, and other relevant aspects of your products. You can manage all of these functions across every sales channel of your WordPress store from a single point - saving you much time & resources!.'}
        title4={'WordPress Interactive Themes'}
        para4={'Get the WordPress interactive themes developed by our expert designers to make your brand unforgettable and deliver a seamless shopping experience at your online store. We also add easy-to-use customization options to let you regularly update based on your growing business needs, your customer\'s data, and the latest technologies.'}
        title5={'WordPress Custom Shopping Carts'}
        para5={'We develop WordPress custom shopping carts having simple visuals and all the essential information added to them. Such as the purchase summary, add/remove products, enter promos, shipping options, and more. You can also use this module to send personalized emails with a link to the customer\'s cart to encourage customers to complete their purchases.'}
        title6={'WordPress High-Quality Product Photos'}
        para6={'We add crisp and high-quality product photos to your online stores with the 360-degree view and auto-zooming features. Our WordPress experts also optimize them for fast loading across any device. This lets your customers instantly experience the product features before going for the final purchase and creates a trusted relationship with your brand.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'WordPress Module Integration'}
        title1={'WordPress Integration Development'}
        title2={'WordPress Customized Development'}
        title3={'WordPress Maintenance Solution'}
        array1={['WordPress Payment Integration', 'WordPress Promotion Integration', 'WordPress Shipping Integration', 'WordPress POS Integration', 'WordPress Add-On Integration']}
        array2={['WordPress Storefront Designs', 'WordPress Template Development', 'WordPress Web Development', 'WordPress Extension Development', 'WordPress Cross-Compatible UIs']}
        array3={['WordPress Store Upgrades', 'WordPress Bug-Fixing', 'WordPress SEO Services', 'WordPress Store Migration', 'WordPress Online Help']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <FAQs FaqArray={
        [
          {
            id: 0,
            question: 'What WordPress services do you offer?',
            answer: 'From development, designing, and optimization to post-maintenance, we offer a variety of services for the WordPress platform. We can also make simple updates, quick bug-fixing, and more to support your ongoing online stores. You can look into some of our featured services or reach us with your specific query via our contact details.'
          }, {
            id: 1,
            question: 'Can you develop a fully-customized WordPress solution for my online store?',
            answer: 'Since WordPress is an open-source CMS with numerous add-ons, it\'s super easy for experienced developers to develop a full-customized WordPress solution. But if you\'re a newbie, then you should consider getting help from an expert to set up your store on this platform. You can connect with our team here for more information about WordPress online stores.'
          }, {
            id: 2,
            question: 'What if your customized plugins or theme updates break my online store?',
            answer: 'As the top developers of online stores, we always run detailed compatibility tests, take backups, and plan the whole implementation step-by-step. After satisfactory preliminary reports, then we move forward with the actual implementation phase to get the expected results. We take full measures to prevent any data or information loss during the development of the online store.'
          }, {
            id: 2,
            question: 'Can you help me with the migration process of my WordPress online store from another e-commerce platform?',
            answer: 'As migration is so common among online stores, we have a dedicated WordPress migration team. We have experience in smoothly handling the shift of any online store from one e-commerce platform to another. Our WordPress experts ensure high performance, integrate powerful e-commerce functions, and get you even more benefits for your online stores.'
          }
        ]
      } />
      <GetConnectedSection />
    </React.Fragment>
  )
}