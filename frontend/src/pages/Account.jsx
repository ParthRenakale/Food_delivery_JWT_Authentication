// import React from 'react';
// import FoodSelection from '../components/FoodSelection';

// import MapModal from '../components/ButtonWithModal';

// function Account() {
//   const username = localStorage.getItem('username');

//   return (
//     <div className="w-full h-screen bg-[#1a1a1a] flex-col justify-center">
//       <h2 className="text-3xl m-8 font-serif text-orange-400">
//         Welcome {username}, please select your order!
//       </h2>
//       <FoodSelection />
//       <MapModal className="m-auto"/>
//     </div>
//   );
// }

// export default Account;
import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import FoodSelection from '../components/FoodSelection';
import MapModal from '../components/ButtonWithModal';

function Account() {
  const { username } = useParams(); // Destructure username from route params

  return (
    <div className="w-full h-screen bg-[#1a1a1a] flex-col justify-center">
      <h2 className="text-3xl m-8 font-serif text-orange-400">
        Welcome {username}, please select your order!
      </h2>
      <FoodSelection />
      <MapModal className="m-auto"/>
    </div>
  );
}

export default Account;
