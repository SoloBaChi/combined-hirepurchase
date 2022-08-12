import React,{useState, useEffect} from 'react';
import { FiUser } from "react-icons/fi";
const Application = () => {
  
  const[message,setMessage] = useState("");
  const[userDetails,setUserDetails] = useState({
    fullname:"",
    phone:"",
    email:"",
    confirmEmail:"",
    address:"",
    city:"",
    state:"",
    age:"",
    NIN:"",
    gender:""
  });

  const onChangedUserDetail = event => {
    setUserDetails({
      ...userDetails,
      [event.target.name]:event.target.value
    });
  }


  
  const handleSubmit = (event) => {
    event.preventDefault();
    const profileData = {
    fullname:userDetails.fullname,
    email:userDetails.email,
    confirmEmail:userDetails.confirmEmail,
    address:userDetails.address,
    age:userDetails.age,
    stateOfOrigin:userDetails.state,
    phoneNumber:userDetails.phone,
    city:userDetails.city,
    NIN:userDetails.NIN,
    gender:userDetails.gender
    // id:Math.random().toString(),
     
    }
    //console.log(profileData);
     fetch("https:hire-purchase-frontend.vercel.app",{
      method:'POST',
      headers:{
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*'
      },
      body:JSON.stringify(profileData)
     })
     .then(()=>{
      console.log("sent to database")
     })
     .catch(err=>{
      console.log("not sent",err)
     })
  }
  


  return (
    <>
      <div className="w-full h-full flex justify-center m-0 ">
        <div>
          <FiUser className="h-36 w-36 mt-24 bg-gray-400 rounded-full mx-auto" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
      <div className=" form-container h-full flex flex-col items-center justify-center ml-10 mx-auto md:mx-auto px-20 mt-10 md:flex-row md:w-3/4">
        <div className="md:basis-1/2 w-full">
          <div className="flex flex-col">
            <div className="basis-1/2 form-group mb-6">
              <label
                htmlFor="name"
                className="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Name
              </label>
              <input
                type="text"
                className="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-gray-500 focus:border-blue-600 focus:outline-none"
                id="name"
                name="fullname"
                value={userDetails.name}
                onChange = {onChangedUserDetail}
                aria-describedby="emailHelp"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="phone"
                className="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Phone
              </label>
              <input
                type="number"
                className="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="phone"
                name="phone"
                value={userDetails.phone}
                onChange = {onChangedUserDetail}
                aria-describedby="emailHelp"
                placeholder="Phone Number"
              ></input>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="email"
                className="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                E-mail
              </label>
              <input
                type="email"
                className="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="email"
                name="email"
                value={userDetails.email}
                onChange = {onChangedUserDetail}
                aria-describedby="emailHelp"
                placeholder="Your e-mail"
              ></input>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="confirmEmail"
                className="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Confirm E-mail
              </label>
              <input
                type="email"
                className="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="confirmEmail"
                name="confirmEmail"
                value={userDetails.confirmEmail}
                onChange = {onChangedUserDetail}
                aria-describedby="emailHelp"
                placeholder="Input password"
              ></input>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="gender"
                className="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                Your gender
              </label>
              <select
                className="form-select appearance-none
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                id="gender"
                name="gender"
                value={userDetails.gender}
                onChange = {onChangedUserDetail}
              >
                <option >Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="rather not say">Rather not say</option>
              </select>
            </div>
          </div>
        </div>
        <div className="md:basis-1/2 w-full">
          <div>
            <div className="form-group mb-6">
              <label
                htmlFor="address"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Street Address
              </label>
              <input
                type="address"
                className="form-control
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-gray-500 focus:border-blue-600 focus:outline-none"
                id="address"
                name="address"
                value={userDetails.address}
                onChange = {onChangedUserDetail}
                aria-describedby="emailHelp"
                placeholder="Your address"
              ></input>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="city"
                className="form-label inline-block mb-2 text-gray-700"
              >
                {" "}
                City
              </label>
              <select
                className="form-select appearance-none
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                id="city"
                name="city"
                value={userDetails.city}
                onChange = {onChangedUserDetail}
              >
                <option/>
                <option>Your city</option>
                <option value="aba">Aba</option>
                <option value="awka">Awka</option>
                <option value="enugu">Enugu</option>
                <option value="ikeja">Ikeja</option>
                <option value="port-harcourt">Port-harcourt</option>
                <option value="uyo">Uyo</option>
                <option value="yola">Yola</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="state"
                className="form-label inline-block mb-2 text-gray-700"
              >
                State
              </label>
              <select
                className="form-select appearance-none
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                id="state"
                name="state"
                value={userDetails.state}
                onChange = {onChangedUserDetail}
              >
                <option>Your state</option>
                <option value="abia">Abia</option>
                <option value="adamawa">Adamawa</option>
                <option value="akwa ibom">Akwa Ibom</option>
                <option value="anambra">Anambra</option>
                <option value="enugu">Enugu</option>
                <option value="lagos">Lagos</option>
                <option value="rivers">Rivers</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="age"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Age
              </label>
              <select
                className="form-select appearance-none
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                id="age"
                name="age"
                value={userDetails.age}
                onChange = {onChangedUserDetail}
              >
                <option>Your age</option>
                <option value="18-25">18-25</option>
                <option value="26-40">26-40</option>
                <option value="41-70">41-70</option>
                <option value="70+">70+</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="NIN"
                className="form-label inline-block mb-2 text-gray-700"
              >
                NIN
              </label>
              <input
                type="number"
                className="form-control nin-input
                      block
                      w-3/4
                      h-11
                      rounded-md
                      px-3
                      py-0.5
                      m-0
                      bg-gray-200
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="NIN"
                name="NIN"
                value={userDetails.NIN}
                onChange = {onChangedUserDetail}
                aria-describedby="emailHelp"
                placeholder="Your NIN number"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-60 flex justify-center m-0 ">
        <button
          type="submit"
          id="btn"
          className="
                      w-72
                      h-12
                      mt-5
                      py-2.5
                      bg-blue-400
                      text-white
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      rounded
                      shadow-md
                      hover:bg-blue-700 hover:shadow-lg
                      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                      active:bg-blue-800 active:shadow-lg
                    "
        >
          Apply
        </button>
      </div>
      </form>
    </>
  );
};

export default Application;
