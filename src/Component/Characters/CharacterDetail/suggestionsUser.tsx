
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchDataDetailLocationUser } from '../../../services/api.services';
import { BsBookmarkHeartFill } from "react-icons/bs";
import { current } from '@reduxjs/toolkit';

interface CategoryProps {
  ibc: string;
  ibs: string;
  idb: string;
}
const Suggestions: React.FC<CategoryProps> = ({ idb , ibc , ibs }) => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchDataFromApi = async (id: any) => {
      try {
        const jsonData = await fetchDataDetailLocationUser(ibc);
        setData(jsonData);
      } catch (error: any) {
        setError(error.message || 'Bir hata oluştu.');
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchDataFromApi(ibc);
  }, [ibc]);
  
  if (isLoading) {
    return <div>Yükleniyor...</div>;
  }
  

  if (error) {
    return <div>Hata: {error}</div>;
  }
    

  function filterItemsByStatus(items: string | any[], status: string) {
    const filteredItems = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].status === status) {
        filteredItems.push(items[i]);
      }
    }
  
    return filteredItems;
  }

  const status = ibs 
  const filteredItems = filterItemsByStatus(data, status);
  let updatedJsonData = [];
  for (let i = 0; i < filteredItems.length; i++) {
    const currentItem = filteredItems[i];
    
  
    if (currentItem.id != idb) {
        updatedJsonData.push(currentItem);
       
    }
}

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 h-auto gap-x-10 gap-y-10">
   
     {updatedJsonData.length === 0 ? (
      <div className='text-white poppins-bold text-lg'>Mevcut karakter bulunamadı.</div>
      ) : (
        updatedJsonData.map((item: any, index: any) => (
        <Link to={`/character/detail/${item.id}`}>
         <div className='flex w-full md:min-h-44 md:max-h-44  bg-zinc-800 rounded-l-xs md:rounded-r-2xl md:rounded-l-2xl md:border md:border-gray-600 md:hover:border-violet-400'>
           
           <div className='sm:w-96 lg:w-2/5 h-auto '>
            <img className='w-full h-full object-cover rounded-l-xs md:rounded-l-2xl' src={item.image}/>
           </div>
           <div className='sm:w-4/5 md:w-3/5 lg:w-3/5  flex flex-col px-4 py-4 '>
            <div className='flex flex-col gap-y-4'>
              <div className='flex justify-between'>
              <span className='poppins-medium text-white truncate w-40 h-6 '>{item.name}</span>
              <button className='items-end flex '>
              <div className="items-center sm:hover:bg-black md:hover:bg-black  lg:hover:bg-black xl:hover:bg-black 2xl:hover:bg-black  sm:bg-zinc-800 md:bg-violet-500 lg:bg-violet-500 hover:bg-violet-500 flex justify-center top-5 bg-opacity-80 right-5 sm:right-3 sm:top-3 md:right-3 md:top-3 lg:top-3 lg:right-3 xl:top-3 xl:right-3 2xl:right-3 2xl:top-3   rounded-lg bg-zinc-800 text-gray-200 md:w-8 md:h-8 lg:h-10 lg:w-10 xl:w-10 xl:h-10 w-10 h-10 text-center">
              <BsBookmarkHeartFill className='' />
              </div>
              </button>
              </div>
              <div className='flex gap-x-2 w-full items-center'>
                <span className={`rounded-full w-3 h-3 ${item.status === 'Alive' ? 'bg-green-400' : item.status === 'Dead' ? 'bg-red-400' : 'bg-black'}`}></span>
                <span className='poppins-medium text-white text-xs'>{item.status}</span>
              </div>
              <span className='poppins-medium text-white text-xs truncate w-60 md:w-32 h-6'>{item.location.name}</span>
              <span className='poppins-medium text-white text-xs truncate w-60 md:w-32 h-6'>{item.species}</span>
              </div>
           </div>
           
         </div>
         </Link>
       ))
       )}

 
   </div>
  );
};

export default Suggestions;
