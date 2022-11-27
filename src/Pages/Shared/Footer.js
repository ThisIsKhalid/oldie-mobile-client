import React from 'react';
import img from '../../Assets/mobile-app (1).png'

const Footer = () => {
    return (
      <footer className="footer p-10 bg-gradient-to-r from-slate-100 to-slate-300 text-gray-900">
        <div>
          <img className='w-16' src={img} alt="" />
          <p className="text-xl font-bold">
            <span className="text-error">Oldie</span>{" "}
            <span className="text-secondary">Mobile</span>
          </p>
          <p>Providing reliable service since 2022</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </div>
      </footer>
    );
};

export default Footer;