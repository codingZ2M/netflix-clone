import React from 'react'
import Image from 'next/image'
import loginBackground from '../public/images/loginBackground.jpg'
import tw from "tailwind-styled-components"
import {BiChevronRight} from "react-icons/bi";

const Login = () => {
  return (
    <LoginContainer>
            
            <Image 
                src={loginBackground}
                layout="fill"
                className="w-screen h-screen flex items-center "
                alt="Background Image"
            />

        <CTAContainer> 
            <HeroText >Unlimited movies, TV shows and more.</HeroText>
            <TextSmall>Watch anywhere. Cancel anytime.</TextSmall>
            <Paragraph>
                  Ready to watch? Enter your email to create or restart your membership.
            </Paragraph>
            
            <CTAComponentsBox>
                <Input type="text" placeholder="Email address" required />
                <Button > Get Started 
                          <ArrowForwardIcon/>
                </Button>
            </CTAComponentsBox>
        </CTAContainer>

    </LoginContainer>
  )
}

export default Login

const LoginContainer = tw.div`
    h-screen w-full overflow-x-hidden flex justify-center bg-cover bg-center bg-no-repeat
`;
const CTAContainer = tw.div`
    w-full sm:w-10/12 px-4 flex flex-col justify-center items-center z-10 pt-52 text-white
`;
const HeroText = tw.span`
     text-3xl sm:text-5xl font-semibold sm:text-6xl text-center
`;
    
const TextSmall = tw.span`
    w-11/12 sm:w-3/5 text-2xl sm:text-3xl mt-4 mb-5 text-center
`;

const Paragraph = tw.p`
    text-lg sm:text-xl text-center 
`;

const CTAComponentsBox = tw.div`
    w-full sm:w-10/12 px-4 flex flex-row justify-center items-center mt-4 
`;

const Input = tw.input`
    w-96 h-12 sm:h-16 text-base sm:text-xl text-black border-none pl-3
`;

const Button = tw.button`
    flex gap-2 justify-center items-center bg-red-600 h-12 sm:h-16 w-60 text-sm sm:text-2xl
`;

const ArrowForwardIcon = tw(BiChevronRight)`
    w-6 h-6 sm:w-8 sm:h-8 
`;