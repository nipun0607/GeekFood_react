// import logo from './logo.svg';
// import './App.css';
// let constbutton={
//   backgroundColor:"red",
// }
import './App.css';
import Navbar from './Component/Navbar/Header.js';
import Btn from './Components/Button/Button.js';
import Hero from './Components/Hero/Hero.js';
import Main from './Components/Main/Main.js';
import Grid from './Components/Grid/Card.js';
import Footer from './Components/Footer/Footer.js'


function App() {
  return (
    <div >
      <Header/>
      <Hero/>
      <Main/>
      <Grid/>
      <Footer/>
      
    </div>
  );
}

export default App;
