import { configureStore } from "@reduxjs/toolkit";
import currentReducer, { update } from "./current";
//import { emptyMeme } from "orsys-tjs-meme";
import { loadRessources } from "./ressources";

export const store = configureStore( { reducer:{ current:currentReducer } } );

store.subscribe(()=>{
    console.log(
        '%c%s',
        'font-size:24;color:tomato',
        'changement d\'etat du store'
    );
    console.log(store.getState());
});

store.dispatch(loadRessources());