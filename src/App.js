// import logo from './logo.svg';
// import './App.css';
// let constbutton={
//   backgroundColor:"red",
// }
import './App.css';
import Header from './Components/Header/Header.js';
import Btn from './Components/Button/Button.js';
import Hero from './Components/Hero/Hero.js';
import Main from './Components/Main/Main.js';
import Card from './Components/Card/Card.js';
import Footer from './Components/Footer/Footer.js'


function App() {
  return (
    <div >
      <Header/>
      <Hero/>
      <Main/>
      <Card/>
      <Footer/>
      
    </div>
  );
}

export default App;
