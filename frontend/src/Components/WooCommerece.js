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

export const WooCommerece = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'WooCommerce Design and Development Services'} linkTo={'#'} firstLiText={'Certified WooCommerce Developers'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Our Top-Rated WooCommerce Services For Your Online Stores'}
        mainpara={'We are the leading WooCommerce design and development agency with an enviable track record of successfully creating stunning and high-performing online stores. Our strong technical expertise in the WooCommerce platform enables us to offer highly reliable solutions.'}
        title1={'WooCommerce Store Development'}
        para1={'Get the online stores with clean coding, pleasing visuals, speedy performance, useful integrations, and unlimited customization options. Our WooCommerce store development focuses on letting you manage your business growth efficiently and get impressive business-oriented results in the least possible time.'}
        title2={'WooCommerce Custom Themes'}
        para2={'With our WooCommerce custom themes, we enable you to keep your store up-to-date with the market trends. That is, you can easily do a few tweaks on your own too! Like enabling the product catalog/quick view, storefront updates for seasonal occasions, adding shortcodes to show daily top deals, or personalizing the product display based on your customer\'s experience.'}
        title3={'WooCommerce Store Migration'}
        para3={'Doing everything on your own to launch your online store on a new platform is indeed challenging. The in-depth research, numerous comparisons, and choosing the most promising e-commerce features. That\'s why our dedicated team makes it easier for you to migrate with the best possible e-commerce features of the WooCommerce platform.'}
        title4={'WooCommerce Fraud Detection'}
        para4={'Our WooCommerce team is aware of the importance of such security measures, as it may harm your business revenues and lose your customer\'s trust in your brand. That\'s why we incorporate multiple protection tools and integrate the fraud detection plugins into your online stores. This can effectively save your online stores from any online fraud activities.'}
        title5={'WooCommerce Google Analytics'}
        para5={'Grab insights on the online shopping behavior to improve your online store\'s user engagement and overall site performance. We integrate WooCommerce Google Analytics into your store to collect the needed data accurately and generate it in a user-friendly view. You can use this data to address the crucial touchpoints of your online store to grow your online business.'}
        title6={'WooCommerce Customized CTA'}
        para6={'Our WooCommerce experts ensure to move your visitors through the sales funnel and convert them into buyers. We develop customized Call-to-Actions (CTAs) and place them strategically. This encourages customers to take certain actions - such as buying products, avail discounts with more products, and more.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'WooCommerce Module Integration'}
        title1={'WooCommerce Extension Development'}
        title2={'WooCommerce Development & Design'}
        title3={'WooCommerce Assistance Services'}
        array1={['WooCommerce Payment Gateways', 'WooCommerce Reward System', 'WooCommerce Shipping & Tracking', 'WooCommerce POS Integration', 'WooCommerce Multi-Channel Integration']}
        array2={['WooCommerce Store Development', 'WooCommerce Responsive Web Designing', 'WooCommerce Extension Development', 'WooCommerce Theme Customization', 'WooCommerce Multi-Store Development']}
        array3={['WooCommerce Quick Tweaks', 'WooCommerce Resolve Bugs', 'WooCommerce Optimization', 'WooCommerce Version Upgrade', 'WooCommerce Technical Help']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <FAQs FaqArray={
        [
          {
            id: 0,
            question: 'Why do you think that I should go for the WooCommerce platform for my store development?',
            answer: 'WooCommerce has rich e-commerce features. You can find various plugins, in-built capabilities, APIs, and more that lets you set up your online store. But if you have little to no technical knowledge, then it\'s better to contact WooCommerce experts to develop your online store on this platform. We can help you to get maximum output and productivity from our WooCommerce solutions.'
          }, {
            id: 1,
            question: 'Can you develop an easy-to-customize WooCommerce theme?',
            answer: 'Our idea is to empower the owner of online stores. That\'s why we prepare detailed documentation, write clean and well-commented codes, and follow standard practices to make customization easy for you. So with little training, you can write a few lines of code only to update promotional deals or a small part of your online stores. But beware that any wrong implementation can lead to loss of sales and customers\' trust in your online store.'
          }, {
            id: 2,
            question: 'From where can I track my online store\'s progress?',
            answer: 'We assign individual project managers, use in-house management tools, and send weekly reports to our clients to let them know about the project\'s progress. You can also directly contact the project\'s PM to know the progress immediately. We ensure to keep you in the loop during the whole development process and deliver the end product on time.'
          }, {
            id: 2,
            question: 'After delivery of the WooCommerce projects, do you also provide a follow-up service with it?',
            answer: 'Our team makes sure to check everything and resolve every possible issue before delivering you the project. But still, if there is any genuine issue immediately after the deployment, then it can be resolved in the post-maintenance phase of the project.'
          }
        ]
      } />
      <GetConnectedSection />
    </React.Fragment>
  )
}