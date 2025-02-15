import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage as the default storage engine
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import { combineReducers } from "redux";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.MODE !== "production",
});

// Create persistor
const persistor = persistStore(store);

export { store, persistor };
