import React, { useContext, useState, useEffect } from 'react';
import "./Profile.css";
import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import Form from "../Form/Form";
import Input from "../Input/Input";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useValidation } from "../../utils/validation";

const Profile = ({ onSignOut, onUpdate }) => {

    const currentUser = useContext(CurrentUserContext);
    const { values, errors, isValid, handleChange, setValues } = useValidation();

    const [visibleSubmitButton, setVisibleSubmitButton] = useState(false);
    const [isDisabledInput, setDisabledInput] = useState(true);

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdate({
            name: values.name || currentUser.name,
            email: values.email || currentUser.email,
        });

        setVisibleSubmitButton(false);
        setDisabledInput(true);
    }

    function handleClickEditButton() {
        setDisabledInput(false);
        setVisibleSubmitButton(true);
    }

    useEffect(() => {
        setValues(currentUser);
    }, [currentUser, setValues]);

    return (
        <>
            <Header />
            <section className="profile">
                <Welcome
                    text={currentUser.name}
                    loggedIn={true}
                    name="profile"
                />
                <Form
                    name="profile"
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <Input
                        editProfile
                        id="name"
                        label="Имя"
                        name="name"
                        type="text"
                        placeholder="Имя"
                        minLength="2"
                        maxLength="30"
                        onChange={handleChange}
                        value={values.name || ""}
                        error={errors.name}
                        required
                        autoComplete="off"
                        disabled={isDisabledInput}
                    />
                    <Input
                        editProfile
                        id="email"
                        label="E-mail"
                        name="email"
                        type="email"
                        placeholder="Почта"
                        onChange={handleChange}
                        value={values.email || ""}
                        error={errors.email}
                        required
                        autoComplete="off"
                        disabled={isDisabledInput}
                    />

                    <div className="profile__container">
                        {!visibleSubmitButton && (
                            <>
                                <button
                                    type="button"
                                    className="profile__button"
                                    onClick={handleClickEditButton}
                                >
                                    Редактировать
                                </button>
                                <button
                                    type="button"
                                    className="profile__button profile__button_type_logout"
                                    onClick={onSignOut}
                                >
                                    Выйти из аккаунта
                                </button>
                            </>
                        )}

                        {visibleSubmitButton && (
                            <button
                                type="submit"
                                className={`profile__button-submit ${!isValid ? "profile__button-submit_disabled" : ""}`}
                                disabled={!isValid}
                            >
                                Сохранить
                            </button>
                        )}
                    </div>
                </Form>
            </section>
        </>
    );
};

export default Profile;