import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "react-responsive-modal/styles.css";
// import 'reactjs-popup/dist/index.css';
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
