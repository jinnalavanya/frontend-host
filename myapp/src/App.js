import "./App.css";
import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
import Routing from "./Routing";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
