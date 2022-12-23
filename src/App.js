import Maps  from "./Maps";
import { SearchBox } from "./SearchBox";
import Styles from './Maps.module.css';


function App() {
  return (
    <div className={Styles.container}>
    <div className={Styles.maps}>
      <Maps/>
    </div>
    <div className={Styles.search}>
      <SearchBox/>
    </div>
    </div>
  );
}

export default App;
