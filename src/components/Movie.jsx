import {useState} from "react";
import {FaHeart, FaRegHeart} from "react-icons/fa6";
import PropTypes from "prop-types";
import {UserAuth} from "../context/AuthContext";
import {db} from "../firebase";
import {arrayUnion, doc, updateDoc} from "firebase/firestore";
const Movie = ({item}) => {
  // eslint-disable-next-line no-unused-vars
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const {user} = UserAuth();
  const movieId = doc(db, "users", `${user?.email}`);

  const savedShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieId, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please sign in to save a movie");
    }
  };

  return (
    <div className='relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px]  lg:w-[280px]'>
      <img className='block w-full h-full' src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`} alt={item?.title} />
      <div className='absolute top-0 left-0 w-full h-full text-white transition-all duration-200 opacity-0 hover:bg-black/80 hover:opacity-100'>
        <p className='flex items-center justify-center h-full text-xs font-bold text-center whitespace-normal md:text-sm'>{item?.title}</p>
        <p onClick={savedShow}>{like ? <FaHeart className='absolute text-gray-300 left-4 top-4' /> : <FaRegHeart className='absolute text-gray-300 left-4 top-4' />}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  item: PropTypes.any,
};

export default Movie;
