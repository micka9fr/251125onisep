import "./App.css";
import FlexH1stGrow from "./components/layout/FlexH1stGrow/FlexH1stGrow";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import {emptyMeme, MemeSVGViewer, type MemeInterface} from "orsys-tjs-meme";


import Navbar from "./components/ui/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [current, setCurrent] = useState<MemeInterface>(emptyMeme);
  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <FlexH1stGrow>
          <MemeSVGViewer image={undefined} meme={current} basePath=""/>
          <MemeForm meme={current} onMemeChange={meme=>setCurrent(meme)}/>
        </FlexH1stGrow>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}

export default App;
