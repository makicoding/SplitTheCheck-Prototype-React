import React from 'react';
import { Link } from "react-router-dom";
import './page1.css';
import '../components/screen_image/screenImage.css';
import '../components/page_background/pageBackground.css';

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

class Page1 extends React.Component {

    goToPage2 = () => {
        window.open(
            "/page2", "_self"
        );
    }

    componentDidMount() {
        document.getElementById("screen1").style.display = "block";
        document.getElementById("screen2").style.display = "none";

        // After 2.5 seconds...
        // setTimeout(() => (document.getElementById("screen2").style.display = "block"), 2000)
        // setTimeout(() => (document.getElementById("screen1").style.display = "none"), 2000)
        setTimeout(() => (this.goToPage2()), 2500)

        // Create a function where if the user reloads the page it automatically goes back to the splash page
    }

    render() {
        return (

            <div>

                <div className="screenImageContainer">
                    <img className="screenImage" id="screen1" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_01B.png"} alt={"Sketch Screen"} />

                    <img className="screenImage" id="screen2" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_02B.png"} alt={"Sketch Screen"} />
                </div>

            </div>
            
        );
    }

}

export default Page1;