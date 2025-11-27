import { configureStore } from "@reduxjs/toolkit";
import currentReducer, { update } from "./current";

import { emptyMeme } from "orsys-tjs-meme";
import ressourcesReducer, { loadRessources } from "./ressources";
//import MemeForm from "../components/MemeForm/MemeForm";


export const store = configureStore( { reducer:{ current:currentReducer , ressources:ressourcesReducer } });

store.subscribe(()=>{
    console.log(
        '%c%s',
        'font-size:24;color:tomato',
        'changement d\'etat du store'
    );
    console.log(store.getState());
});

store.dispatch(update(emptyMeme));
store.dispatch(loadRessources());

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;


