import React from 'react';

const Link = (props) => {
    const{name,link}=props.route

    return (

        <li className='p-2'><a href={link}>{name}</a></li>
        
    );
};

export default Link;