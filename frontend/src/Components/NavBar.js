import React, { useState, useEffect } from 'react'
import Logo from '../Images/logo.png'
import Background from '../Images/land_background.svg'
import { Link } from 'react-router-dom'


export const NavBar = (props) => {

  // const [openSoftware, setOpenSoftware] = useState(false);
  // const [ecomPlat, setEcomPlat] = useState(false);
  // const [digiService, setDigiService] = useState(false);
  const [dropDown, setDropDown] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const Oj5Rr48k = document.querySelector('.Oj5Rr48k');
      const Mh6K7CPp = document.querySelector('.Mh6K7CPp');
      if (window.scrollY > 0) {
        Oj5Rr48k.style.padding = '0.3em';
        Mh6K7CPp.style.padding = '2em 0 .5em 0';
        Mh6K7CPp.style.boxShadow = '0px 5px 12px 0px rgba(0, 0, 0, 0.05)';

      } else {
        Mh6K7CPp.style.padding = '0.5em';
        Mh6K7CPp.style.padding = '2.5em 0 .5em 0';
        Mh6K7CPp.style.boxShadow = '0px 5px 12px 0px rgba(0, 0, 0, 0.03)';
      }
    })
  }, []);

  return (
    <React.Fragment>
      <div className='YETi6p8t'>
        <div className="Oj5Rr48k">
          <div className="jI8b6bJ1">
            <div className="Tn48dgsk">
              <a href={'mailto:sales@yatiglobalsolutions.com'}>sales@yatiglobalsolutions.com</a>
            </div>
            <div className="XAA9e7QE">
              <Link to={'/contact-us'}>Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="Mh6K7CPp">
          <div className="t9gavcRh">
            <Link to={'/'} className="VavQQLs3">
              <img src={Logo} alt="YGS Web Solutions Pvt. Ltd." />
            </Link>
            <div className="KbWQZyT0">
              <div className="KG4CKlOZ">
                <Link className='zFNF5WAa' to={'/'}>Home</Link>
              </div>
              <div className="KG4CKlOZ" onClick={() => { setDropDown(dropDown === 1 ? 0 : 1); }}>
                <Link className='zFNF5WAa' to={'#'}>Software Services
                  <svg className='uyLJBmGR' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round"
                    strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                  </svg>
                </Link>
                <ul className={dropDown === 1 ? 'hxVnyz84 active' : 'hxVnyz84 inactive'}>
                  <div>
                    <DropDownItem text={'Software Development Services'} linkTo={'/software-development-services'} />
                    <DropDownItem text={'Python Development Company'} linkTo={'/hire-python-developers'} />
                    <DropDownItem text={'Dot Net Development Services'} linkTo={'/hire-dot-net-developers'} />
                    <DropDownItem text={'Laravel Development Services'} linkTo={'/hire-laravel-developers'} />
                    <DropDownItem text={'Vue.js Development Company'} linkTo={'/hire-vuejs-developers'} />
                    <DropDownItem text={'Android App Development Company'} linkTo={'/hire-android-developers'} />
                  </div>
                  <div className="bJwPg9BM"></div>
                  <div>
                    <DropDownItem text={'Web Apps Development Services'} linkTo={'/web-app-development-services'} />
                    <DropDownItem text={'Java Development Services'} linkTo={'/hire-java-developers'} />
                    <DropDownItem text={'Django Development Company'} linkTo={'/hire-django-developers'} />
                    <DropDownItem text={'Mean Stack Development Services'} linkTo={'/hire-mean-stack-developers'} />
                    <DropDownItem text={'AI & ML Development Services'} linkTo={'/hire-ai-ml-developers'} />
                  </div>
                  <div className="bJwPg9BM"></div>
                  <div>
                    <DropDownItem text={'PHP Development Company'} linkTo={'/hire-php-developers'} />
                    <DropDownItem text={'Nodejs Development Company'} linkTo={'/hire-nodejs-developers'} />
                    <DropDownItem text={'React Native App Development Services'} linkTo={'/hire-react-native-developers'} />
                    <DropDownItem text={'Codeigniter Development Services'} linkTo={'/hire-codeigniter-developers'} />
                    <DropDownItem text={'Mern Stack Development Services'} linkTo={'/hire-mern-stack-developers'} />
                    <DropDownItem text={'Iphone App Development Company'} linkTo={'/iphone-app-development'} />
                  </div>
                </ul>
              </div>
              <div className="KG4CKlOZ" onClick={() => { setDropDown(dropDown === 2 ? 0 : 2); }}>
                <Link className='zFNF5WAa' to={'#'}>Ecommerce Platforms
                  <svg className='uyLJBmGR' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round"
                    strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                  </svg>
                </Link>
                <ul className={dropDown === 2 ? 'hxVnyz84 active' : 'hxVnyz84 inactive'}>
                  <div>
                    <DropDownItem text={'WooCommerce Design & Development Services'} linkTo={'/woocommerce-design-and-development-services'} />
                    <DropDownItem text={'WordPress eCommerce Services'} linkTo={'/wordpress-design-and-development-services'} />
                    <DropDownItem text={'Drupal Design and Development Services'} linkTo={'/drupal-design-and-development-services'} />
                    <DropDownItem text={'Squarespace eCommerce Services'} linkTo={'/squarespace-design-and-development-services'} />
                    <DropDownItem text={'Magento Design and Development Services'} linkTo={'/magento-design-and-development-services'} />
                    <DropDownItem text={'Joomla eCommerce Services'} linkTo={'/joomla-design-and-development-services'} />
                  </div>
                </ul>
              </div>
              <div className="KG4CKlOZ" onClick={() => { setDropDown(dropDown === 3 ? 0 : 3); }}
              >
                <Link className='zFNF5WAa' to={'#'}>Digital Services
                  <svg className='uyLJBmGR' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round"
                    strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                  </svg>
                </Link>
                <ul className={dropDown === 3 ? 'hxVnyz84 active' : 'hxVnyz84 inactive'}>
                  <div>
                    <DropDownItem text={'Graphic Designing Services'} linkTo={'/graphic-designing-services'} />
                    <DropDownItem text={'Landing Page Design & Development'} linkTo={'/landing-page-design-development-services'} />
                    <DropDownItem text={'Search Engine Optimization Services'} linkTo={'/search-engine-optimization-services'} />
                    <DropDownItem text={'Website Maintenance and Support'} linkTo={'/website-maintenance-and-support-services'} />
                    <DropDownItem text={'Social Media Management Services'} linkTo={'/social-media-management-services'} />
                  </div>
                </ul>
              </div>
              <div className="KG4CKlOZ">
                <Link className='zFNF5WAa' to={'/portfolio'}>Portfolio</Link>
              </div>
            </div>
            <div className="ctMmuWoe">
              <Link to={'/contact-us'}>Free Estimation</Link>
            </div>
          </div>
        </div>
        {props.home ? <LandingBack background={Background} />
          : <OtherPagesLandingBack
            linkText={props.linkText}
            title={props.title}
            background={props.background}
            firstLiText={props.firstLiText}
            secondLiText={props.secondLiText && props.secondLiText}
            thirdLiText={props.thirdLiText && props.thirdLiText}
            fourthLiText={props.fourthLiText && props.fourthLiText}
            linkTo={props.linkTo} bigTitle={props.bigTitle} title2={props.title2} />}
      </div>
      <MobileNavBar />
    </React.Fragment>
  )
};


