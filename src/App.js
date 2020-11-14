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
        <Route path="/contact" component={Contact} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
