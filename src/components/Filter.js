import React from 'react'

const Filter = ({searchQuery, setSearchQuery, selectedRegion, setSelectedRegion}) => {
  return (
    <section className='filter'>
        <div className='region'>
            <select name ='select' id='select' className='select'
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}>
                <option value = ''>Filter by Region</option>
                <option value = 'Asia'>Asia</option>
                <option value = 'Africa'>Africa</option>
                <option value = 'Europe'>Europe</option>
                <option value = 'Oceania'>Oceania</option>
            </select>
        </div>
    </section>
  )
}

export default Filter

