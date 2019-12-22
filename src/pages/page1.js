import React from 'react';
import { Link } from "react-router-dom";
import './page1.css';
import '../components/screen_image/screenImage.css';
import '../components/page_background/pageBackground.css';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Page1 extends React.Component {

    p1Button1Click = () => {
        window.open(
            "/page2", "_self"
        );
    }

    p1Button2Click = () => {
        window.open(
            "/page4", "_self"
        );
    }

    p1Button3Click = () => {
        window.open(
            "/page3", "_self"
        );
    }

    render() {
        return (

            <div>

                <div className="screenImageContainer">
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_01B.png"} alt={"Sketch Screen"} />

                    <Link className="p1Button1" onClick={this.p1Button1Click}></Link>

                    <Link className="p1Button2" onClick={this.p1Button2Click}></Link>

                    <Link className="p1Button3" onClick={this.p1Button3Click}></Link>
                </div>

            </div>
            
        );
    }

}

export default Page1;