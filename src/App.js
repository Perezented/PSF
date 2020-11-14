import "./App.scss";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Contact from "./components/contactUs";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact">
          <Contact
            bannerInfo={[
              "img2",
              "Contact Pro-Select Flooring",
              "Let us know if there is anything we can do for you and your company. Use the form below to get a hold of us directly through the email."
            ]}
            classInfo={"contact"}
          />
        </Route>
        <Route path="/joinUs">
          <Contact
            bannerInfo={[
              "img1",
              "Join our team at Pro-Select Flooring",
              "Would you like to assist the best of the best in the flooring business? Use the form below to get a hold of us directly through the email."
            ]}
            classInfo={"join"}
          />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
