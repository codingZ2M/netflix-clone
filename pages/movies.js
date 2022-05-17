import React, {useEffect} from 'react'
import Header from '../components/Header'
import { useRouter } from "next/router"
import {auth, onAuthStateChanged} from '../firebase/Firebase'

const movies = () => {

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
        <div className='mt-32 pl-10 text-3xl'>
        <h1> Here All The Movies Are Going To Be Displayed! Source: TMDB </h1>
        </div>
    </div>
  )
}

export default movies
