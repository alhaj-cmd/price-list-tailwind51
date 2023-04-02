import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-green-100 mt-4 rounded-md p-4'>
            <h3 className='font-semibold text-5xl text-purple-400'>{price.price}
            <span className='text-2xl'>/mon</span></h3>
            <h4 className='font-bold'>{price.name}</h4>
           {
             price.features.map((feature, idx) => <Feature
             key={idx}
             feature={feature}
             ></Feature>)
           }
        </div>
    );
};

export default PriceCard;