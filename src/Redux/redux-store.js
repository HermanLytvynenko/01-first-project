import {combineReducers, legacy_createStore as createStore} from "redux";
import profileRecuder from "./profile-reducer";
import dialogsRecuder from "./dialogs-reducer";
import friendsBlockRecuder from "./friendsBlock-reducer";

let reducers = combineReducers({
    profilePage: profileRecuder,
    dialogPage: dialogsRecuder,
    friendBlockList: friendsBlockRecuder,
})

let store = createStore(reducers);

export default store;