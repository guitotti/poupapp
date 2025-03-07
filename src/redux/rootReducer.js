import { combineReducers } from "@reduxjs/toolkit";
import usuarioSlice from "./slices/usuarioSlice";
import objetivosTiposSlice from "./slices/objetivosTiposSlice";
import transacoesSlice from "./slices/transacoesSlice";
import contasSlice from "./slices/contasSlice";

const rootReducer = combineReducers({
  usuario: usuarioSlice,
  objetivos: objetivosTiposSlice,
  transacoes: transacoesSlice,
  contas: contasSlice,
});

export default rootReducer;
