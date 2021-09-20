import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

import "./App.css";
import PageNotFound from "../PageNotFound/PageNotFound";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import * as auth from "../../utils/auth";
import * as moviesApi from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";

import * as utils from "../../utils/utils";
import * as messages from "../../utils/constants";

import InfoTooltip from "../InfoTooltip/InfoTooltip";
import authSuccess from "../../images/popup-result-icon.svg";
import authError from "../../images/popup-result-icon-error.svg";



function App() {

    const [currentUser, setCurrentUser] = useState({});

    const [loggedIn, setIsLoggedIn] = useState(false);
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
    const [tooltipImage, setTooltipImage] = useState("");
    const [message, setMessage] = useState("");

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [savedMovies, setSavedMovies] = useState([]);
    const [movieSearchError, setMovieSearchError] = useState("");

    const history = useHistory();

    const location = useLocation();
    const path = location.pathname;

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            auth.checkToken(token)
                .then((res) => {
                    if (res) {
                        setIsLoggedIn(true);
                        history.push(path);
                    }
                })
                .catch((err) => {
                    console.log(utils.getErrors(err));
                });
        } else {
            localStorage.removeItem("token");
        }
    }, [history]);

    function onRegister(name, email, password) {
        auth.register(name, email, password)
            .then((res) => {
                setIsInfoTooltipOpen(true);
                setTooltipImage(authSuccess);
                onLogin(email, password);
                setMessage(messages.REGISTER_SUCCESS);
                history.push("/movies");
            })
            .catch((err) => {
                setIsInfoTooltipOpen(true);
                setTooltipImage(authError);
                setMessage(utils.getErrors(err));

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
                setMessage(utils.getErrors(err));

                console.log(err);
            });
    }

    function onSignOut() {
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem('current-user');
        localStorage.removeItem('saved-movies');
        setCurrentUser({});
        setSavedMovies([]);
        history.push("/");
    }

    function closeAllPopaps() {
        setIsInfoTooltipOpen(false);
    }

    useEffect(() => {
        if (loggedIn) {

            const token = localStorage.getItem("token");
            Promise.all([mainApi.getUserInfo(token), mainApi.getSavedMovies(token)])
                .then(([userData, movies]) => {

                    setCurrentUser(userData);
                    setSavedMovies(movies);

                    localStorage.setItem("saved-movies", JSON.stringify(movies));
                    localStorage.setItem("current-user", JSON.stringify(userData));

                })
                .catch((err) => console.log(utils.getErrors(err)));
        }
    }, [loggedIn]);

    function getAllMovies() {

        setMovieSearchError("");
        setIsLoading(true);

        moviesApi.getMovies()
            .then((movies) => {

                localStorage.setItem("all-movies", JSON.stringify(movies));

                setMovies(utils.checkSavedMovies(movies, savedMovies));
                setMovieSearchError(messages.NOT_FOUND);

            })
            .catch((err) => {
                setMovieSearchError(messages.SERVER_ERROR);
                console.log(utils.getErrors(err));
            })
            .finally(() => {
                setIsLoading(false);
            });

    }

    function handleUpdateUserInfo({ name, email }) {

        mainApi.updateProfile({ name, email })
            .then((data) => {
                if (data) {
                    setCurrentUser(data);
                    setIsInfoTooltipOpen(true);
                    setTooltipImage(authSuccess);
                    setMessage(messages.PROFILE_UPDATE_SUCCESS);
                }
            })
            .catch((err) => {
                setIsInfoTooltipOpen(true);
                setTooltipImage(authError);
                setMessage(utils.getErrors(err));
                console.log(utils.getErrors(err));
            });
    }

    function handleSaveMovie(movie) {
        mainApi.addNewCard(movie)
            .then((savedMovie) => {
                setSavedMovies([savedMovie, ...savedMovies]);
            })
            .catch((err) => {
                console.log(utils.getErrors(err));
            });
    }

    function handleDeleteMovie(movie) {

        const movieId = movie.id || movie.movieId;
        const userMovie = savedMovies
            .find((savedMovie) =>
                savedMovie.movieId === String(movieId));

        mainApi.deleteMovie(userMovie._id)
            .then(() => {
                const newSavedMovies = savedMovies
                    .filter(
                        (savedMovie) => savedMovie.movieId !== String(movieId));

                setSavedMovies(newSavedMovies);
            })
            .catch((err) => {
                console.log(utils.getErrors(err));
            });
    }

    function handleCardClickButton(movie) {
        if (!movie.isSaved && !movie._id) {
            handleSaveMovie(movie);
        } else {
            handleDeleteMovie(movie);
        }
    }

    useEffect(() => {
        const allMovies = JSON.parse(localStorage.getItem("all-movies"));

        if (allMovies) {
            setMovies(utils.checkSavedMovies(allMovies, savedMovies));
            setMovieSearchError(messages.NOT_FOUND);
        } else {
            setMovieSearchError(messages.START_SEARCHING);
            setMovies([]);
        }
    }, [savedMovies]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <ProtectedRoute
                        path="/movies"
                        component={Movies}
                        isLoading={isLoading}
                        cards={movies}
                        loggedIn={loggedIn}
                        onGetMovies={getAllMovies}
                        onCardClickButton={handleCardClickButton}
                        movieSearchError={movieSearchError}
                    ></ProtectedRoute>
                    <ProtectedRoute
                        path="/saved-movies"
                        component={SavedMovies}
                        loggedIn={loggedIn}
                        savedMovies={savedMovies}
                        onCardClickButton={handleCardClickButton}
                    ></ProtectedRoute>
                    <Route path="/signup">
                        <Register onRegister={onRegister} />
                    </Route>
                    <Route path="/signin">
                        <Login onLogin={onLogin} />
                    </Route>
                    <ProtectedRoute
                        path="/profile"
                        component={Profile}
                        onSignOut={onSignOut}
                        loggedIn={loggedIn}
                        onUpdate={handleUpdateUserInfo}
                    ></ProtectedRoute>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
                <InfoTooltip
                    isOpen={isInfoTooltipOpen}
                    onClose={closeAllPopaps}
                    image={tooltipImage}
                    message={message}
                />
            </div>
        </CurrentUserContext.Provider>
    );
};

export default App;