import React, { useState, useEffect } from 'react';
import { addFavorite, removeFavorite } from '../../store/features/personSlice';
import { useAppDispatch , useAppSelector  } from '../../store/store';
import {BsBookmarkHeartFill} from 'react-icons/bs'


interface CategoryProps {
    
    fid: string;
  }

  
const ButtonFavorite: React.FC<CategoryProps> = ({ fid }) => {
  const dispatch = useAppDispatch();
  const [isFavorite, setIsFavorite] = useState(false); // Favori mi değil mi kontrolü için state
  const favorites = useAppSelector((state) => state.favorite.favorites);

  useEffect(() => {
   
    setIsFavorite(favorites.some(favorite => favorite.id === fid));
}, [favorites, fid]);

const FAVORITES_STORAGE_KEY = 'favorites';

const getFavoritesFromLocalStorage = (): string[] => {
    const favoritesJSON = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return favoritesJSON ? JSON.parse(favoritesJSON) : [];
};

const addToFavoritesLocalStorage = (id: string): void => {
    const favorites = getFavoritesFromLocalStorage();
    if (!favorites.includes(id)) {
        favorites.push(id);
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    }
};

const removeFromFavoritesLocalStorage = (id: string): void => {
    const favorites = getFavoritesFromLocalStorage();
    const index = favorites.indexOf(id);
    if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    }
};

const handleClick = () => {
    if (!isFavorite) {
        dispatch(addFavorite({ id: fid })); // Favorilere ekle
        addToFavoritesLocalStorage(fid); // Locale ekle
    } else {
        dispatch(removeFavorite({ id: fid })); // Favorilerden çıkar
        removeFromFavoritesLocalStorage(fid); 
    }
};

 
  return (
    <>
   
    <div className='flex px-2 py-4'>
           
            <button
                onClick={handleClick}
                className={`absolute bg-opacity-80 right-5 sm:right-3 sm:top-3 md:right-3 md:top-3 lg:top-3 lg:right-3 xl:top-3 xl:right-3 2xl:right-3 2xl:top-3 rounded-lg text-gray-200 w-10 h-10 text-center ${isFavorite ? 'bg-black' : 'bg-violet-500 hover:bg-black'}`}
            >   
            
                <div className="absolute inset-0 flex items-center justify-center">
                    <BsBookmarkHeartFill className='' />
                </div>
           
            </button>
           
        </div>
   
    </>
  );
};

export default ButtonFavorite;

