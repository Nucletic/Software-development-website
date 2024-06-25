import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Footer } from './Components/Footer';
import { HomePage } from './Components/HomePage';
import { SoftwareDev } from './Components/SoftwareDev';
import { PythonDev } from './Components/PythonDev';
import { DotNetDev } from './Components/DotNetDev';
import { LaravelDev } from './Components/LaravelDev';
import { VuejsDev } from './Components/VuejsDev';
import { AndroidDev } from './Components/AndroidDev';
import { WebappsDev } from './Components/WebappsDev';
import { JavaDev } from './Components/JavaDev';
import { DjangoDev } from './Components/DjangoDev';
import { MeanDev } from './Components/MeanDev';
import { PHPDev } from './Components/PHPDev';
import { NodejsDev } from './Components/NodejsDev';
import { ReactNativeDev } from './Components/ReactNativeDev';
import { CodeIgDev } from './Components/CodeIgDev';
import { MernDev } from './Components/MernDev';
import { IphoneAppDev } from './Components/IphoneAppDev';
import { WooCommerece } from './Components/WooCommerece';
import { Wordpress } from './Components/Wordpress';
import { Drupal } from './Components/Drupal';
import { SquareSpace } from './Components/SquareSpace';
import { Magneto } from './Components/Magneto';
import { Joomla } from './Components/Joomla';
import { GraphicDesign } from './Components/GraphicDesign';
import { LandingPage } from './Components/LandingPage';
import { SEO } from './Components/SEO';
import { WebMain } from './Components/WebMain';
import { SocialMedia } from './Components/SocialMedia';
import { Contact } from './Components/Contact';
import { PortFolio } from './Components/PortFolio';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/software-development-services' element={<SoftwareDev />} />
        <Route exact path='/hire-python-developers' element={<PythonDev />} />
        <Route exact path='/hire-dot-net-developers' element={<DotNetDev />} />
        <Route exact path='/hire-laravel-developers' element={<LaravelDev />} />
        <Route exact path='/hire-vuejs-developers' element={<VuejsDev />} />
        <Route exact path='/hire-android-developers' element={<AndroidDev />} />
        <Route exact path='/web-app-development-services' element={<WebappsDev />} />
        <Route exact path='/hire-java-developers' element={<JavaDev />} />
        <Route exact path='/hire-django-developers' element={<DjangoDev />} />
        <Route exact path='/hire-mean-stack-developers' element={<MeanDev />} />
        <Route exact path='/hire-ai-ml-developers' element={<MeanDev />} />
        <Route exact path='/hire-php-developers' element={<PHPDev />} />
        <Route exact path='/hire-nodejs-developers' element={<NodejsDev />} />
        <Route exact path='/hire-react-native-developers' element={<ReactNativeDev />} />
        <Route exact path='/hire-codeigniter-developers' element={<CodeIgDev />} />
        <Route exact path='/hire-mern-stack-developers' element={<MernDev />} />
        <Route exact path='/iphone-app-development' element={<IphoneAppDev />} />
        <Route exact path='/woocommerce-design-and-development-services' element={<WooCommerece />} />
        <Route exact path='/wordpress-design-and-development-services' element={<Wordpress />} />
        <Route exact path='/drupal-design-and-development-services' element={<Drupal />} />
        <Route exact path='/squarespace-design-and-development-services' element={<SquareSpace />} />
        <Route exact path='/magento-design-and-development-services' element={<Magneto />} />
        <Route exact path='/joomla-design-and-development-services' element={<Joomla />} />
        <Route exact path='/graphic-designing-services' element={<GraphicDesign />} />
        <Route exact path='/landing-page-design-development-services' element={<LandingPage />} />
        <Route exact path='/search-engine-optimization-services' element={<SEO />} />
        <Route exact path='/website-maintenance-and-support-services' element={<WebMain />} />
        <Route exact path='/social-media-management-services' element={<SocialMedia />} />
        <Route exact path='/contact-us' element={<Contact />} />
        <Route exact path='/portfolio' element={<PortFolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



const ScrollToTop = () => {
  const { pathname } = useLocation();

  function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active');
      }
      else {
        reveals[i].classList.remove('active');
      }
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', reveal);
  }, [pathname]);

  return null;
};