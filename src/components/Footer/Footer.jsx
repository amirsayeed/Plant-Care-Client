import React from 'react';
import plantLogo from '../../assets/logo.png' 
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <>
             <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-16">
            <aside>
                <img className='w-12 h-12 object-cover' src={plantLogo} alt="subscription"/>
                <h2 className='text-2xl font-bold'>
                    Plant Care
                </h2>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                 <div className="grid grid-flow-col gap-6">
                        <a href="https://www.facebook.com/" target="_blank">
                        <BsFacebook size={25} />
                        </a>
                        <a href="https://x.com/" target="_blank">
                        <FaSquareXTwitter size={25} />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                        <FaLinkedin size={25} />
                        </a>
                        <a href="https://www.youtube.com/" target="_blank">
                        <FaYoutube size={25} />
                        </a>
                    </div>
            </nav>
        </footer>
        <footer className="footer sm:footer-horizontal border-t border-dashed footer-center bg-neutral text-neutral-content p-5">
        <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Plant Care</p>
        </aside>
        </footer>
        </>
    );
};

export default Footer;