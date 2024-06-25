import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FancyTitle } from './FancyTitle'
import java from '../Images/java.png'
import android from '../Images/Android.png'
import ios from '../Images/ios.png'
import vue from '../Images/vue.png'
import laravel from '../Images/laravel.png'
import codeignitor from '../Images/codeignitor.png'
import django from '../Images/django.png'
import php from '../Images/php.png'
import nodejs from '../Images/nodejs.png'
import python from '../Images/python.png'
import reactnative from '../Images/react-native.png'
import squarespace from '../Images/squarespace.svg'
import woocommerce from '../Images/woocommerce.svg'
import wordpress from '../Images/wordpress.svg'
import drupal from '../Images/drupal.svg'
import magneto from '../Images/magento.svg'
import joomla from '../Images/joomla.svg'
import artboard1 from '../Images/artboard1.svg'
import artboard2 from '../Images/artboard2.svg'
import artboard3 from '../Images/artboard3.svg'
import artboard4 from '../Images/artboard4.svg'
import artboard5 from '../Images/artboard5.svg'
import artboard6 from '../Images/artboard6.svg'
import artboard7 from '../Images/artboard7.svg'
import artboard8 from '../Images/artboard8.svg'
import customerTntraction from '../Images/customer-interaction.png';
import inhoser from '../Images/inhoser.png';
import digitalapps from '../Images/Digital-Apps.png';
import backoffice from '../Images/backoffice.png';
import processbg from '../Images/process-bg.webp';
import telenor from '../Images/telenor.png'
import wix from '../Images/wix.png'
import paypal from '../Images/paypal.png'
import makerson from '../Images/maker&son.png'
import phl from '../Images/phl.png'
import kerusso from '../Images/kerusso.png'
import apeto from '../Images/apteo.png'
import satya from '../Images/satya.png'
import ettvi from '../Images/full-final-logo.png'
import htmlpro from '../Images/htmlpro.png'
import ecom from '../Images/ecom.png'
import ecommercepro from '../Images/ecommercepro.png'

export const PlatFormsAvailable = () => {
  return (
    <div className='CoW1Ixhr'>
      <FancyTitle TitleOne={'HIRE SOFTWARE DEVELOPMENT'} TitleTwo={'EXPERTS'} TitleThree={'SOFTWARE PRO EXPERTISE'} SectionStyle={true} />
      <div className="txbmWyU6">
        <Platform image={java} title={'Java Experts'} />
        <Platform image={android} title={'Android Experts'} />
        <Platform image={ios} title={'iOS Experts'} />
        <Platform image={vue} title={'Vue.JS'} />
        <Platform image={laravel} title={'Laravel Experts'} />
        <Platform image={codeignitor} title={'CodeIgnitor Experts'} />
        <Platform image={django} title={'Django Experts'} />
        <Platform image={php} title={'PHP Experts'} />
        <Platform image={nodejs} title={'Node.js Experts'} />
        <Platform image={python} title={'Python Experts'} />
        <Platform image={reactnative} title={'React Native Experts'} />
      </div>
    </div>
  )
}

export const EcomPlatFormsAvailable = () => {
  return (
    <div className='CoW1Ixhr jWvGRI3s'>
      <FancyTitle TitleOne={'HIRE E-COMMERCE'} TitleTwo={'EXPERTS'} TitleThree={'SOFTWARE PRO EXPERTISE'} SectionStyle={true} />
      <div className="txbmWyU6">
        <Platform image={squarespace} title={'Squarespace Experts'} />
        <Platform image={woocommerce} title={'WooCommerce Experts'} />
        <Platform image={wordpress} title={'WordPress Experts'} />
        <Platform image={drupal} title={'Drupal Experts'} />
        <Platform image={magneto} title={'Magneto Experts'} />
        <Platform image={joomla} title={'Joomla Experts'} />
      </div>
    </div>
  )
}

export const ShopifyPlatFormsAvailable = () => {
  return (
    <div className='CoW1Ixhr'>
      <FancyTitle TitleOne={'HIRE SHOPIFY PROFESSIONAL'} TitleTwo={'EXPERTS'} TitleThree={'SOFTWARE PRO EXPERTISE'} SectionStyle={true} />
      <div className="txbmWyU6">
        <Platform image={artboard1} title={'Shopify Back Office & Customer Support Consultants'} />
        <Platform image={artboard2} title={'Shopify App Development Experts'} />
        <Platform image={artboard3} title={'Shopify Experts'} />
        <Platform image={artboard4} title={'Shopify Maintenance Experts'} />
        <Platform image={artboard5} title={'Full Time Shopify Developers'} />
        <Platform image={artboard6} title={'Shopify Web Design & Development Experts'} />
        <Platform image={artboard7} title={'Shopify E-commerce Development Experts'} />
        <Platform image={artboard8} title={'Shopify Ads Marketing Experts'} />
        <Platform image={artboard8} title={'Shopify Marketing Experts'} />
        <Platform image={artboard8} title={'Shopify Inventory Management Experts'} />
        <Platform image={artboard8} title={'Shopify SEO Experts'} />
        <Platform image={artboard8} title={'Shopify Plus Development Experts'} />
      </div>
    </div>
  )
}

export const BusinessPlatFormsAvailable = () => {
  return (
    <div className='CoW1Ixhr jWvGRI3s'>
      <FancyTitle TitleOne={'BUSINESS PROCESS'} TitleTwo={'OUTSOURCING'} TitleThree={'SOFTWARE PRO EXPERTISE'} SectionStyle={true} />
      <div className="M7jW17xi">
        <h2>Helping Businesses to Generate More Revenue!</h2>
        <div className="txbmWyU6 k3tqbWV0">
          <Platform image={customerTntraction} title={'Customer Interaction Services'} />
          <Platform image={inhoser} title={'E-Commerce Management'} />
          <Platform image={digitalapps} title={'Digital Apps & Service Support'} />
          <Platform image={backoffice} title={'Back Office Management'} />
        </div>
        <img src={processbg} alt="img" className='OyvHiWfR' />
      </div>
    </div>
  )
}

export const PartnersPlatFormsAvailable = () => {
  return (
    <div className='CoW1Ixhr jWvGRI3s'>
      <FancyTitle TitleOne={'CLIENTS AND'} TitleTwo={'PARTNERS'} SectionStyle={true} />
      <div className="txbmWyU6 lSNrs7G1">
        <Platform image={telenor} />
        <Platform image={wix} />
        <Platform image={paypal} />
        <Platform image={makerson} />
        <Platform image={phl} />
        <Platform image={kerusso} />
        <Platform image={apeto} />
        <Platform image={satya} />
        <Platform image={ettvi} />
      </div>
    </div>
  )
}

export const TopPlatFormsAvailable = () => {
  return (
    <div className='CoW1Ixhr'>
      <FancyTitle TitleOne={'SOFTWARE PRO IS A PROJECT OF'} TitleTwo={'TOP GLOBAL DIGITAL BRANDS'} SectionStyle={true} />
      <div className="M7jW17xi">
        <div className="txbmWyU6 lSNrs7G1">
          <Platform image={ettvi} />
          <Platform image={htmlpro} />
          <Platform image={ecom} />
          <Platform image={ecommercepro} />
        </div>
        <div className='OyvHiWfR'>
          <h1>Trusted by 5000+ Customers Globally</h1>
        </div>
      </div>
    </div>
  )
}

const Platform = (props) => {
  return (
    <Link to={'#'} className="H3zTkvGX">
      <div className="RNdJUW82">
        <img src={props.image} alt="img" />
      </div>
      <h3>{props.title}</h3>
    </Link>
  )
}