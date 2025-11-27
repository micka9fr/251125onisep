import "./App.css";
import "./store/store.js";
import FlexH1stGrow from "./components/layout/FlexH1stGrow/FlexH1stGrow";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import MemeForm from "./components/MemeForm/MemeForm.connected";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";

import MemeSVGViewer from "./components/ui/MemeSVGViewver/MemeSVGViewver.connected";

import Navbar from "./components/ui/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <FlexH1stGrow>
          <MemeSVGViewer />
          <MemeForm/>
        </FlexH1stGrow>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}

export default App;
