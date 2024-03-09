export async function fetchData(ids: string): Promise<any> {
  try {
    // Fetch isteği
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${ids}`);
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }
    // JSON formatında veri alma
    const jsonData = await response.json();
    return jsonData;
  } catch (error: any) {
    throw new Error(error.message || 'Bir hata oluştu.');
  }
}

export async function fetchDataDetail(idc: string): Promise<any> {
  try {
    // Fetch isteği
    const response = await fetch(`https://rickandmortyapi.com/api/character/${idc}`);
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }
    // JSON formatında veri alma
    const jsonData = await response.json();
    return jsonData;
  } catch (error: any) {
    throw new Error(error.message || 'Bir hata oluştu.');
  }
}


export async function fetchDataDetailLocation(idc: string): Promise<any> {
  try {
    // Fetch isteği
    const response = await fetch(`https://rickandmortyapi.com/api/location/${idc}`);
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }
    // JSON formatında veri alma
    const jsonData = await response.json();
    return jsonData;
  } catch (error: any) {
    throw new Error(error.message || 'Bir hata oluştu.');
  }
}

export async function fetchDataDetailLocationUser(ibc: string): Promise<any> {
  try {
   
    const response = await fetch(`https://rickandmortyapi.com/api/character/${ibc}`);
   
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }
    // JSON formatında veri alma
    const jsonData = await response.json();
 
    return jsonData;
   
  } catch (error: any) {
    throw new Error(error.message || 'Bir hata oluştu.');
  }
}



export async function fetchDataLocation(ids: string): Promise<any> {
  try {
    // Fetch isteği
    const response = await fetch(`https://rickandmortyapi.com/api/location/?page=${ids}`);
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }
    // JSON formatında veri alma
    const jsonData = await response.json();
    return jsonData;
  } catch (error: any) {
    throw new Error(error.message || 'Bir hata oluştu.');
  }
}


export async function fetchDataEpisode(ids: string): Promise<any> {
  try {
    // Fetch isteği
    const response = await fetch(`https://rickandmortyapi.com/api/episode/?page=${ids}`);
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }
    // JSON formatında veri alma
    const jsonData = await response.json();
    return jsonData;
  } catch (error: any) {
    throw new Error(error.message || 'Bir hata oluştu.');
  }
}