import { useDispatch, useSelector } from "react-redux";
import FlexH1stGrow from "../components/layout/FlexH1stGrow/FlexH1stGrow";
import MemeForm from "../components/MemeForm/MemeForm.connected";
import MemeSVGViewer from "../components/ui/MemeSVGViewver/MemeSVGViewver.connected";
import { useEffect } from "react";
import type { appDispatch } from "../store/store";

import { clear, update } from "../store/current";
import { useNavigate, useParams } from "react-router";



const Editor = () => {
    const params = useParams();
    const memes = useSelector((s:RootState)=>s.ressources.memes)
    const d: appDispatch = useDispatch();
    const nav = useNavigate();

    useEffect(()=>{
        if (params.id === undefined) return;
        const cur = memes.find(m=>m.id===Number(params.id));
        if(cur){
            d(update(cur));
        } else {
            nav('/Editor');
        }
    
        return () => {
            d(clear());
        }
    }, [params.id, d, memes, nav]); 
    return (
        <FlexH1stGrow>
          <MemeSVGViewer />
          <MemeForm/>
        </FlexH1stGrow>
    );
}

export default Editor;