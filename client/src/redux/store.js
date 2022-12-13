import {legacy_createStore,compose} from "redux"
import storeReducer from "./reducer"
const createComposer=window.__REDUX_DEVTOOLS_EXTENSION__||compose
const store=legacy_createStore(storeReducer,createComposer())

export default store