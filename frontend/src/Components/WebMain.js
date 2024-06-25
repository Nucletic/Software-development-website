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

export const WebMain = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} linkText={'Contact Us'}
        title={'Website Maintenance and Support Services'} linkTo={'#'}
        firstLiText={'Certified Website Developers'}
        secondLiText={'100+ Successful Projects'}
        thirdLiText={'97% Customer Satisfaction'}
        fourthLiText={'12 years of experience in Website Maintenance'} />
      <TrustedBy />
      <OtherFeatures maintitle={'Premium Web Maintenance Services'}
        mainpara={'With an experienced team of developers, we provide affordable and reliable website maintenance services to help manage and maintain your website efficiently.'}
        title1={'Complete Website Maintenance'}
        para1={'Software Pro is a full-service website maintenance services agency offering reliable and professional solutions ensuring performance of your site. We house a certified team of developers, designers, and QA who can help you with a wide range of services that you and your business need. To assure the operational integrity of your site, we continually monitor and work proactively to fix bugs and issues. Our QA experts do regular test & review the workflows and execute planned flows & updates.'}
        title2={'Website Code Audit'}
        para2={'We provide a fully-customized website code audit to assess if all code standards are met. At Software Pro, our professional code auditors aim at providing fully-functional system architecture and code is well-written and bug-free. With our website maintenance and code audit services, we also analyze and monitor website or application to industry standards adherence — to ensure its security and data is not exposed to hacking. From auditing structure, style, to reviewing the efficiency of the system, you can rely on our expert team.'}
        title3={'24/7 Server Maintenance'}
        para3={'Your website uptime is important to render an excellent user-experience and factor leading to online success. We provide 24/7 server maintenance services to ensure your server is perfectly monitored and up & smoothly running. We have a certified team of IT managers and developers who work dedicatedly to manage your dedicated server or data-center by ensuring security and seamless performance. Lets unleash the full potential of your server with our managed server maintenance services. Our on-going server monitoring assesses your site to support your system working.'}
        title4={'Website SEO Management'}
        para4={'Your SEO performance is important to drive organic leads and traffic. Let our expert team help you with the website SEO management services so that you don’t lose any potential lead coming through organic results. We analyze your website current performance on different search engines and implement SEO strategies that get your business on top position for relevant keywords. Moreover, while migrating or restructuring your site, our website maintenance experts make sure there is zero loss of data or SEO performance.'}
        title5={'Website Restructuring'}
        para5={'At Software Pro, we provide website restructuring services to restructure and tweak the outlook of the website that engages and converts visitors. A well-structured website helps prospects to navigate through the website easily —- our designers design websites that can increase conversion rate of your business and improve brand credibility among your potential visitors. Partner up with our expert designer to design and restructure your outdated website to offer enhanced UX, usability, and better performance. We can integrate all the plugins and tools that your business needs to boost online success.'}
        title6={'Security Scans and Patches'}
        para6={'Your online business website is always at risk of hacking and vulnerabilities like data loss. We offer website patches and security scans to detect potential threats and malicious attacks that could harm your website performance. From website development to deployment, we aim to minimize and control vulnerabilities. With our on-going vulnerability patching services to ensure your website is performing well and up-to-dated.'} />
      <ClientReviews />
      <SoftwareOtherServices title={'Website Maintenance Services & Support Company'}
        title1={'Website Maintenance Services:'}
        title2={'Website Management Services:'}
        title3={'Platforms We Maintain:'}
        array1={['Website Security', 'Website Uptime Monitoring', 'Platform Upgrades', 'Website Malware Scan', 'Website Backups', 'Page Speed Monitoring', 'Website Code Assessment']}
        array2={['Software Updates', 'Website Content Management', 'Data Feed Management', 'Bug/Error Fixes', 'Security Updates', 'Website Performance Audit', 'CMS Version Upgradation']}
        array3={['WordPress Maintenance Services', 'Php/Laravel Maintenance Services', 'Shopify Maintenance Services', 'WooCommerce Web Maintenance', 'Magento Maintenance Services', 'BigCommerce Maintenance Services', 'Shopify Plus Maintenance Services']}
      />
      <PartnerWith />
      <TechStack />
      <ClientsPartners />
      <GetConnectedSection />
    </React.Fragment>
  )
}