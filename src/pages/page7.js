import React from 'react';
import { Link } from "react-router-dom";
import './page7.css';
import '../components/screen_image/screenImage.css';
import '../components/page_background/pageBackground.css';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Page7 extends React.Component {

    p7Button1Click = () => {
        window.open(
            "/page6", "_self"
        );
    }

    p7Button2Click = () => {
        window.open(
            "/page8", "_self"
        );
    }

    render() {
        return (

            <div>

                <div className="screenImageContainer">
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_07B.png"} alt={"Sketch Screen"} />

                    <Link className="p7Button1" onClick={this.p7Button1Click}></Link>

                    <Link className="p7Button2" onClick={this.p7Button2Click}></Link>

                </div>

            </div>
            
        );
    }

}

export default Page7;