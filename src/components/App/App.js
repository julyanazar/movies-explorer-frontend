import React from 'react';
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

function App() {

    return (
        <div className="app">
            <Switch>
                <Route exact path="/">
                    <Header loggedIn={false} />
                    <Main />
                    <Footer />
                </Route>
                <Route path="/movies">
                    <Header loggedIn={true} />
                    <Movies />
                    <Footer />
                </Route>
                <Route path="/saved-movies">
                    <Header loggedIn={true} />
                    <SavedMovies />
                    <Footer />
                </Route>
                <Route path="/signup">
                    <Register />
                </Route>
                <Route path="/signin">
                    <Login />
                </Route>
                <Route path="/profile">
                    <Header loggedIn={true} />
                    <Profile />
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
        </div>
    );
}

export default App;