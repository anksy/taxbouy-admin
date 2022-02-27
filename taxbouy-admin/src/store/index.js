import { configureStore } from "@reduxjs/toolkit";

import { categoryApi } from "../services/query/category";
import applicationReducer from "./common/application.slice";

export const store = configureStore({
    reducer: {
        [categoryApi.reducerPath]: categoryApi.reducer,
        application: applicationReducer
    },
    middleware: (defaultMiddlewares) =>
        defaultMiddlewares()
            .concat(categoryApi.middleware),
});