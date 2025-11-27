import "./App.css";
import "./store/store.js";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Editor from "./pages/Editor.js";
import Home from "./pages/Home.js";
import Thumbnail from "./pages/Thumbnail.js";


function App() {
  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/Editor" Component={Editor}/>
          <Route path="/Edit/:id" Component={Editor}/>
          <Route path="/Thumbnail" Component={Thumbnail}/>
        </Routes>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}

export default App;
