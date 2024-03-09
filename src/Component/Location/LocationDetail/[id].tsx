
import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import {fetchDataLocationCharachter} from '../../../services/api.services';
import CharacterList from './CharacterList';




interface CategoryProps {
  ipp: string;

}

const LocationDetail: React.FC<CategoryProps> = ({ ipp }) => {

  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams(); 



  useEffect(() => {
    const fetchDataFromApi = async (id :any) => {
      try {
        const jsonData = await fetchDataLocationCharachter(id); 
        setData(jsonData); 
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

  if (error) {
    return <div>Hata: {error}</div>;
  }
  const urls = data.residents;
  const characterIDs = urls.map((url: string) => {
    const segments = url.split('/');
    return segments[segments.length - 1];
  });

  

  return (
    <>
    
       
       <CharacterList ipp={characterIDs}/>

   
    </>
  );
};

export default LocationDetail;
