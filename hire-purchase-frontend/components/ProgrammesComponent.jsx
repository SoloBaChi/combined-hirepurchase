import React from 'react';
import Image from 'next/image';
import ButtonFill from './ButtonFill';
import {useRouter} from  'next/router';

export default function ProgrammesComoponent(props){
    const  router = useRouter();

	return(
	<div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row my-10 programme-container">
	 <div className="w-[80%] md:w-[50%] mx-auto my-auto">
      <Image src={props.image} alt="Our Programmes" width={700} height={500} className="rounded-md"/>
	 </div>
	 <div className="programme-description flex flex-col px-10 w=[80%] md:w-[50%] mx-auto">
      <h2 className="text-2xl font-semi-bold uppercase text-center mb-5 text-green-500">
      {props.heading}
      </h2>
      <p className="text-base text-grey-800">
      {props.paragraph}
      </p>
      <ButtonFill action ="read more" onClick={ (e) => router.push('/programs/[id]',`/programs/${props.id}`)}/>
	 </div>
	</div>
	)
}