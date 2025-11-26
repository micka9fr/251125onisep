import "./App.css";
import FlexH1stGrow from "./components/layout/FlexH1stGrow/FlexH1stGrow";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import {emptyMeme, MemeSVGViewer} from "orsys-tjs-meme";


import Navbar from "./components/ui/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <FlexH1stGrow>
          <MemeSVGViewer image={undefined} meme={emptyMeme} basePath=""/>
          <MemeForm/>
        </FlexH1stGrow>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}

export default App;
