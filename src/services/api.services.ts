

export async function fetchData(ids: string): Promise<any> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${ids}`);
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error: any) {
    throw new Error(error.message || 'Bir hata oluştu.');
  }
}

export async function fetchDataDetail(idc: string): Promise<any> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${idc}`);
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error: any) {
    throw new Error(error.message || 'Bir hata oluştu.');
  }
}


export async function fetchDataDetailLocation(idc: string): Promise<any> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/location/${idc}`);
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }
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
    const jsonData = await response.json();
 
    return jsonData;
   
  } catch (error: any) {
    throw new Error(error.message || 'Bir hata oluştu.');
  }
}



export async function fetchDataLocation(ids: string): Promise<any> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/location/?page=${ids}`);
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error: any) {
    throw new Error(error.message || 'Bir hata oluştu.');
  }
}


export async function fetchDataEpisode(ids: string): Promise<any> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/?page=${ids}`);
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error: any) {
    throw new Error(error.message || 'Bir hata oluştu.');
  }
}


export async function fetchDataLocationCharachter(ids: string): Promise<any> {
  try {

    const response = await fetch(`https://rickandmortyapi.com/api/location/${ids}`);
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error: any) {
    throw new Error(error.message || 'Bir hata oluştu.');
  }
}
export async function fetchDataFavorite(datas : any): Promise<any> {
  try {
    const result = datas.join(', ');
    console.log(result)
    const response = await fetch(`https://rickandmortyapi.com/api/character/${result}`);
    if (!response.ok) {
      throw new Error('Veri alınamadı.');
    }
    const jsonData = await response.json();
    console.log(jsonData)
    return jsonData;
   
  } catch (error: any) {
    throw new Error(error.message || 'Bir hata oluştu.');
  }
}
 