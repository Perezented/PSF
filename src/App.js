import "./App.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/main/Header";
import HomePage from "./components/main/HomePage";
import Gallery from "./components/main/Gallery";
import Footer from "./components/main/Footer";
import Contact from "./components/main/contactUs";
import { NotFound } from "./components/sub/NotFound";
import Button from "./components/sub/Button";
import { useEffect, useState } from "react";
import { useScrolling } from "./components/helper/useScrolling";
function App() {
  const [buttonText, setButtonText] = useState("Contact Us");
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
  useScrolling();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let buttonTop = document
        .querySelectorAll("section")[1]
        .getBoundingClientRect().bottom;
      if (buttonTop <= 250) {
        document
          .getElementsByTagName("button")[0]
          .classList.add("circleButton");
        setButtonText(<i className="fas fa-headset fa-2x" />);
      } else {
        document
          .getElementsByTagName("button")[0]
          .classList.remove("circleButton");
        setButtonText("Contact Us");
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="fade">
          <Switch>
            <Route exact path="/">
              <Button text={buttonText} />
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
