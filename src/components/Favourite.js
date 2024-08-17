// import React, { useState, useEffect } from 'react';

// const Favorite = (countries) => {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     // Load favorites from localStorage when the component mounts
//     setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
//   }, []);

//   const handleFavoriteClick = (country) => {
//     let updatedFavorites;
//     if (favorites.some(fav => fav.name.common === country.name.common)) {
//       updatedFavorites = favorites.filter(fav => fav.name.common !== country.name.common);
//     } else {
//       updatedFavorites = [...favorites, country];
//     }
//     setFavorites(updatedFavorites);
//     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//   };

//   const isFavorite = (country) => favorites.some(fav => fav.name.common === country.name.common);

//   return (
//     <div className="country-list">
//       {countries.map((country) => {
//         const { name, population, region, capital, flags } = country;

//         return (
//           <article key={name.common} className="country-card">
//             <div>
//               <img src={flags.png} alt={`${name.common} flag`} />
//               <h3>{name.common}</h3>
//               <h4>Population: <span>{population}</span></h4>
//               <h4>Region: <span>{region}</span></h4>
//               <h4>Capital: <span>{capital}</span></h4>
//               {/* Favorite Button */}
//               <button
//                 className={`favorite-btn ${isFavorite(country) ? 'favorite' : ''}`}
//                 onClick={() => handleFavoriteClick(country)}
//               >
              
//               </button>
//             </div>
//           </article>
//         );
//       })}
//     </div>
//   );
// };

// export default Favorite;
