// import React, { useState, useEffect } from 'react';
// import './Food.css';

// const foodOptions = [
//   { id: 1, name: 'Pizza', image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp' },
//   { id: 2, name: 'Burger', image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp' },
//   { id: 3, name: 'Pasta', image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp' },
//   { id: 4, name: 'Sushi', image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp' },
//   { id: 5, name: 'Salad', image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp' },
// ];

// const FoodSelection = () => {
//   const [selectedFoods, setSelectedFoods] = useState([]);

//   // Load selected foods from localStorage on mount
//   useEffect(() => {
//     const storedOrder = JSON.parse(localStorage.getItem('foodOrder'));
//     if (storedOrder) {
//       setSelectedFoods(storedOrder);
//     }
//   }, []);

//   // Handle food selection
//   const handleFoodSelection = (food) => {
//     if (!selectedFoods.includes(food)) {
//       const newOrder = [...selectedFoods, food];
//       setSelectedFoods(newOrder);
//       localStorage.setItem('foodOrder', JSON.stringify(newOrder));
//     }
//   };

//   return (
//     <div className="food-selection-container">
//       <h1>Select Your Food</h1>
//       <div className="food-options">
//         {foodOptions.map((food) => (
//           <div key={food.id} className="food-option" onClick={() => handleFoodSelection(food)}>
//             <img src={food.image} alt={food.name} />
//             <h3>{food.name}</h3>
//           </div>
//         ))}
//       </div>
//       <h2>Your Order</h2>
//       <div className="order-list">
//         {selectedFoods.length > 0 ? (
//           selectedFoods.map((food, index) => (
//             <div key={index} className="order-item">
//               <img src={food.image} alt={food.name} />
//               <span>{food.name}</span>
//             </div>
//           ))
//         ) : (
//           <p>No food selected yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodSelection;
import React, { useState, useEffect } from 'react';
import './Food.css';

const foodOptions = [
  { id: 1, name: 'Pizza', image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp' },
  { id: 2, name: 'Burger', image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp' },
  { id: 3, name: 'Pasta', image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp' },
  { id: 4, name: 'Sushi', image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp' },
  { id: 5, name: 'Salad', image: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp' },
];

const FoodSelection = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);

  // Load selected foods from localStorage on mount
  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem('foodOrder'));
    if (storedOrder) {
      setSelectedFoods(storedOrder);
    }
  }, []);

  // Handle food selection
  const handleFoodSelection = (food) => {
    if (!selectedFoods.includes(food)) {
      const newOrder = [...selectedFoods, food];
      setSelectedFoods(newOrder);
      localStorage.setItem('foodOrder', JSON.stringify(newOrder));
    }
  };

  // Handle submitting the order (clearing the screen)
  const handleSubmit = () => {
    setSelectedFoods([]); // Clear the state (screen only)
    alert('Order Submitted!'); // Optional: Notify user of submission
  };

  return (
    <div className="food-selection-container">
      <h1>Select Your Food</h1>
      <div className="food-options">
        {foodOptions.map((food) => (
          <div key={food.id} className="food-option" onClick={() => handleFoodSelection(food)}>
            <img src={food.image} alt={food.name} />
            <h3>{food.name}</h3>
          </div>
        ))}
      </div>
      <h2>Your Order</h2>
      <div className="order-list">
        {selectedFoods.length > 0 ? (
          selectedFoods.map((food, index) => (
            <div key={index} className="order-item text-white">
              <img src={food.image} alt={food.name} />
              <span>{food.name}</span>
            </div>
          ))
        ) : (
          <p>No food selected yet.</p>
        )}
      </div>
      <button className="submit-button bg-lime-800 text-white rounded p-2" onClick={handleSubmit}>Submit Order</button>
    </div>
  );
};

export default FoodSelection;
