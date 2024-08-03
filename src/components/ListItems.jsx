
import React from 'react';
import { useState } from 'react';

function ListItems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
  ];
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
    <div className="fixed top-12 left-[17%] right-0 bg-white px-4 py-2 z-30" style={mystyle}>
      <div className="flex overflow-x-auto scrollbar-hidden px-4 py-2">
        <div className="flex space-x-4">
          {categories.map((category) => (
            <div
              key={category}
              className="flex-none bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListItems;
