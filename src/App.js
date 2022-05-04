import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/Nav";
import ProfileInfo from "./components/Profile/ProfileInfo/ProfileInfo";
import Dialogs from "./components/Dialogs/Dialogs"
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";

const App = (props) => {
    return (
        <BrowserRouter>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav state={props.appState.friendBlockList}/>
                    <div className='app-wrapper-content'>
						<Routes>
							<Route path="/profile" element={<Profile state={props.appState.profilePage}/>}/>
							<Route path="/dialogs" element={<Dialogs state={props.appState.dialogPage} />}/>
                            <Route path="/news" element={<News />}/>
                            <Route path="/music" element={<Music />}/>
                            <Route path="/settings" element={<Settings />}/>
                        </Routes>
                    </div>
                </div>
        </BrowserRouter>
    )
}

export default (App);
