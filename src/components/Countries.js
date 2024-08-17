import React, {useState, useEffect} from 'react'
import Filter from './Filter'

const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [searchQuery, setSearchQuery] = useState(''); //state to hold search query
    const [selectedRegion, setSelectedRegion] = useState('');
    // const [favorites, setFavorites] = useState([]);

//fetch data from rest countries API
    const fetchCountryData = async() => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
    };

    useEffect(() => {
        fetchCountryData()
        // setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);  // Load favorites from localStorage when the component mounts
    }, [])

// Filter countries based on the search query
const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (country.capital && country.capital[0].toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRegion = selectedRegion === '' || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

//call and load database from rest countries API
  return (
    <>
    {/* Pass selectedRegion and setSelectedRegion to Filter component */}
    <Filter
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
     <div className='search-container'>
        <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
                // style={{ margin: '20px', padding: '10px', fontSize: '16px'}}
        />
    </div>
    <section className='country-container'>
    {filteredCountries.map((country) => {
        const {name, population, region, capital, flags} = country

        return <article key = {name.common}>
            <div>
                <img src={flags.png} alt={name.common} />
                <div className='details'>
                    <h3>{name.common}</h3>
                    <h4>Population: <span>{population}</span></h4>
                    <h4>Region: <span>{region}</span></h4>
                    <h4>Capital: <span>{capital}</span></h4>
                </div>
            </div>
        </article>
    })}
    </section>
    </>
  )
}

// const handleFavoriteClick = (country) => {
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

export default Countries