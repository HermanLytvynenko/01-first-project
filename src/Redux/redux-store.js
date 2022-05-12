import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsBlockReducer from "./friendsBlock-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    friendBlockList: friendsBlockReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;