import React, {useState, useEffect} from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import Styles from './search.module.css';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?"
const params = {
  q: '',
  format: 'json',
  addressdetails: 'addressdetails'
}

export const SearchBox = (props) => {
  const {selectPosition, setSelectPosition} = props;
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  console.log(searchText);

  useEffect(() => {
    const fetchPlaces = async () => {
        // if (searchText.length === 0) {
        //   setListPlace([]);
        //   return;
        // }
      const params = {
        q: searchText,
        format: 'json',
        addressdetails: 1,
        polygon_geojson: 0
      };
      const queryString = new URLSearchParams(params).toString();
      const requestOptions ={
        method: 'GET',
        redirect: 'follow'
      };
      try {
        const response = await fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions);
        const result = await response.text();
        setListPlace(JSON.parse(result));
      } catch (err) {
        console.log('error:', err);
      }
    };

    /*If the length of the searchText is 0, it will not run the hook.*/
  
    if (searchText.length > 0) {
      fetchPlaces();
    }
  }, [searchText]);


  return (
    <div className={Styles.container}>
      <div className={Styles.container_search}>
        <div className={Styles.container_output}>

          <OutlinedInput style={{width: '100%'}}
          placeholder="search location" value={searchText}
            onChange={(event)=>{
              setSearchText(event.target.value);
            }}/>
        </div>
        
        </div>
        <div>
        <nav aria-label="main mailbox folders">
        <List aria-label="main mailbox folders">
          {listPlace.map((item)=>{
            //osm_id
              return(
                <div key={item?.place_id}>
                  <ListItem onClick={()=>{
                    setSelectPosition(item);
                  }}>
                  <ListItemButton>
                  <ListItemIcon>
                    <img className={Styles.location_Img} src='./placeholder.png' />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItemButton>
              </ListItem>
              <Divider/>
                </div>
              )
            })
          }
          
        </List>
      </nav>
        </div>
    </div>
  )
}
