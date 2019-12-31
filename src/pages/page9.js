import React from 'react';
import { Link } from "react-router-dom";
import './page9.css';
import '../components/screen_image/screenImage.css';
import '../components/page_background/pageBackground.css';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Page6 extends React.Component {

    p9Button1Click = () => {
        window.open(
            "/page8", "_self"
        );
    }

    p9Button2Click = () => {
        window.open(
            "/page10", "_self"
        );
    }

    p9Button3Click = () => {
        window.open(
            "/page11", "_self"
        );
    }

    render() {
        return (

            <div>

                <div className="screenImageContainer">
                    <img className="screenImage" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_09B.png"} alt={"Sketch Screen"} />

                    <Link className="p9Button1" onClick={this.p9Button1Click}></Link>

                    <Link className="p9Button2" onClick={this.p9Button2Click}></Link>

                    <Link className="p9Button3" onClick={this.p9Button3Click}></Link>

                </div>

            </div>
            
        );
    }

}

export default Page6;