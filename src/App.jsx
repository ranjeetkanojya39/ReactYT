// import React, { useState } from 'react';

// const App = () => {
//   const [num, setNum] = useState(0);

//   return (
//     <div>
//       <h2>Number is {num}</h2>

//       <button onClick={() => setNum(num + 10)}>
//         Increment
//       </button>

//       <button onClick={() => setNum(num - 10)}>
//         Decrement
//       </button>
//     </div>
//   );
// };

// export default App;


// import React from 'react'

// const App = () => {
//   const submitHandler = (e) =>{
//     e.preventDefault()

//     console.log("submittend")
//   }
//   return (
//     <div>
//       <form onSubmit={(e) =>{
//         submitHandler(e)
//       }}>
//         <input className='px4 rounded py-3 text-xl m-5 ' type="name" placeholder='emter name' />
//         <button className='px4 rounded py-3 text-xl m-5 '> submit </button>
//       </form>
//     </div>
//   )
// }

// export default App


// import React, { useState } from "react";

// const App = () => {
//   const [username, setUsername] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(username);
//     setUsername("");
//   };

//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="px-4 py-3 rounded text-xl m-5 border"
//           type="text"
//           placeholder="Enter a name"
//         />

//         <button
//           className="px-4 py-3 m-5 text-xl font-semibold bg-green-500 text-white rounded"
//           type="submit"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   ); ;
// }
// export default App

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
     <>
      <Navbar />
  
      <Footer />
    </>
  )
}

export default App
