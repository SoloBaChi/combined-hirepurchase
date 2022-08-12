import React from 'react';

export default function ButtonFill({action,onClick}){

return(
<button onClick={onClick} className="bg-green-500 hover:bg-green-900 text-white py-2 px-3 rounded-md uppercase w-[40%] mx-auto my-8 md:w-[60%]">
{action} <span className="text-2xl">&#8811;</span>
</button>
);	
}