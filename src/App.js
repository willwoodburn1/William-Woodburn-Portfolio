import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import SkillsAwards from "./pages/SkillsAwards";
import Projects from "./pages/Projects";



function App() {
  return (

    <Router>
      <div>
        <Heading />
        <Navbar />
        <Sidebar />

        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/skills-awards" component={SkillsAwards} />
          <Route exact path="/projects" component={Projects} />

        </Switch>

      </div>
    </Router>
  );
}

export default App;
