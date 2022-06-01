import React from 'react'
import { useRouter } from "next/router"
import  Movie  from '../components/Movie';

const moviedetails = () => {
    const router = useRouter();

    const {title, backdrop_path, overview, release_date, popularity, vote_average} = router.query
    const {...movie} =  {title, backdrop_path, overview, release_date, popularity, vote_average}

    return (
        <div>
            <Movie movie={movie}/> 
        </div>
    )
}

export default moviedetails