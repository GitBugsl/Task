
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {fetchDataEpisode} from '../../services/api.services';
import Pagination from './Pagination';
import Header from '../Header/index';

interface EpisodeProps {
 
  ids: string;

}

const Location: React.FC<EpisodeProps> = ({ ids }) => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams(); 

 
  useEffect(() => {
    const fetchDataFromApi = async (id :any) => {
      try {
        const jsonData = await fetchDataEpisode(id); 
        setData(jsonData.results); 
      } catch (error:any) {
        setError(error.message || 'Bir hata oluştu.'); 
      } finally {
        setIsLoading(false); 
      }
    };

    
    fetchDataFromApi(id);
  }, [id]);

  if (isLoading) {
    return <div>Yükleniyor...</div>;
  }

  // Hata durumu
  if (error) {
    return <div>Hata: {error}</div>;
  }

  const currentPage = parseInt(id || '1', 4);
  const totalPages = 3; 

  const goToPage = (page: number) => {

    return <Link to={`/episode/${page}`} />;
  };

  return (
    <>
    <div className='h-auto min-h-screen w-full gap-y-0 flex flex-col bg-zinc-900'>
    <Header/>
    <div className='container flex items-center justify-center flex-col mx-auto gap-y-20  w-full h-auto'>
    <div className='w-full flex items-start h-10 justify-center mt-24'><span className='font-bebas text-white text-8xl'>EPİSODES</span></div>
       <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-4 md:pl-2 xl:p-20">
        
       {data.map((item, index) => (
      
       <div key={index} className="md:gap-x-14 lg:gap-x-14 items-center px-2 py-2 md:w-[30wh] md:min-w-[30wh] md:max-w-[30wh] lg:w-[40wh] lg:max-w-[40wh] xl:w-[40wh] xl:max-w-[40wh] 2xl:w-[40wh]  bg-zinc-800  rounded-xs flex flex-col sm:flex-col md:flex-row  transform transition duration-500 hover:scale-105">
        <div className="px-4 py-4 md:w-full lg:w-full xl:w-full 2xl:w-full">
            <div className='flex flex-col'>
                <div className='w-full flex flex-col gap-y-5'>
                   <div className='md:w-full '>
                      <h5 className="text-xl w-60 min-w-60  text-overflow font-semibold poppins-bold  tracking-tight hover:text-violet-500 dark:hover:text-violet-300 text-white dark:text-white ">
                      {item.name}
                      </h5>
                    </div>
                 <div className='flex flex-col items-start gap-y-2 '>
                    <div className='flex items-center gap-x-2'>
                    <div className='bg-green-400 w-2 h-2  rounded-full'></div>
                    <div className='flex gap-x-2 items-center '>
                    <span className='text-sm poppins-medium tracking-tight hover:text-violet-500 dark:hover:text-violet-500 text-white dark:text-white '>Tarih : {item.air_date}</span>
                    </div>
                    </div>

                    <div className='flex items-center gap-x-2'>
                    <div className='bg-green-400 w-2 h-2  rounded-full'></div>
                    <div className='flex gap-x-2 items-center '>
                    <span className='text-sm poppins-medium tracking-tight hover:text-violet-500 dark:hover:text-violet-500 text-white dark:text-white '>Bölüm : {item.episode}</span>
                    </div>
                    </div>

                  
                 </div>
                 
                  
                  

                  
                </div>
               
            </div>
        </div>

    </div>
    
    ))}
    
        
       </div>

    </div>
    <div className='w-full h-20 items-start justify-center flex container mx-auto gap-x-10'>
      <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
    </div>
    </div>
    
    </>
  );
};

export default Location;
