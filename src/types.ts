export interface Character {
    id: number;
    name: string;
    // Diğer özellikler
  }

  export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: number[]; // Burada residents dizisi, yerleşik karakterlerin id'lerini içerebilir
  }
  interface Characters {
    id: number;
    name: string;
    status: string; // Status özelliğini ekleyin
    // Diğer karakter özellikleri
  }
  