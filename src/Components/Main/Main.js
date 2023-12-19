import './Main.css';
import Btn from '../Button/Button.js';


const Main=function(){
    return (
        <div className="main_container">
            <div className="main_left">
                <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"/>

            </div>
            <div className="main_right">
                <h3 className="main_right_heading">Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit. Tempore, <br/>debitis.</h3>
                <p className="main_right_content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae!<br/> Quidem est esse numquam odio deleniti, beatae, magni dolores provident <br/>quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <div className="main_right_btn">
            <Btn title="Get in touch" id="Get_in_touch"/>
            </div>
            </div>
             </div>
    )
}
export default Main;