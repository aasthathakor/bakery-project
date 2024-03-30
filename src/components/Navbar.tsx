import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish '>
                <Link className='navbar__link relative' href="#">HOME</Link>
                <Link className='navbar__link relative' href="#">PRODUCTS</Link>
                <Link className='navbar__link relative' href='#'>SPECIAL CAKE</Link>
                <Link className='navbar__link relative' href="#">BREADS</Link>
                <Link className='navbar__link relative' href="#">COOKIES</Link>
                <Link className='navbar__link relative' href="#">CONTECT US</Link>
                <Link className='navbar__link relative' href="#">ABOUT US</Link>
    

            </div>
        </div>
    </div>
  );
};
export default Navbar;
