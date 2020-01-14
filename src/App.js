import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import page1 from "./pages/page1";
import page2 from "./pages/page2";
import page3 from "./pages/page3";
import page4 from "./pages/page4";
import page5 from "./pages/page5";
import page6 from "./pages/page6";
import page7 from "./pages/page7";
import page8 from "./pages/page8";
import page9 from "./pages/page9";
import page10 from "./pages/page10";
import page11 from "./pages/page11";

// Run "npm start" to start React app.
// Run "npm i" or "npm i [specific component name]" in the command line if there are any dependencies missing in the node modules folder.

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={page1} />
          <Route exact path="/page2" component={page2} />
          <Route exact path="/page3" component={page3} />
          <Route exact path="/page4" component={page4} />
          <Route exact path="/page5" component={page5} />
          <Route exact path="/page6" component={page6} />
          <Route exact path="/page7" component={page7} />
          <Route exact path="/page8" component={page8} />
          <Route exact path="/page9" component={page9} />
          <Route exact path="/page10" component={page10} />
          <Route exact path="/page11" component={page11} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;