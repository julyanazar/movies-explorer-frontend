import React from 'react';
import "./Register.css";
import Welcome from "../Welcome/Welcome";
import Form from "../Form/Form";
import Input from "../Input/Input";
import AuthBottom from "../AuthBottom/AuthBottom";

import { useValidation } from '../../utils/validation';

const Register = ({ onRegister }) => {

    const loggedIn = false;
    const { values, errors, isValid, handleChange } = useValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(values.name, values.email, values.password);
    };

    return (
        <section className="register">
            <Welcome
                text="Добро пожаловать!"
                loggedIn={loggedIn}
            />
            <Form
                name="register"
                onSubmit={handleSubmit}
                noValidate
            >
                <Input
                    auth
                    id="name"
                    label="Имя"
                    name="name"
                    type="text"
                    placeholder="Введите имя"
                    minLength="2"
                    maxLength="30"
                    onChange={handleChange}
                    value={values.name || ""}
                    error={errors.name}
                />
                <Input
                    auth
                    id="email"
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder="Введите почту"
                    onChange={handleChange}
                    value={values.email || ""}
                    error={errors.email}
                />

                <Input
                    auth
                    id="password"
                    label="Пароль"
                    name="password"
                    type="password"
                    placeholder="Введите пароль"
                    onChange={handleChange}
                    value={values.password || ""}
                    error={errors.password}
                />

                <AuthBottom
                    buttonDisabled={!isValid}
                    buttonText="Зарегистрироваться"
                    paragraph="Уже зарегистрированы?"
                    linkText="Войти"
                    href="/signin"
                    name="register"
                />
            </Form>
        </section>
    );
};

export default Register;