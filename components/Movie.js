import React, {useEffect} from 'react'
import tw from "tailwind-styled-components"
import Header from './Header';
import Image from "next/image"
import { useRouter } from "next/router"

import {AiOutlinePlayCircle} from "react-icons/ai"
import {BiMoviePlay}  from "react-icons/bi"
import {BsPlusSquare} from "react-icons/bs"
import {BsShare}  from "react-icons/bs"

import {auth, onAuthStateChanged} from '../firebase/Firebase'

const Movie = ({movie}) => {
    
    const router = useRouter();
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
  
    useEffect (  ()=> {
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                router.push(`/`)
            }
        }  )
    },  );


  return (
    <div>
          <Header/>
        <MovieDetailsContainer>
           
        <Image  layout="fixed"
                src={`${BASE_URL}${movie.backdrop_path || movie.poster_path}` }
                height={800}
                width={1600}
                className='absolute top-0 left-0 right-0 z-index-0 opacity-50 
                           flex items-center justify-center object-cover'   
                alt={movie.title}
            />
            <MovieDetails>
                <span className='text-3xl mt-2 sm:text-4xl mb-6'>{movie.title}</span>
                <p className='text-base text-justify' >{movie.overview}</p>
                <MovieInfo>
                    <div className='text-base'> Release Date: {movie.release_date}</div>
                    <div className='text-base'> Popularity: {movie.popularity}</div>
                    <div className='text-base'> Vote Average: {movie.vote_average}</div>
                </MovieInfo>
                <Controls>
                    <WatchMovie>
                       <PlayIcon className='w-6 h-6 sm:w-10 sm:h-10'  />
                       <span className='text-base'>Watch Movie</span>
                    </WatchMovie>
                    <Trailer>
                            <TrailerIcon className='w-6 h-6 sm:w-10 sm:h-10'/>
                            <span className='text-base'>Trailer</span>
                    </Trailer>
                    <WatchList>
                            <PlusIcon className='w-4 h-4 sm:w-8 sm:h-8'/>
                            <span className='text-base'>Watch List</span>
                    </WatchList>
                    <Share>
                            <ShareIcon className='w-4 h-4 sm:w-8 sm:h-8' />
                            <span className='text-base'>Share</span>
                    </Share>
                </Controls>
            </MovieDetails>
        </MovieDetailsContainer>
    </div>
  )
}

export default Movie

const MovieDetailsContainer = tw.div`
    relative overflow-hidden block top-32 sm:top-0 w-full h-full p-0 
`;

const MovieDetails = tw.div`
    flex flex-col w-4/5 sm:w-1/2 absolute top-0 left-20 sm:top-40 sm:left-16 p-0 
`;

const MovieInfo = tw.div`
    flex  w-full justify-between p-0 text-base tracking-wide my-6
`;

const Controls = tw.div`
    flex w-full items-center justify-between
`;

const WatchMovie = tw.div`
    flex gap-1 items-center justify-center
`;

const Trailer = tw(WatchMovie)``;
const WatchList = tw(WatchMovie)``;
const Share = tw(WatchMovie)``;


const PlayIcon = tw(AiOutlinePlayCircle)``;
const TrailerIcon = tw(BiMoviePlay)``;
const PlusIcon = tw(BsPlusSquare)``;
const ShareIcon = tw(BsShare)``;