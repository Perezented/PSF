import "./App.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/main/Header";
import HomePage from "./components/main/HomePage";
import Gallery from "./components/main/Gallery";
import Footer from "./components/main/Footer";
import Contact from "./components/main/contactUs";
import { NotFound } from "./components/sub/NotFound";
import ScrollToTop from "./components/helper/scrollToTop";
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
      <Router>
        <ScrollToTop />
        <Header />
        <div className="fade">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/contact">
              <Contact
                bannerInfo={bannerInfo["contact"]}
                classInfo={"contact"}
              />
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
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
