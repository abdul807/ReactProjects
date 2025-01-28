import React from 'react'
import Promoheading from './Promoheading'

const Promo = () => {
    const data = {
        "heading": "Get 20% Off on Your First Order",
        "subheading": "Use promo code: aljfoaie at checkout to get your discount",   
    }
  return (
    <div>
        <Promoheading
         heading={data.heading} 
         subheading={data.subheading} />
      
    </div>
  )
}

export default Promo
