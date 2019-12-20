import React from 'react';
import { Link } from "react-router-dom";
import './page5.css';       // Leave this as is because page8 is a mirror of page5
import '../components/screen_image/screenImage.css';
import '../components/page_background/pageBackground.css';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Page8 extends React.Component {

    p8Button1Click = () => {
        window.open(
            "/page7", "_self"
        );
    }

    p8Button2Click = () => {
        window.open(
            "/page9", "_self"
        );
    }

    render() {
        return (

            <div>

                <div className="screenImageContainer">
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_5.png"} alt={"Sketch Screen"} />

                    <Link className="p5Button1" onClick={this.p8Button1Click}></Link>

                    <Link className="p5Button2" onClick={this.p8Button2Click}></Link>
                </div>

            </div>
            
        );
    }

}

export default Page8;