import axios from "axios";
import {useState, useEffect} from "react";
import Movie from "./Movie";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
/* eslint-disable react/prop-types */
const Row = ({title, fetchUrl, rowId}) => {
  const [movies, setmMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((Response) => {
      setmMovies(Response.data.results);
    });
  }, [fetchUrl]);

  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className='p-4 font-bold text-white md:text-xl'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} className='absolute left-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block' size={40} />
        <div id={"slider" + rowId} className='relative w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide'>
          {movies.map((item, id) => {
            return <Movie item={item} key={id} />;
          })}
        </div>
        <MdChevronRight onClick={slideRight} className='absolute right-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block' size={40} />
      </div>
    </>
  );
};

export default Row;
