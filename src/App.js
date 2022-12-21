import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Componentes/Home";
import { DiAndroid } from "react-icons/di";
import Navbar from "./Componentes/Navbar";
import Menu from "./Componentes/Menu";
import Amigos from "./Componentes/Amigos";

function App() {
  return (
    <div>
      <Router>
        <header>
          <Navbar />
        </header>
        <section>
          <Menu />
        </section>
        <aside>
          <Amigos />
        </aside>
        <body className="meio">
          <Routes>
            <Route path="/Home" element={<Home />} />
          </Routes>
          <DiAndroid />
        </body>
      </Router>
    </div>
  );
}

export default App;
