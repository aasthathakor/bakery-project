import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaPinterestSquare } from "react-icons/fa";

const HearderTop = () => {
  return (

    <div
      style={{
        backgroundColor: "#8b4513",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >

    <div className='border-b border-white-200 hidden sm:block'>
        <div className='container py-4'>
            <div className='flex justify-between items-center'>
                <div className='hidden lg:flex gap-1'>

                    <div className='header_top__icon_wrapper'>
                    <FaFacebookSquare />
                    </div>

                    <div className='header_top__icon_wrapper'>
                    <FaInstagramSquare />
                    </div>

                    <div className='header_top__icon_wrapper'>
                    <FaTwitterSquare />
                    </div>

                    <div className='header_top__icon_wrapper'>
                    <FaPinterestSquare />
                    </div>

                </div>


                    <div className='text-white text-[20px]'>
                        <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - ₹500
                    </div>

                    <div className='flex gap-4'>
                        <select className='text-white-500 text-[15px] w-[80px]'
                        name='currency'
                        id='currency'>
                            
                            <option value="INR ₹">INR ₹</option>
                            <option value="USD $">USD $</option>
                            <option value="EUR €">EUR €</option>
                            <option value="GBP £">GBP £</option>
                        </select>

                        <select className='text-white-500 text-[15px] w-[80px]'
                        name='laguages'
                        id='laguages'>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                            <option value="Franch">Franch</option>
                        </select>
                    </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default HearderTop;