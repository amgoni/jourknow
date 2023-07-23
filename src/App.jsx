import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Welcome from "./components/Welcome";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Router>
      <div>
        {/* Render the Header component */}
        <Header />

        {/* Define routes */}
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {/* Redirect to "/home" if the user is logged in */}
              {authCtx.isLoggedIn ? <Redirect to="/home" /> : <Welcome />}
            </>
          )}
        />

        {/* Render the About component */}
        <Route path="/about" component={About} />

        <Route path="/home" component={Home} />

        {/* Render the Footer component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
