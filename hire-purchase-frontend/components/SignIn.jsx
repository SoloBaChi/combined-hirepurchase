import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
// import { getCsrfToken, getProviders, getSession, signIn } from 'next-auth/react';

function SignIn(props) {

    console.log("provider = ", props);
    return (
        <div className='sign-in-section w-[90%] md:w-[98%] mx-auto flex flex-col md:flex-row justify-between'>
            {/* <span className='border-2 border-red-600'>baba</span> */}
            <div className="place-left side-img w-[80%] md:w-[50%] hidden md:block relative md:mx-auto ">
                <div className="overlay absolute opacity-60 bg-green-600 h-[100%] w-[100%] left-0 top-0 z-50" ></div>
                <Image className='z-40' src={props.image} alt="sign in image"/>
            </div>
            <div className="place-right mx-auto my-10 md:my-36 w-[80%] md:w-[50%]">
                <h1 className="header-text text-center pt-2 text-3xl font-medium"><span className='text-green-500'>HIRE</span> PURCHASE</h1>
                <div className="btn-wrapper flex flex-col gap-6 pt-5 items-center">
                 
                {/* facebook sign in button */}
                <button 
                    onClick={() => signIn()}
                    className="btn-2 border-2 border-grey-200 text-white rounded-lg bg-white">
                <a className="flex items-center gap-2 block" href="http://www.facebook.com/" target="_blank">
                <FaFacebook className="block md:text-sm h-6 w-8 text-blue-700"/>
                <span className='bg-blue-700 block text-xs md:text-sm p-2'>Sign in with Facebook
                </span></a>
                </button>
                {/* Google sign in button */}
                <button className="btn-2 border-2 border-grey-200 text-white rounded-lg bg-white">
                <a className="button-link flex items-center gap-2 block" href="http://www.facebook.com/" target="_blank">
                <FcGoogle className="block md:text-sm h-6 w-8 text-blue-700"/>
                <span className='bg-red-600 block text-xs md:text-sm p-2'>Continue with google
                </span></a>
                </button>
                <Link href='#'>
                <p className="cursor-pointer text-blue-900">Don't have an account click here to login</p>
                </Link>
                </div>
             </div>
        </div>
    );
}

export default SignIn;

// export async function getServerSideProps(ctx) {
//     const {req} = ctx;
//     const session = await getSession({req});
//     if(session) {
//         return {
//             redirect: { destination: "/"},
//         };
//     }

//     return {
//         props: {
//             providers: await getProviders(),
//             csrfToken: await getCsrfToken(ctx),
//         }
//     }
// }