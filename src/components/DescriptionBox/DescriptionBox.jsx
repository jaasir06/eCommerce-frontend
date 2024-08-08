import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>E-commerce, the buying and selling of goods and services online, has revolutionized the global marketplace. With the convenience of shopping from anywhere at any time, it has drastically altered consumer behavior. Businesses benefit from lower operating costs and a broader customer base, while consumers enjoy a wider selection, competitive pricing, and the convenience of home delivery.</p>
            <p>The growth of e-commerce has spurred advancements in technology and logistics, enhancing the overall shopping experience. Secure payment gateways, personalized marketing, and efficient supply chain management have become integral to e-commerce success. As digital platforms continue to evolve, the industry is set to expand further, offering new opportunities for innovation and transforming the future of retail.</p>
        </div>
    </div>
  )
}

export default DescriptionBox