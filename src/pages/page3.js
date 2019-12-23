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
            "/page4", "_self"
        );
    }

    render() {
        return (

            <div>

                <div className="screenImageContainer">
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_03B.png"} alt={"Sketch Screen"} />

                    <Link className="p3Button1" onClick={this.p3Button1Click}></Link>
                </div>

            </div>
            
        );
    }

}

export default Page3;