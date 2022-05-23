import React, {useEffect} from 'react'
import Header from '../components/Header'
import { useRouter } from "next/router"
import {auth, onAuthStateChanged} from '../firebase/Firebase'
import MovieAPIEndpoints from '../utils/MovieAPIEndpoints'
import Collections from '../components/Collections'

const movies = ({collections}) => {

    const router = useRouter();

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
        <Collections collections={collections}  />
    </div>
  )
}

export default movies

export async function getServerSideProps(context) {
  const movieType = context.query.movieType
  const request = await fetch(`https://api.themoviedb.org/3${
                    MovieAPIEndpoints[movieType]?.url || MovieAPIEndpoints.UpcomingMovies.url
                    }`
                ).then( response => response.json());
      return {
        props: {
          collections: request.results,
        }
      }
}