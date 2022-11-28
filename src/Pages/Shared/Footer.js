import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/mobile-app (1).png'

const Footer = () => {
    return (
      <footer className="footer grid grid-cols-2 md:grid-cols-4 items-center gap-5 p-10 bg-gradient-to-r from-slate-100 to-slate-300 text-gray-900">
        <div>
          <img className="w-16" src={img} alt="" />
          <p className="text-xl font-bold">
            <span className="text-error">Oldie</span>{" "}
            <span className="text-secondary">Mobile</span>
          </p>
          <p>Providing reliable service since 2022</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
        </div>
      </footer>
    );
};

export default Footer;