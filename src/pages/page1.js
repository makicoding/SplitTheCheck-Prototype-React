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
        // After 2.5 seconds, execute the function goToPage2
        setTimeout(() => (this.goToPage2()), 2500)
    }

    render() {
        return (

            <div>

                <div className="screenImageContainer">
                    <img className="screenImage" id="screen1" src={"./assets/images/screens_exported_from_sketch_2x_png/HiFi_iPhone_XS_01B.png"} alt={"Sketch Screen"} />
                </div>

            </div>
            
        );
    }

}

export default Page1;