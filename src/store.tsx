import { configureStore } from "@reduxjs/toolkit";

// LE FICHIER STORE DOIT ETRE EN .TSX

// toujours importer le reducer dans le store. Vu qu'on les export default on peut les appeler comme on veut
import shadowReducer from "./Redux/shadowsSlice.tsx";
import boxPropertiesReducer from "./Redux/boxPropertiesSlice.tsx";

export const store = configureStore({
  // en fonction de comment je les appelle ici, je vais devoir réutiliser ce nom pour useSelector((state) => state.shadowReducer)
  reducer: {
    shadowReducer,
    boxPropertiesReducer,
  },

  // facultatif : on peut utiliser des middlewares Redux par défault ou creer nos propres MDW
  //logger ====  un MDW premade
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// AVEC TS ON DOIT UTILISER ROOTSTATE + APPDISPATCH

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
