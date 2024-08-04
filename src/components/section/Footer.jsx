import React from 'react'
import logo from '../../assets/logosaas.png'
import SocialX from "../../assets/social-x.svg";
import socialInsta from "../../assets/social-insta.svg";
import socialLinkedin from "../../assets/social-linkedin.svg";
import socialPin from "../../assets/social-pin.svg";
import socialYoutube from "../../assets/social-youtube.svg";

function Footer() {
  return (
    <>
    <footer className='bg-black text-[#bcbcbc] text-sm py-10 text-center'>
            <div className="container">
                <div className="inline-flex relative before:content-[''] before:h-full before:w-full before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#f87bff,#fb93cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
                <img src={logo} alt="" height={40} className='relative' />
                </div>
                <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Customers</a>
                    <a href="#">Pricing</a>
                    <a href="#">Help</a>
                    <a href="#">Careers</a>
                </nav>
                <div className='flex justify-center gap-6 mt-6'>
                    <img src={SocialX} alt="" />
                    <img src={socialInsta} alt="" />
                    <img src={socialLinkedin} alt="" />
                    <img src={socialPin} alt="" />
                    <img src={socialYoutube} alt="" />
                </div>
                <p className='mt-6'>&copy; 2024 Your Company, Inc, All rights reserved.</p>
            </div>
    </footer>
    </>
  )
}

export default Footer