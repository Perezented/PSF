import "./App.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/contactUs";
import { NotFound } from "./components/NotFound";

function App() {
  const bannerInfo = {
    contact: [
      "img2",
      "Contact Pro-Select Flooring",
      "Have a question or a comment? Let us know if there is anything we can do for you and your company. Use the form below to get a hold of us directly through the email. We will respond as soon as possible."
    ],
    join: [
      "img1",
      "Join our team at Pro-Select Flooring",
      "Would you like to assist and become the best of the best in the flooring business? Use the form below to get a hold of us directly through the email. We will respond as soon as possible."
    ]
  };
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact">
            <Contact bannerInfo={bannerInfo["contact"]} classInfo={"contact"} />
          </Route>
          <Route exact path="/joinUs">
            <Contact bannerInfo={bannerInfo["join"]} classInfo={"join"} />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route>
            <NotFound />
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
