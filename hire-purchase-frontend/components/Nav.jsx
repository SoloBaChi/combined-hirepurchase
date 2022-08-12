import Link from "next/link";
import{HiMenu} from "react-icons/hi";
import {AiOutlineClose} from 'react-icons/ai';
import {useState} from 'react';
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const toggleNavBar = () => {
    setMobileNav(!mobileNav);
  }

  const { data: session } = useSession();

  return (
    <div>
    <nav className="nav-header w-full bg-gray-400  h-20 flex items-center">
      <div className="w-96">
        <h1 className="text-center text-4xl md:text-3xl md:text-left font-bold">
          <a className="project-green-text navbar-logo">HIRE</a> PURCHASE
        </h1>
      </div>
      <div className=" hidden md:flex  flex-row flex w-3/4 justify-end items-center mr-20 ">
        <ul className="flex ">
          <li className="mx-2">
            <Link href="/">
              <a className="text-lg md:text-base font-normal project-green-text navbar-home">HOME</a>
            </Link>
          </li>
          {/*initializing signin session middleware */}
          {
           session ? (
             <div className="flex flex-row">
            <li className="mx-2">
            <Link href="/profile" >
                <a className="text-lg md:text-base  font-normal text-black">PROFILE</a>
            </Link>
          </li>
           <li className="mx-2">
           <a className="text-lg md:text-base font-normal text-black cursor-pointer"
           onClick={()=>signOut()}
           >SIGN OUT</a>
           </li>
           </div>
           ):
           (
            <li className="mx-2">
                <a className="text-lg md:text-base font-normal text-black cursor-pointer"
                onClick={()=>signIn()}
                >SIGN IN</a>
          </li>
           )
          }
          
          <li className="mx-2">
            <Link href="#" >
              <a className="text-lg md:text-base  font-normal text-black">CONTACT US</a>
            </Link>
          </li>

          <li className="mx-2">
            <Link href="/programs">
              <a className="text-lg md:text-base  font-normal text-black">APPLY</a>
            </Link>
          </li>

          <li className="mx-2">
            <Link  href="/sigIn">
              <a className="text-lg md:text-base font-normal text-black">REVIEWS</a>
            </Link>
            </li>
        </ul>
        </div> 
        <HiMenu 
            className="text-5xl md:hidden ml-5 hover:text-white"
            onClick={toggleNavBar}
            /> 
    </nav>
    {
          mobileNav && (
            <div className="toggle-nav-container flex flex-col h-screen w-[55%] fixed right-0 top-0 bottom-0 bg-black text-white text-2xl px-0 py-10 z-50 text-center ">
         <AiOutlineClose
            className="absolute top-0 right-0 mr-5 text-2xl text-white hover:text-yellow-200 font-medium nav-items-link-times" 
             onClick={toggleNavBar}
            />
        <Link href ="/"><a className="nav-items-link flex justify-center">HOME</a></Link>
        {/*initializing signin session middleware for mobile view */}
        {
          session ? (
            <div>
            <Link href ="/profile">
              <a className="nav-items-link flex justify-center">
                PROFILE
            </a></Link>
             <a 
             className="nav-items-link flex justify-center cursor-pointer"
             onClick={()=>signOut()}>
               SIGN OUT
             </a>
             </div>
          ):
          (
              <a 
              className="nav-items-link flex justify-center cursor-pointer"
              onClick={()=>signIn()}>
                SIGN IN
              </a>
          )
        }

        
        <Link href ="#"><a className="nav-items-link flex justify-center">CONTACT US</a></Link>
        <Link href ="/programs"><a className="nav-items-link flex justify-center">APPLY</a></Link>
        <Link href ="/sigIn" ><a className="nav-items-link flex justify-center">REVIEWS</a></Link>
      </div>
        )
        }   
    </div>
  );
};

export default Nav;
