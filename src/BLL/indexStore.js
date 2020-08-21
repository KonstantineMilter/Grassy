import {applyMiddleware, combineReducers, createStore} from "redux";
import userDataReducer from "./userData/userDataReducer";
import thunkMiddleware from "redux-thunk";
import {reducer} from "redux-form";
import fulAppSettingsReducer from "./fullAppSettings/fullAppSettingsReducer";



const reducers = combineReducers({
    fullAppSettings: fulAppSettingsReducer,
    userData: userDataReducer,
    form: reducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
console.log(store.getState());


export default store;