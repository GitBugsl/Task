
import React from 'react';
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Headers: React.FC = () => {
  return (
    <div className='w-full h-12 px-10 md:h-12 lg:h-12 xl:h-12 2xl:h-14 bg-zinc-800 rounded-xs mb-20'>
       <div className='flex items-center container mx-auto  h-full justify-center'>
           <div className='flex gap-x-4 mt-12 '>
               <Link to={'/'}>
               <div className='w-60'><img className='w-full h-full object-cover' draggable='false' src='/Rick.png'/></div>
               </Link>
           </div>

       </div>
    </div>
  );
};

export default Headers;
