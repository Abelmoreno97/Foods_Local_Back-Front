import Detail from "./Views/Detail/Detail";
import Form from "./Views/Form/Form";
import Home from "./Views/Home/Home";
import Landing from "./Views/Landing/Landing";
import { Route } from "react-router-dom";
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div>

    <NavBar/>

      <Route path={"/"}>
        <Landing />
      </Route>

      <Route exact path={"/detail"}>
        <Detail />
      </Route>

      <Route exact path={"/create"}>
        <Form />
      </Route>

      <Route exact path={"/home"}>
        <Home></Home>
      </Route>
    </div>
  );
}

export default App;
