import React, {useState} from "react";
import Maps  from "./Maps";
import { SearchBox } from "./SearchBox";
import Styles from './Maps.module.css';


function App() {

  //selecting position on the map
  const [selectPosition, setSelectPosition] = useState(null);
  console.log(selectPosition);
  return (
    <div className={Styles.container}>
    <div className={Styles.maps}>
      <Maps/>
    </div>
    <div className={Styles.search}>
      <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
    </div>
    </div>
  );
}

export default App;
