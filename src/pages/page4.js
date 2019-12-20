import React from 'react';
import { Link } from "react-router-dom";
import './page4.css';
import '../components/screen_image/screenImage.css';
import '../components/page_background/pageBackground.css';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Page4 extends React.Component {

    p4Button1Click = () => {
        window.open(
            "/", "_self"
        );
    }

    p4Button2Click = () => {
        window.open(
            "/page5", "_self"
        );
    }

    render() {
        return (

            <div>

                <div className="screenImageContainer">
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_4.png"} alt={"Sketch Screen"} />

                    <Link className="p4Button1" onClick={this.p4Button1Click}></Link>

                    <Link className="p4Button2" onClick={this.p4Button2Click}></Link>
                </div>

            </div>
            
        );
    }

}

export default Page4;