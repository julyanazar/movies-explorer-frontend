import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

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

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";

import InfoTooltip from "../InfoTooltip/InfoTooltip";
import authSuccess from "../../images/popup-result-icon.svg";
import authError from "../../images/popup-result-icon-error.svg";



function App() {

    const [currentUser, setCurrentUser] = useState({});

    const [loggedIn, setIsLoggedIn] = useState(false);
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
    const [tooltipImage, setTooltipImage] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();

    function tokenCheck() {
        const token = localStorage.getItem("token");
        if (token) {
            auth.checkToken(token)
                .then((res) => {
                    if (res) {
                        setIsLoggedIn(true);
                        history.push("/movies");
                    }
                })
                .catch(err => console.log(`Неверный токен: ${err}`));
            return token;
        }
    }

    useEffect(() => {
        tokenCheck();
    }, [loggedIn]);

    function closeAllPopaps() {
        setIsInfoTooltipOpen(false);
    }

    function onRegister(name, email, password) {
        auth.register(name, email, password)
            .then((res) => {
                setIsInfoTooltipOpen(true);
                setTooltipImage(authSuccess);
                setIsLoggedIn(true);
                setMessage("Вы успешно зарегистрировались!");
                history.push("/movies");
            })
            .catch((err) => {
                setIsInfoTooltipOpen(true);
                setTooltipImage(authError);
                setMessage("Что-то пошло не так! Попробуйте еще раз");

                console.log(err)
            })
    }

    function onLogin(email, password) {
        auth.authorize(email, password)
            .then((res) => {
                if (res.token) {
                    localStorage.setItem("token", res.token);
                    setIsLoggedIn(true);
                    history.push("/movies");
                }
            })
            .catch((err) => {
                setIsInfoTooltipOpen(true);
                setTooltipImage(authError);
                setMessage("Что-то пошло не так! Попробуйте ещё раз.");
            });
    }

    function onSignOut() {
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        history.push("/signin");
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
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
                        {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/saved-movies">
                        <Header loggedIn={true} />
                        <SavedMovies />
                        <Footer />
                        {loggedIn ? <Redirect to="/saved-movies" /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/signup">
                        <Register onRegister={onRegister} />
                    </Route>
                    <Route path="/signin">
                        <Login onLogin={onLogin} />
                    </Route>
                    <Route path="/profile">
                        <Header loggedIn={true} />
                        <Profile onSignOut={onSignOut} />
                        {loggedIn ? <Redirect to="/profile" /> : <Redirect to="/" />}
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
                <InfoTooltip
                    isOpen={isInfoTooltipOpen}
                    onClose={closeAllPopaps}
                    image={tooltipImage}
                    message={message}
                    loggedIn={loggedIn}
                />
            </div>
        </CurrentUserContext.Provider>
    );
};

export default App;