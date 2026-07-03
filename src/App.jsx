// // import React from 'react'
// // import Cart from './components/Cart'

// // const App = () => {

// //     const users = [
        
// //   {
// //     "name": "Alice Johnson",
// //     "city": "New York",
// //     "age": 28,
// //     "profession": "Software Engineer",
// //     "profilePhoto": "https://example.com/photos/alice.jpg"
// //   },
 
// // ]
    
// //   return (
// //     <div>
// //       <div className='p-10'>
// //         {users.map(function(elem,index){
// //           return <Cart key={index} name={elem.name} age={elem.age} city={elem.city} profession={elem.profession} photo={elem.profilePhoto}/>
// //         })}

// //       </div>
// //     </div>
// //   )
// // }

// // export default App

// import axios from "axios"; // Axios library for making API requests
// import React, { useState  , useEffect} from "react"; // Import React and useState hook

// // Functional Component
// const App = () => {

//   // State to store API data
//   const [data, setData] = useState([]);

//   // Function to fetch data from the API
//   const getData = async () => {

//     // Send GET request to Picsum API
//     const res = await axios.get(
//       "https://picsum.photos/v2/list?page=2&limit=20"
//     );

//     // Store the response data in state
//     setData(res.data);
//   };
//   useEffect(() => {
//     getData(); // Fetch data when the component mounts

//   },[])

//   return (
//     <div className="p-10">

//       {/* Button to fetch data
//       <button
//         onClick={getData} // Calls getData when clicked
//         className="bg-emerald-700 text-white px-4 py-2 rounded font-medium"
//       >
//         Get Data
//       </button> */}

//       {/* Grid container for cards */}
//       <div className="grid grid-cols-3 gap-5 mt-5">

//         {/* Loop through the data array */}
//         {data.map((elem) => {

//           return (

//             // Single Card
//             <div
//               key={elem.id} // Unique key for React
//               className="bg-white text-black inline-block p-6 text-center rounded"
//             >

//               {/* Image */}
//               <img
//                 src={elem.download_url}
//                 alt="Profile"
//                 className="ml-8 h-32 w-32 rounded-full mb-3 object-cover"
//               />

//               {/* Author Name */}
//               <h1 className="text-2xl font-semibold mb-4">
//                 {elem.author}
//               </h1>

//               {/* Image ID */}
//               <p className="text-lg">
//                 ID: {elem.id}
//               </p>

//               {/* Image Width */}
//               <h1 className="text-xl font-bold">
//                 Width: {elem.width}
//               </h1>

//               {/* Image Height */}
//               <h1 className="text-lg">
//                 Height: {elem.height}
//               </h1>

//             </div>
//           );
//         })}

//       </div>
//     </div>
//   );
// };

// export default App;



import { useContext } from 'react'

import Header from './components/header.jsx'
import Footer from './components/Footer.jsx'
import Section from './components/Section.jsx'
import { DataContext } from './context/Usercontext.jsx'


const App = () => {
  
const data = useContext(DataContext)
  return (
    
    <div>
    <h1 className='text-5xl text-white p-16'> this App  {data.username}</h1>
      <Header />
    <Footer />
    <Section />
    </div>
  )
}

export default App
