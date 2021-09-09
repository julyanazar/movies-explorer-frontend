import React, { useState } from 'react';
import "./Profile.css";
import Welcome from "../Welcome/Welcome";
import Form from "../Form/Form";
import Input from "../Input/Input";

const Profile = () => {

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChangeInput = (evt) => {
        const { name, validationMessage, value } = evt.target;

        setValues({
            ...values,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: validationMessage,
        });
    };

    return (
        <section className="profile">
            <Welcome
                text="Привет, Юля!"
                loggedIn={true}
                name="profile"
            />
            <Form
                name="profile"
                noValidate
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
                    onChange={handleChangeInput}
                    value={values.name}
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
                    onChange={handleChangeInput}
                    value={values.email}
                    error={errors.email}
                    required
                    autoComplete="off"
                />
            </Form>

            <div className="profile__container">
                <button className="profile__button">Редактировать</button>
                <button className="profile__button profile__button_type_logout">
                    Выйти из аккаунта
                </button>
            </div>
        </section>
    );
};

export default Profile;