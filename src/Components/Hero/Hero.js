 import "./Hero.css"
import Btn from '../Button/Button.js'

 function Hero(){
    return(
        <div className="herocontainer">
            <img src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="first_img"/>
            <div className="content_on_image">
                <h1 id="first_content">Let us find your</h1>
                <h1 id="second_content">Forever Food.</h1>
                <h2 className="thirdPara">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
                
                <h2 className="thirdPara">Nesciunt illo tenetur fuga ducimus numquam ea!</h2>

                <div id="btns">
                <Btn id="Search_Now" title="Search Now"/>
                <Btn id="know_more" title="know more"/>
            </div>     

            </div>
           
        </div>
    );
 }
 export default Hero;