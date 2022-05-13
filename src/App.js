import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Routes, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    let state = props.store.getState();
    return (
                <div className='app-wrapper'>
                    <Header/>
                    <Nav state={state.friendBlockList}/>
                    <div className='app-wrapper-content'>
						<Routes>
							<Route path="/profile" element={<Profile store={props.store} />}/>
							<Route path="/dialogs" element={<DialogsContainer />}/>
							<Route path="/users" element={<UsersContainer />}/>
                            <Route path="/news" element={<News />}/>
                            <Route path="/music" element={<Music />}/>
                            <Route path="/settings" element={<Settings />}/>
                        </Routes>
                    </div>
                </div>
    )
}

export default (App);
