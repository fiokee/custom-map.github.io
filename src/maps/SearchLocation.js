import React, {useState} from 'react'
import axios from 'axios'

export const SearchLocation = () => {

  const [searchText, setSearchText] = useState('');
  const [locations, setLocations] = useState([]);

  const handleChange = async (event) => {
    setSearchText(event.target.value);
    const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${searchText}&format=json`);
    setLocations(response.data);
  };
  console.log(searchText)
  return (
    <div><h1>Location</h1>
    
    <input type="text" value={searchText} onChange={handleChange} />
      <ul>
        {locations.map((location) => (
          <li key={location.osm_id}>
            {location.display_name}
            <br />
            {location}, {location}
          </li>
        ))}
      </ul>
    </div>
  )
}
