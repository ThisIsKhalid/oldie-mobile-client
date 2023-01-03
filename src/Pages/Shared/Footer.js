import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="footer grid grid-cols-2 md:grid-cols-4 items-center gap-5 p-10 bg-slate-100 text-gray-900">
        <div>
          <div>
            <Link to="/">
              <div className="flex items-center border-2 border-black p-1 rounded my-1">
                <h1 className="bg-black text-white font-bold py-1 px-3 text-md tracking-widest rounded-l">
                  TECH
                </h1>
                <h1 className="text-black font-bold py-1 px-3 text-md tracking-widest">
                  STORE
                </h1>
              </div>
            </Link>
          </div>
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