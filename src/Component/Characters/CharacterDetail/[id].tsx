
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataDetail} from '../../../services/api.services';
import Suggestions from './suggestions';
import Headers from '../../Header';


interface CategoryProps {
 
  idc: string;
  iss: string;


}



const CharacterDetail: React.FC<CategoryProps> = ({   idc , iss }) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams(); 

 useEffect(() => {
    const fetchDataFromApi = async (id: any) => {
      try {
        const jsonData = await fetchDataDetail(id);
        setData(jsonData);
      
      } catch (error: any) {
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

  return (
    <div className='h-auto min-h-screen w-full gap-y-0 flex flex-col bg-zinc-900'>
     <Headers/>
    <div className='container flex flex-col gap-y-20  items-center justify-center mx-auto px-4 py-4  w-full h-auto'>
    <div className='w-full flex items-start h-10 justify-center mt-24 mb-10'><span className='font-bebas text-white text-8xl'>CHARACTER DETAİLİNG</span></div>   
    <div className='w-full h-auto flex flex-col lg:flex-row rounded-t-3xl lg:rounded-l-3xl lg:rounded-r-3xl bg-zinc-800 border border-zinc-600'>
        <div className='lg:w-1/2 h-full'>

            <img className='w-full h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-l-3xl lg:rounded-r-none' src={data && data.image}/>

        </div>

         <div className='w-full lg:w-1/2  h-auto px-5 py-5'>

           <div className='w-full h-full flex flex-col gap-y-5'>
            <span className='poppins-bold text-white text-2xl'>{data && data.name}</span>
            <div className='gap-x-1 flex items-center gap-x-2 justify-start'>
            <span className={`rounded-full w-4 h-4 poppins-bold text-white  ${data && data.status === 'Alive' ? 'bg-green-400' : data && data.status === 'Dead' ? 'bg-red-400' : 'bg-black'}`}/>
            <span className='poppins-bold text-white text-xs '>{data && data.status}</span>
            <span className='poppins-bold text-white text-xs'>-</span>
            <span className='poppins-bold text-white text-xs'>{data && data.species}</span>
            </div>
            <span className='poppins-bold text-white text-lg'>{data && data.gender}</span>
            <div className='flex flex-col bg-green-500 w-full   h-auto  px-2 py-2 gap-y-1 '>
                <span className='poppins-medium text-black text-sm'>Origin</span>
                <span className='poppins-bold text-black text-xl'>{data && data.origin.name}</span>
            </div>
            <div className='flex flex-col bg-green-500  h-auto  w-full px-2 py-2 gap-y-1 '>
                <span className='poppins-medium text-black text-sm'>Location</span>
                <span className='poppins-bold text-black text-xl'>{data && data.location.name}</span>
            </div>

           
            </div>

        </div>
    </div>

    

    <div className='w-full h-1/8'>
     
       <Suggestions idc='any' idb={id || ''} iss={data && data.status} ibc={data && data.location.url}/>
   
    </div>
     
        

    </div>
 
    </div>
  );
};

export default CharacterDetail;
