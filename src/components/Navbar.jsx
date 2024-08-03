// import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { IoMdMic } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { AiOutlineBell } from 'react-icons/ai';
import logo from '../../public/logo.png';
import profile from '../../public/profile.avif';
import React ,{useState} from 'react';



function Navbar() {
  const [mystyle,setMyStyle] = useState({
    color:"black",
      backgroundColor: 'white'
    })

    const [ btntext, setBtnText ] = useState("Enable Dark Mode")
     const toggleStyle =  () =>{
   if(mystyle.color == 'black'){
    setMyStyle({
      color: 'white',
      backgroundColor: 'black'
    })
    setBtnText("enable light mode")
   }
else{
  setMyStyle({
    color:'black',
    backgroundColor: 'white'
  })
  setBtnText("enable dark mode");
}
}


  return (
    <div className="flex justify-between fixed top-0 w-full bg-white px-6 py-2 z-50  " style={mystyle}>
      <div className="flex items-center space-x-4">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        <img src={logo} alt="Logo" className="w-28 cursor-pointer" />
      </div>
      <div className="flex items-center w-[35%]">
        <div className="flex w-full px-4 py-2 border border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none"
          />
        </div>
        <button className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full">
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <button onClick={toggleStyle} type="button" className="btn btn-primary ">{btntext}  </button>
      <div className="flex space-x-5 items-center">
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <img src={profile} alt="Profile" className="w-10 h-10 rounded-full border border-gray-300" />
      </div>
    </div>
  );
}

export default Navbar;
