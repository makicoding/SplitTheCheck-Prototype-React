import React from 'react';
import { Link } from "react-router-dom";
import './page6.css';
import '../components/screen_image/screenImage.css';
import '../components/page_background/pageBackground.css';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Page6 extends React.Component {

    p6Button1Click = () => {
        window.open(
            "/page5", "_self"
        );
    }

    p6Button2Click = () => {
        window.open(
            "/page7", "_self"
        );
    }

    render() {
        return (

            <div>

                <div className="screenImageContainer">
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_06B.png"} alt={"Sketch Screen"} />

                    <Link className="p6Button1" onClick={this.p6Button1Click}></Link>

                    <Link className="p6Button2" onClick={this.p6Button2Click}></Link>

                </div>

            </div>
            
        );
    }

}

export default Page6;