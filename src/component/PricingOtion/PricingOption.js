import React from 'react';

import Benifit from '../Benifit/Benifit';

const PricingOption = (props) => {
    const{name,price,benifits}=props.option
  
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h1 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h1>
            <p>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/month</span>
            </p>
            <div>
                
                {
                    benifits.map((benifit)=><Benifit benifit={benifit}></Benifit>)
                }


               

            </div>
            
        </div>
    );
};

export default PricingOption;
