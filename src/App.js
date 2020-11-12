import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Contact from "./components/contactUs";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
