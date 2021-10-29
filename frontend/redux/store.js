import {
    configureStore,
    combineReducers,
    createStore,
    applyMiddleware,
} from "@reduxjs/toolkit";
import { reducers } from "./reducers";
import { createWrapper } from "next-redux-wrapper";

const combinedReducer = combineReducers({
    ...reducers,
});

// export const store = createStore();

const bindMiddleware = (middleware) => {
    // if (process.env.NODE_ENV !== "production") {
    //   const { composeWithDevTools } = require("redux-devtools-extension");
    //   return composeWithDevTools(applyMiddleware(...middleware));
    // }
    return applyMiddleware(...middleware);
};

export const makeStore = ({ isServer }) => {
    if (isServer) {
        return createStore(combinedReducer);
    } else {
        const { persistStore, persistReducer } = require("redux-persist");

        const storage = require("redux-persist/lib/storage").default;

        const persistConfig = {
            key: "nextjs",
            whitelist: ["cart"], // only counter will be persisted, add other reducers if needed
            storage, // if needed, use a safer storage
        };

        const persistedReducer = persistReducer(persistConfig, combinedReducer);

        const store = createStore(
            persistedReducer,
            // bindMiddleware([thunkMiddleware])
        ); // Creating the store again

        store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature

        return store;
    }
};

export const wrapper = createWrapper(makeStore);
