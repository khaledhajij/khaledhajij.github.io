import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Styles/style.css";
import MyProjects from "./Components/MyProjects";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <MyProjects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
