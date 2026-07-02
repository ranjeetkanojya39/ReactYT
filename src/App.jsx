// import React from 'react'
// import Cart from './components/Cart'

// const App = () => {

//     const users = [
        
//   {
//     "name": "Alice Johnson",
//     "city": "New York",
//     "age": 28,
//     "profession": "Software Engineer",
//     "profilePhoto": "https://example.com/photos/alice.jpg"
//   },
 
// ]
    
//   return (
//     <div>
//       <div className='p-10'>
//         {users.map(function(elem,index){
//           return <Cart key={index} name={elem.name} age={elem.age} city={elem.city} profession={elem.profession} photo={elem.profilePhoto}/>
//         })}

//       </div>
//     </div>
//   )
// }

// export default App


import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=20"
    );
    setData(res.data);
  };

  return (
    <div className="p-10">
      <button
        onClick={getData}
        className="bg-emerald-700 text-white px-4 py-2 rounded font-medium"
      >
        Get Data
      </button>

      <div className="grid grid-cols-3 gap-5 mt-5">
        {data.map((elem) => {
          return (
            <div
              key={elem.id}
              className="bg-white text-black inline-block p-6 text-center rounded"
            >
              <img
                src={elem.download_url}
                alt="Profile"
                className="ml-8 h-32 w-32 rounded-full mb-3 object-cover"
              />
              <h1 className="text-2xl font-semibold mb-4">{elem.author}</h1>
              <p className="text-lg">ID: {elem.id}</p>
              <h1 className="text-xl font-bold">Width: {elem.width}</h1>
              <h1 className="text-lg">Height: {elem.height}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App