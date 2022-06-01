import Image from "next/image"
import tw from "tailwind-styled-components"
import { useRouter } from "next/router"
import {GrCalendar} from "react-icons/gr";
import {MdOutlineHowToVote} from "react-icons/md";

function Preview  ({ collection })  {
    const router = useRouter();
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    
    return (
        <PreviewContainer>
           
            <Image onClick={ ()=> router.push(
                        {
                            pathname: '/moviedetails',
                            query: {
                                title: collection.title,
                                backdrop_path: collection.backdrop_path,
                                overview: collection.overview,
                                release_date: collection.release_date,
                                popularity: collection.popularity,
                                vote_average: collection.vote_average,
                                
                                }
                        }
                     ) }
                layout="responsive"
                src={
                        `${BASE_URL}${collection.backdrop_path || collection.poster_path}` 
                }
                height={1080}
                width={1920}
                alt={collection.title}
            />  
            <PreviewDetails>
                <p className="truncate"> {collection.overview}</p>
                <Title> 
                   {collection.title || collection.original_name}
                </Title>
                <RatingContainer>
                    <PreviewData>
                       <CalendarIcon/>{collection.release_date}
                    </PreviewData>
                    <PreviewData>
                        <VoteIcon/>{collection.vote_count}
                    </PreviewData>
                </RatingContainer>
            </PreviewDetails>

        </PreviewContainer>
    )
}

export default Preview;

const PreviewContainer = tw.div`
    flex flex-col p-2 group cursor-pointer transition duration-200 
    ease-in sm:hover:scale-105
`;

const PreviewDetails = tw.div`
    p-2 flex flex-col gap-0
`;

const Title = tw.span`
    pt-1 text-lg  transition duration-100 
    ease-in-out group-hover:font-bold
`;

const RatingContainer = tw.div`
   flex gap-4 items-center  opacity-0 group-hover:opacity-100 
`;

const CalendarIcon = tw(GrCalendar)``;
const VoteIcon = tw(MdOutlineHowToVote)``;

const PreviewData = tw.p`
    flex gap-1 items-center
`;
