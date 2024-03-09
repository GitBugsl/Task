import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Favorite from './Characters/Favorite';
import { fetchDataFavorite } from '../services/api.services';
import Header from './Header/index';
import ButtonFavorite from './Characters/ButtonFavorite';
import { useAppSelector } from '../store/store';

interface LocationProps {
  ids: string;
}

const Favoriteh: React.FC<LocationProps> = ({ ids }) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const favorite = useAppSelector((state) => state.favorite.favorites);
  const datas = favorite.map((item) => item.id);

  useEffect(() => {
    const fetchDataFromApi = async (datas: any) => {
      try {
        const jsonData = await fetchDataFavorite(datas);
        let dataArray = Array.isArray(jsonData) ? jsonData : [jsonData];
        setData(dataArray);
      } catch (error:any) {
        setError(error.message || 'Bir hata oluştu.'); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchDataFromApi(datas);
  }, []);


    const removeFromFavorites = (id: string) => {
        const updatedFavorites = data.filter((item: { id: string; }) => item.id !== id);
        setData(updatedFavorites);
      };


  if (isLoading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  
  console.log(data)

  return (
    <>
      <div className='h-auto min-h-screen w-full gap-y-0 flex flex-col bg-zinc-900'>
        <Header />
        <div className='container flex items-center justify-center flex-col mx-auto gap-y-20  w-full h-auto'>
          <Favorite />
          <div className='container flex items-center justify-center flex-col mx-auto gap-y-20  w-full h-auto'>
            <div className='w-full flex items-start h-10 justify-center mt-24'><span className='font-bebas text-white text-6xl md:text-7xl lg:text-9xl'>FAVORİTE CHARACTERS</span></div>
          
  {favorite.length > 0 ? (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 p-4 md:pl-2 xl:p-20">
      {data.map((item: any, index: number) => (
        <div key={index} className="md:gap-x-14 lg:gap-x-14 md:w-[30wh] md:min-w-[30wh] md:max-w-[30wh] lg:w-[40wh] lg:max-w-[40wh] xl:w-[40wh] xl:max-w-[40wh] 2xl:w-[40wh]  bg-zinc-800  rounded-xs flex flex-col sm:flex-col md:flex-row  transform transition duration-500 hover:scale-105">
          <div className=" sm:w-full md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 px-4 py-4 h-full">
            <div className='w-full h-full md:w-64 h-58 '>
              <a className='w-full ' href="#">
                <img className="rounded-md w-full h-full  object-cover" src={item.image} loading="lazy" />
              </a>
            </div>
            <button onClick={() => removeFromFavorites(item.id)}>
              <ButtonFavorite fid={item.id} />
            </button>
          </div>
          <div className="px-4 py-4 md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5">
            <div className='flex flex-col'>
              <div className='w-full flex flex-col gap-y-5'>
                <Link to={`/character/detail/${item.id}`}>
                  <div className='md:w-full '>
                    <h5 className="text-xl w-60 min-w-60  text-overflow font-semibold poppins-bold  tracking-tight hover:text-violet-500 dark:hover:text-violet-300 text-white dark:text-white ">
                      {item.name}
                    </h5>
                  </div>
                </Link>
                <div className='flex items-center gap-x-2 '>
                  <div className='bg-green-400 w-2 h-2  rounded-full'></div>
                  <div className='flex gap-x-2 items-center '>
                    <span className='text-sm poppins-medium tracking-tight hover:text-violet-500 dark:hover:text-violet-500 text-white dark:text-white '>{item.status}</span>
                    <span className='text-sm poppins-medium tracking-tight hover:text-violet-500 dark:hover:text-violet-500 text-white dark:text-white '> - </span>
                    <span className='text-sm poppins-medium tracking-tight hover:text-violet-500 dark:hover:text-violet-500 text-white dark:text-white '>{item.species}</span>
                  </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                  <span className='text-md poppins-medium tracking-tight  text-gray-300 dark:text-white '>Last known location:</span>
                  <p className='text-md poppins-medium tracking-tight hover:text-violet-500 dark:hover:text-violet-500 text-white dark:text-white '>
                    {item.origin && item.origin.name ? item.origin.name : 'Unknown'}
                  </p>
                </div>
                <div className='flex flex-col gap-y-2'>
                  <span className='text-md poppins-medium tracking-tight  text-gray-300 dark:text-white '>First seen in:</span>
                  <p className='text-md poppins-medium tracking-tight hover:text-violet-500 dark:hover:text-violet-500 text-white dark:text-white '>
                    {item.location && item.location.name ? item.location.name : 'Unknown'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  ) : (
    <div className='mt-20'><span className='text-2xl  font-bebas  text-white'>Data bulunamadı.</span></div>
  )}
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Favoriteh;
