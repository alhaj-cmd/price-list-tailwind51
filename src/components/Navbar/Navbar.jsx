import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/'
        },
        {
          id: 2,
          name: 'About Us',
          path: '/about'
        },
        {
          id: 3,
          name: 'Contact Us',
          path: '/contact'
        },
        {
          id: 4,
          name: 'Products',
          path: '/products'
        },
        {
          id: 5,
          name: 'Blog',
          path: '/blog'
        }
      ];
      
    return (
        <nav>
            <div onClick={()=> setOpen(!open)} className='md:hidden'>
                <span>{open === true ?  <Bars3Icon className="h-6 w-6 text-purple-600" />:  <XMarkIcon className="h-6 w-6 text-purple-600" />}</span>
              
               </div>
            <ul className={`md:flex absolute md:static bg-purple-400 duration-500 ${open ? 'top-36':'-top-36'}`}>
                {
                    routes.map(route => <Link
                    route={route}
                    key={route.id}
                    ></Link>)
                }
            </ul>
            
        </nav>
    );
};

export default Navbar;