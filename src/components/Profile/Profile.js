import React, { useContext } from 'react';
import "./Profile.css";
import Header from "../Header/Header";
import Welcome from "../Welcome/Welcome";
import Form from "../Form/Form";
import Input from "../Input/Input";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useValidation } from "../../utils/validation";

const Profile = ({ onSignOut, onUpdate }) => {

    const currentUser = useContext(CurrentUserContext);
    const { values, errors, isValid, handleChange } = useValidation();

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdate({
            name: values.name || currentUser.name,
            email: values.email || currentUser.email,
        });
    }

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
                        defaultValue={currentUser.name}
                        error={errors.name}
                        required
                        autoComplete="off"
                    />
                    <Input
                        editProfile
                        id="email"
                        label="E-mail"
                        name="email"
                        type="email"
                        placeholder="Почта"
                        onChange={handleChange}
                        defaultValue={currentUser.email}
                        error={errors.email}
                        required
                        autoComplete="off"
                    />

                    <div className="profile__container">
                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`profile__button ${!isValid ? "profile__button_disabled" : ""}`}
                        >
                            Редактировать
                        </button>
                        <button
                            type="button"
                            className="profile__button profile__button_type_logout"
                            onClick={onSignOut}>
                            Выйти из аккаунта
                        </button>
                    </div>
                </Form>
            </section>
        </>
    );
};

export default Profile;