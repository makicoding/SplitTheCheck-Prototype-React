import React from 'react';
import { Link } from "react-router-dom";
import './page5.css';
import '../components/screen_image/screenImage.css';
import '../components/page_background/pageBackground.css';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Page5 extends React.Component {

    p5Button1Click = () => {
        window.open(
            "/page4", "_self"
        );
    }

    p5Button2Click = () => {
        window.open(
            "/page6", "_self"
        );
    }

    render() {
        return (

            <div>

                <div className="screenImageContainer">
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_05B.png"} alt={"Sketch Screen"} />

                    <Link className="p5Button1" onClick={this.p5Button1Click}></Link>

                    <Link className="p5Button2" onClick={this.p5Button2Click}></Link>
                </div>

            </div>
            
        );
    }

}

export default Page5;