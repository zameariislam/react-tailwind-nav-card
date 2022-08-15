import React, { useState } from 'react';
import Link from '../Link/Link';
import {  MenuIcon, XIcon } from '@heroicons/react/solid'



const Navbar = () => {
    const[open,setOpen]=useState(false)

    const routes=[{id:1,name:'Home',link:'/'},
    {id:2,name:'Shop',link:'/shop'},
    {id:3,name:'Deals',link:'/deals'},
    {id:4,name:'Coupons',link:'/coupons'},
    {id:5,name:'Contact',link:'/contact'}
]
    return (

     
            
             <nav className='bg-indigo-500'  >
                <div className='md:hidden' onClick={()=>setOpen(!open)}>
                    {
                        open?<XIcon  className='h-8 w-6 mb-3' />: <MenuIcon  className='h-8  w-6 md:hidden'/>
                    }
               
                </div>
           

            <ul className={`  md:flex md:static md:justify-center absolute duration-500 bg-indigo-500 w-full  ${open ? 'top-6':'top-[-190px]'} ` }>
                {
                  routes.map((route)=><Link key={route.id} route={route}/>)  
                }
            </ul>

           

        
        </nav>
       
       
       
        
    );
};

export default Navbar;