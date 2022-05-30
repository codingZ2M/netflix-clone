import { useEffect, useState } from "react"
import tw from "tailwind-styled-components"
import Image from 'next/image'
import { useRouter } from "next/router"
import {auth, onAuthStateChanged, signOut} from '../firebase/Firebase'
import MovieCategoriesBar from './MovieCategoriesBar'

const Header = () => {
    const router = useRouter();
 
    const [signedUser, setSignedUser] = useState('');

    useEffect (  ()=> {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                setSignedUser(user);
            }
        }  )
    }, []  );

    const handleAuth = () => {
        if (signedUser){
           signOut(auth).then( ()=> {
               router.push('/')
              
           }).catch((error)=> {
               alert(error.message);
           })
       }
       console.log(signedUser.photoURL)
   }

  return (
    <div>
      <HeaderMenu>
        <Image src= "/images/netflix_logo.png"  alt="Netflix Logo" width= "155px" height="42px" />
        
           { 
                !signedUser ? 
                    <Button onClick={ ()=> router.push(`signin`) } >
                    Sign In</Button>
                :
                <>
                <SignOut>
                    <Image src={signedUser.photoURL} alt="User" className="rounded-full" width={40} height={40} />
                    <SignOutBox>
                       <span onClick={handleAuth} className="" >Sign Out</span>
                    </SignOutBox>
                </SignOut>
                <MovieCategoriesBar/>
                </>
            }        
      </HeaderMenu>

    </div>
      
  )
}

export default Header

const HeaderMenu = tw.div`
    flex absolute top-6 left-4 right-4 sm:left-11 sm:right-11 
    justify-between z-20 items-center
`;
const Button = tw.button`
    flex justify-center items-center text-white 
    bg-red-600 h-8 w-20 text-sm rounded cursor-pointer
`;

const SignOut = tw.div`
    flex absolute top-0 right-0 cursor-pointer group
`;

const SignOutBox = tw.div`
    absolute top-6 right-8 bg-red-600 text-white border-none 
    rounded-sm w-20 h-8 flex items-center justify-center text-base 
    opacity-0 group-hover:opacity-100
`;

    