import React from 'react'
import acmeLogo from '../../assets/logo-acme.png'
import quantumLogo from '../../assets/logo-quantum.png'
import echoLogo from '../../assets/logo-echo.png'
import celestialLogo from '../../assets/logo-celestial.png'
import pulseLogo from '../../assets/logo-pulse.png'
import apexLogo from '../../assets/logo-apex.png'

function LogoTicker() {
  return (
    <>
    <div className='py-8 md:py-12 bg-white'>
     <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
        <div className='flex gap-14 flex-none'>
            <img src={acmeLogo} alt="" className='logo-ticker-image'/>
            <img src={quantumLogo} alt="" className='logo-ticker-image'/>
            <img src={echoLogo} alt="" className='logo-ticker-image'/>
            <img src={celestialLogo} alt="" className='logo-ticker-image'/>
            <img src={pulseLogo} alt="" className='logo-ticker-image'/>
            <img src={apexLogo} alt="" className='logo-ticker-image'/>
        </div>
        </div>
     </div>
     </div>
    </>
  )
}

export default LogoTicker