const MobileNavBar = () => {

  const closeMenu = () => {
    const J6n59Hha = document.querySelector('.J6n59Hha');
    const nAoyiLEs = document.querySelector('.nAoyiLEs');
    J6n59Hha.style.right = '-20em';
    nAoyiLEs.style.opacity = '0';
    nAoyiLEs.style.visibility = 'hidden';
  }
  const openMenu = () => {
    const J6n59Hha = document.querySelector('.J6n59Hha');
    const nAoyiLEs = document.querySelector('.nAoyiLEs');
    J6n59Hha.style.right = '0';
    nAoyiLEs.style.opacity = '1';
    nAoyiLEs.style.visibility = 'visible';
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const GWXaO6W5 = document.querySelector('.GWXaO6W5');
      const qSdEeOSd = document.querySelector('.qSdEeOSd');
      if (window.scrollY > 0) {
        GWXaO6W5.style.padding = 0;
        qSdEeOSd.style.top = '1.75em';
      } else {
        GWXaO6W5.style.padding = '0.2em';
        qSdEeOSd.style.top = '1.8em';
      }
    })
  }, []);


  return (
    <div className='qSdEeOSd'>
      <div className="GWXaO6W5">
        <Link to={'/'} className="dMIhBOx5">
          <img src={Logo} alt="YGS Web Solutions Pvt. Ltd." />
        </Link>
        <button type='button' className='x7VxrbFn' onClick={openMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className='Okxxu9qt' viewBox="0 0 24 24">
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        </button>
        <div className="nAoyiLEs"></div>
        <div className="J6n59Hha">
          <button type='button' className='PcFgotQv' onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
            </svg>
          </button>
          <div className="Q0oujjVX">
            <div className="SkCAILdK">
              <Link to={'/'} className='oR1Ftejt'>Home</Link>
            </div>
            <div className="SkCAILdK">
              <Link to={'#'} className='oR1Ftejt'>Software Services
                <svg className='uyLJBmGR' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round"
                  strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                </svg>
              </Link>
              <ul className='NEwMnxU6'>
                <div>
                  <MobileDropDownItem text={'Software Development Services'} linkTo={'/software-development-services'} />
                  <MobileDropDownItem text={'Python Development Company'} linkTo={'/hire-python-developers'} />
                  <MobileDropDownItem text={'Dot Net Development Services'} linkTo={'/hire-dot-net-developers'} />
                  <MobileDropDownItem text={'Laravel Development Services'} linkTo={'/hire-laravel-developers'} />
                  <MobileDropDownItem text={'Vue.js Development Company'} linkTo={'/hire-vuejs-developers'} />
                  <MobileDropDownItem text={'Android App Development Company'} linkTo={'/hire-android-developers'} />
                </div>
                <div className="bJwPg9BM"></div>
                <div>
                  <MobileDropDownItem text={'Web Apps Development Services'} linkTo={'/web-app-development-services'} />
                  <MobileDropDownItem text={'Java Development Services'} linkTo={'/hire-java-developers'} />
                  <MobileDropDownItem text={'Django Development Company'} linkTo={'/hire-django-developers'} />
                  <MobileDropDownItem text={'Mean Stack Development Services'} linkTo={'/hire-mean-stack-developers'} />
                  <MobileDropDownItem text={'AI & ML Development Services'} linkTo={'/hire-ai-ml-developers'} />
                </div>
                <div className="bJwPg9BM"></div>
                <div>
                  <MobileDropDownItem text={'PHP Development Company'} linkTo={'/hire-php-developers'} />
                  <MobileDropDownItem text={'Nodejs Development Company'} linkTo={'/hire-nodejs-developers'} />
                  <MobileDropDownItem text={'React Native App Development Services'} linkTo={'/hire-react-native-developers'} />
                  <MobileDropDownItem text={'Codeigniter Development Services'} linkTo={'/hire-codeigniter-developers'} />
                  <MobileDropDownItem text={'Mern Stack Development Services'} linkTo={'/hire-mern-stack-developers'} />
                  <MobileDropDownItem text={'Iphone App Development Company'} linkTo={'/iphone-app-development'} />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const MobileDropDownItem = ({ text, linkTo }) => {
  return (
    <li className='RtIjOFQY'>
      <Link className='vxRuWMBa' to={linkTo}>{text}</Link>
    </li>
  )
}

const DropDownItem = ({ text, linkTo }) => {
  return (
    <li className='i0KaAhKQ'>
      <Link className='TPzOS7mY' to={linkTo}>{text}</Link>
    </li>
  )
}

const LandingBack = (props) => {
  useEffect(() => {
    const Qu4PZHIo = document.querySelector('.Qu4PZHIo');
    Qu4PZHIo.style.backgroundImage = `url('${props.background}')`;
  }, [])

  return (
    <div className="Qu4PZHIo">
      <div className='GifUwii9'>
        <div className='kSdyeCb6'>
          <h1>Affordable<span> Software <br />
            Development</span> & <span>Remote <br />
              Staffing Agency</span> In NYC <br />
            & Las Vegas</h1>
          <h2>Serving Nationwide Brands</h2>
          <Link to={'/contact-us'}>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

const OtherPagesLandingBack = ({ title, firstLiText, secondLiText, thirdLiText, fourthLiText, linkTo, linkText, background, bigTitle, title2 }) => {
  useEffect(() => {
    const slT7vST5 = document.querySelector('.slT7vST5');
    slT7vST5.style.backgroundImage = `url('${background}')`;
  }, [])

  return (
    <div className="slT7vST5">
      <div className='GifUwii9'>
        <div className='B7VAbVeK'>
          <h1>{title}</h1>
          {bigTitle ? (<h2>{title2}</h2>) : <>
            <li><p>{firstLiText}</p></li>
            <li><p>{secondLiText ? secondLiText : ('100+ Successful Software Projects')}</p></li>
            <li><p>{thirdLiText ? thirdLiText : ('97 % Customer Satisfaction')}</p></li>
            <li><p>{fourthLiText ? fourthLiText : ('12 years of experience in Software Development')}</p></li>
          </>}
          <Link to={'/contact-us'}>{linkText}</Link>
        </div>
      </div>
    </div>
  )
}