// import React, {useState} from "react";
// import fetchWeather from "./Api/fetchweather";
// import { BsFillCloudSunFill } from 'react-icons/bs';


// const Aplication = () => {
//     const [query , setQuery] = useState('');
//     const [weather, setWeather] = useState({});

//     const search = async (e) => {
//         if(e.key === 'Enter'){
//             const data = await fetchWeather(query);
//             setWeather(data);
//             setQuery();
//             console.log(data);
//         }
//     }

//     return(
//         <div>
//             <div className="main_container">
//                     <input 
//                         type="text" 
//                         placeholder="Search..." 
//                         className="Search"
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         onKeyPress={search}
//                     />   
//                     {weather.min && (
//                         <div className="card">
//                             <div className="cardHead">
//                                 <BsFillCloudSunFill/>
//                                 {weather.main.temp}
//                                 <sup>&deg;C</sup>
//                                 <p>{weather.weather[0].description}</p>
//                             </div>
//                             <div className="cardBody">
//                                 {weather.id}  
//                             </div>
//                         </div>
//                     )}    
//             </div>   
            
//         </div>
//     )
// }

// export default Aplication;