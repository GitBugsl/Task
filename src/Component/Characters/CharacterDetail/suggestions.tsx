
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataDetailLocation } from '../../../services/api.services';
import SuggestionsUser from '../CharacterDetail/suggestionsUser';


interface CategoryProps {
 
  idc: string;
  ibc: string;
  iss: string;
  idb: string;

}
const Suggestions: React.FC<CategoryProps> = ({idb , ibc , iss }) => {

    function getLocationIdFromUrl(url: string) {
        const segments = url.split('/');
        return segments[segments.length - 1];
      }
    
      const url = ibc;
      const locationId = getLocationIdFromUrl(url);
  
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchDataFromApi = async (id: any) => {
      try {
        const jsonData = await fetchDataDetailLocation(locationId);
        setData(jsonData);
      } catch (error: any) {
        setError(error.message || 'Bir hata oluştu.');
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchDataFromApi(locationId);
  }, [locationId]);
  
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
   <div>
     <SuggestionsUser idb={idb} ibs={iss} ibc={characterIDs}/>
   </div>
  );
};

export default Suggestions;
