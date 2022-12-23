import React, {useState} from 'react'
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

export const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <div className={Styles.container}>
      <div className={Styles.container_search}>
        <div className={Styles.container_output}>

          <OutlinedInput style={{width: '100%'}}
           value={searchText}
            onChange={(event)=>{
              setSearchText(event.target.value);
            }}/>
        </div>
        <div className={Styles.button}>
          <Button variant="contained" color="primary" onClick={()=>{
            
            // SEARCH
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
            fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
            .then((response)=> response.text())
            .then((result)=> {console.log(JSON.parse(result))
            })
            .catch((err)=> console.log('error:', err));

          }}>
            Search
          </Button>
        </div>
        </div>
        <div>
        <nav aria-label="main mailbox folders">
        <List>
          {
            [1,2,3,4,5].map((item)=>{
              return(
                <div key={item}>
                  <ListItem disablePadding>
                  <ListItemButton>
                  <ListItemIcon>
                    <img className={Styles.location_Img} src='./placeholder.png' />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
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
