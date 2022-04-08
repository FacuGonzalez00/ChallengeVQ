import logo from './logo.svg';
import './App.css';

//Components
import Navbar from './components/NavBar/Navbar';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import Card from './components/Card/Card';
 

function App() {
  return (
    <div className="App" style={{
      backgroundImage: "url('https://cdn.wallpapersafari.com/83/59/cTdHv0.jpg')",
      height:'900px',

      backgroundRepeat: "no-repeat"
    }}>
      <Navbar/>
      <Card/>
    </div>
  );
}

export default App;
