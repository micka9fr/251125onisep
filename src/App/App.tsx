import "./App.css";
import "./store/store.js";
import FlexH1stGrow from "./components/layout/FlexH1stGrow/FlexH1stGrow";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import {emptyMeme, type ImageInterface, MemeSVGViewer, type MemeInterface} from "orsys-tjs-meme";
//import {REST_ADR, REST_RESSOURCES} from "./constantes/config.js";


import Navbar from "./components/ui/Navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [current, setCurrent] = useState<MemeInterface>(emptyMeme);

  const [images, setImages] = useState<Array<ImageInterface>>([]);



  useEffect(()=>{
    //fetch(`${REST_ADR}${REST_RESSOURCES.images}`).then(r=>r.json()).then(arr=>setImages(arr))
  }) 

  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <FlexH1stGrow>
          <MemeSVGViewer image={images.find((img)=>img.id===current.imageId)} meme={current} basePath=""/>
          <MemeForm meme={current} onMemeChange={meme=>setCurrent(meme)} images={images}/>
        </FlexH1stGrow>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}

export default App;
