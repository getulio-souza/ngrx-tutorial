import { iAppState } from "../../app/state/app.state";

export const livrosSelector = 
(appState: iAppState) => appState.livros.livros;

