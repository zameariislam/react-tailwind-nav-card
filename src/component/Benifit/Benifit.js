import React from 'react';
import {  CheckCircleIcon } from '@heroicons/react/solid'


const Benifit = (props) => {
  const {benifit}=props

    return (
        <p  className=' flex items-center'>
                    <CheckCircleIcon className='w-4 h-4 text-green-500 mr-2'></CheckCircleIcon>
                    {benifit}
                </p>
    );
};

export default Benifit;