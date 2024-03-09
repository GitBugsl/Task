

import { useAppSelector } from '../../store/store';
import {BsBookmarkHeartFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Favorite = () => {
  const favorite = useAppSelector((state) => state.favorite.favorites);
  const favoriteCount = favorite.length;
  return (
   <div className='flex items-center justify-center w-full'>
     <Link to={'/favorite'}>
     <div className='bg-zinc-800 border flexborder-zinc-600 hover:border-violet-500 items-center justify-center flex w-12 h-12 rounded-lg'>
       <BsBookmarkHeartFill className='text-white'/>
      </div>
      </Link>
     <div className='relative bottom-5 bg-violet-500 right-2 w-5 h-5 rounded-full flex items-center justify-center'><span className='poppins-bold text-xs text-white'>{favoriteCount}</span></div>
    </div>
  );
};

export default Favorite;

