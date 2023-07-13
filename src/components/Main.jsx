import {useEffect, useState} from "react";
import requests from "../Request";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(requests.requestPopular).then((Response) => {
      setMovies(Response.data.results);
    });
  }, []);

  const moive = movies[Math.floor(Math.random() * movies.length)];
  // console.log(moive);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full relative'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original${moive?.backdrop_path}`} alt={moive?.title} />
        <div className='absolute w-full top-[20%] p-4 md:p-8 '>
          <h1 className='text-3xl md:text-5xl font-bold'>{moive?.title}</h1>
          <div className='my-4'>
            <button className='border rounded-sm bg-gray-300 text-black border-gray-300 hover:bg-transparent hover:text-white transition-all duration-500 py-1 px-7'>Play</button>
            <button className='border ml-4  text-white border-gray-300 hover:bg-gray-300 hover:text-black rounded-sm transition-all duration-500 py-1 px-7'>Watch</button>
          </div>
          <p className='text-gray-400 text-sm'>Released : {moive?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(moive?.overview, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
