import "./App.scss";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Contact from "./components/contactUs";
import { Route, BrowserRouter as Router } from "react-router-dom";

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
        <Route exact path="/" component={HomePage} />
        <Route path="/contact">
          <Contact bannerInfo={bannerInfo["contact"]} classInfo={"contact"} />
        </Route>
        <Route path="/joinUs">
          <Contact bannerInfo={bannerInfo["join"]} classInfo={"join"} />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
