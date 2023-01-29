import React, {useState} from "react";
import Maps  from "./Maps";
import { SearchBox } from "./SearchBox";
import Styles from './Maps.module.css';
import { SearchLocation } from "./maps/SearchLocation";


function App() {

  //selecting position on the map
  const [selectPosition, setSelectPosition] = useState(null);
  console.log(selectPosition);
  return (
    <div className={Styles.container}>
    <div className={Styles.maps}>
      <Maps selectPosition={selectPosition}/>
    </div>
    <div className={Styles.search}>
      <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
    </div>
    {/* <SearchLocation/> */}
    </div>
  );
}

export default App;
