import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";
import { Student, EditStudent, MainContent,AddStudent } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route exact path="/student/create" component={AddStudent} />
        <Route exact path="/student/:id" component={Student} />
        <Route exact path="/editStudent/:id" component={EditStudent} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
