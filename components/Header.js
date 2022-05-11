import React from 'react'
import tw from "tailwind-styled-components"
import Image from 'next/image'
import { useRouter } from "next/router"

const Header = () => {
    const router = useRouter();
  return (
    <div>
      <HeaderMenu>
        <Image src= "/images/netflix_logo.png"  alt="Netflix Logo" width= "155px" height="42px" />
        <Button onClick={ ()=> router.push(`signin`) } >
                Sign In</Button>
        
        
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

    