import React from 'react';
import { Link } from "react-router-dom";
import './page3.css';
import '../components/screen_image/screenImage.css';
import '../components/page_background/pageBackground.css';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Page3 extends React.Component {

    p3Button1Click = () => {
        window.open(
            "/", "_self"
        );
    }

    p3Button2Click = () => {
        window.open(
            "/page7", "_self"
        );
    }

    p3Button3Click = () => {
        window.open(
            "/", "_self"
        );
    }

    render() {
        return (

            <div>

                <div className="screenImageContainer">
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_3.png"} alt={"Sketch Screen"} />

                    <Link className="p3Button1" onClick={this.p3Button1Click}></Link>

                    <Link className="p3Button2" onClick={this.p3Button2Click}></Link>

                    <Link className="p3Button3" onClick={this.p3Button3Click}></Link>
                </div>

            </div>
            
        );
    }

}

export default Page3;