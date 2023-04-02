import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-green-100 mt-4 rounded-md p-4 flex flex-col'>
            <h3 className='font-semibold text-5xl text-purple-400'>{price.price}
            <span className='text-2xl'>/mon</span></h3>
            <h4 className='font-bold'>{price.name}</h4>
           {
             price.features.map((feature, idx) => <Feature
             key={idx}
             feature={feature}
             ></Feature>)
           }
           <button className='rounded-md w-full py-2 mt-auto text-white hover:bg-cyan-300 bg-purple-600'>See More</button>
        </div>
    );
};

export default PriceCard;