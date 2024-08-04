import React from 'react'
import ProductImage from '../../assets/product-image.png'
import pyramidImage from '../../assets/pyramid.png'
import tubeImage from '../../assets/tube.png'

function ProductionShowcase() {
  return (
    <>
     <section className='bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip'>
        <div className="container">
            <div className='section-heading'>
            <div className="flex justify-center">
            <div className='tag'>Boost your productivity</div>
            </div>
            <h2 className='section-title mt-5'>A more effective way to track progress</h2>
            <p className='section-description mt-5'>
                Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with this template.
            </p>
            </div>
            <div className="relative">
            <img src={ProductImage} alt="" className='mt-10'/>

            <img src={pyramidImage} alt="" className='hidden md:block absolute -right-36 -top-32' height={262} width={262}/>

            <img src={tubeImage} alt="" height={248} width={248} className='hidden md:block absolute bottom-24 -left-36' />
        </div>
        </div>
     </section>
    </>
  )
}

export default ProductionShowcase