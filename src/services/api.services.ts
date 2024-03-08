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
