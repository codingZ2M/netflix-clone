import React from 'react'
import { useRouter } from "next/router"
import tw from "tailwind-styled-components"
import MovieDatabase from '../utils/MovieAPIEndpoints'

const MovieCategoriesBar = () => {
    const router = useRouter();

  return (
    <div>
         <MovieCategoryMenu>
                <MovieTypeContainer>
                    {Object.entries(MovieDatabase).map( ([key, {title, url}]) => (

                    <MovieType key={key} 
                        onClick={ ()=> router.push(`movies/?movieType=${key}`) }
                    >{title}</MovieType>
                ))}
                </MovieTypeContainer>
        </MovieCategoryMenu>
    </div>
  )
}

export default MovieCategoriesBar

const MovieCategoryMenu = tw.div`
    absolute top-16 left-10 sm:top-16 sm:left-0 z-10
`;

const MovieTypeContainer = tw.div`
    flex space-x-5 sm:space-x-20 overflow-x-scroll mx-5 scrollbar-hide
`;

const MovieType = tw.h2`
    last:pr-10 first:pl-12 cursor-pointer duration-100 hover:scale-125
    hover:text-red-500  whitespace-nowrap
`;