import React from 'react'
import { NavBar } from './NavBar'
import softwareBackground from '../Images/homepage-banner13.png'

export const Contact = () => {
  return (
    <React.Fragment>
      <NavBar background={softwareBackground} bigTitle={true} linkText={'Contact Us'}
        title={'Let\'s get connected'} title2={'With top Software Engineer experts, let us help to keep you updated with the latest technology and innovation in the modern era.'} linkTo={'#'} />
      {/* <div className="sosst9GI">
        <div className="RumNnMPb">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 3v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981zm-5 6h-14v-1h14v1zm0 2h-14v1h14v-1zm-6 3h-8v1h8v-1z" /></svg>
            <h2>Chat With Us</h2>
          </a>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z" /></svg>
            <h2>Call Us</h2>
          </a>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg>
            <h2>Email Us</h2>
          </a>
        </div>
      </div> */}
      <div className="jAG8EjQ8">
        <div className="SnJ6A7WU">
          <div className="wyxquFth ">
            <div className="izhZU0d0 ">
              <h2>India Office</h2>
            </div>
            <div className="pLFKe2uT ">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 14c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
                </svg>
                <p>11b Raj vihar nawada mathura (281001)</p>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z" />
                </svg>
                <p>+91 821-802-5546</p>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
                <p>sales@yatiglobalsolutions.com</p>
              </a>
            </div>
          </div>
          <form className="HyTDTpQD ">
            <div className="izhZU0d0 ">
              <h2>First tell us a bit about yourself</h2>
            </div>
            <div className="QulXcZ02 ">
              <label>
                <input type="text" placeholder='First name' required />
              </label>
              <label>
                <input type="text" placeholder='Last name' required />
              </label>
              <label>
                <input type="text" placeholder='Email' required />
              </label>
              <label>
                <input type="text" placeholder='Phone' required />
              </label>
              <label>
                <input type="text" placeholder='Company' required />
              </label>
              <label>
                <input type="text" placeholder='Current Website' required />
              </label>
            </div>
            <div className="izhZU0d0 ">
              <h2>Now let us know what you're looking for</h2>
            </div>
            <div className="TSvp0ekO ">
              <label>
                <input type="checkbox" />
                <span>Website Design</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Graphic Design</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>App Development</span>
              </label>
              <label>
                <input type="checkbox" />
                <span>Other</span>
              </label>
            </div>
            <div className="v5AL5jy2 ">
              <label>
                <textarea name="" placeholder='Describe Your Project' id="" cols="30" rows="10"></textarea>
              </label>
              <label>
                <select name="" id="">
                  <option value="Not Entered" defaultValue disabled>what's Your Budget?</option>
                  <option value="">Less Then $2,000</option>
                  <option value="">$2,000 - $5,000</option>
                  <option value="">$5,000 - $10,000</option>
                  <option value="">$10,000 - $15,000</option>
                  <option value="">$15,000 - $20,000</option>
                  <option value="">$20,000 - $25,000</option>
                  <option value="">$25,000+</option>
                </select>
              </label>
              <label>
                <input type="text" placeholder="What's Your Timeline?" required />
              </label>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
      <div className="">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.8362986807006!2d77.68525607491362!3d27.443212037092696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397377145e471819%3A0x30245dee36f6df98!2sYati%20Global%20Solutions!5e0!3m2!1sen!2sin!4v1687685703025!5m2!1sen!2sin"
          width="600"
          height="350"
          style={{ border: 0, width: 100 + '%' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </React.Fragment>
  )
}
