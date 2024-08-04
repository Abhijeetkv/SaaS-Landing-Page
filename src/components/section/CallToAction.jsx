import React from 'react'
import ArrowRight from '../../assets/arrow-right.svg'
import starImage from '../../assets/star.png'
import springImage from '../../assets/spring.png'

function CallToAction() {
  return (
    <>
        <section className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'>
            <div className="container">
                <div className='section-heading relative'>
                <h2 className='section-title'>Sign up for free today</h2>
                <p className='section-description mt-5'>
                    Celebrate the joy of accomplishment with an app designed to track your progress and help you achieve your goals.
                </p>
                <img src={starImage} alt="" width={360} className='absolute -left-[350px] -top-[137px] ' />
                <img src={springImage} alt="" width={360} className='absolute -right-[331px] -top-[19px]'/>
                </div>
                <div className='flex gap-2 mt-10 justify-center'>
                    <button className='btn btn-primary'>Get for free</button>
                    <button className='btn btn-text gap-1'>
                        <span>Learn more</span>
                        <img src={ArrowRight} alt="" className='h-5 w-5'/>
                    </button>
                </div>
                </div>

        </section>
    </>
  )
}

export default CallToAction