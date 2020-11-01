import Header from "./components/header";
import Login from "./components/loginForm";
import Footer from "./components/footer";
import FriendsHomePage from "./components/firendsHomePage";
import {Switch, Route} from "react-router-dom";
import PrivateRoute from  "./utils/PrivatRoute";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      <PrivateRoute exact path="/homepage" component={FriendsHomePage} />
      <Route path="/login" component={Login} />
        {/* <Route path="" component={Login} /> */}
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
