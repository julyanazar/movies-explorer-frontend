import React from 'react';
import "./Login.css";
import Welcome from "../Welcome/Welcome";
import Form from "../Form/Form";
import Input from "../Input/Input";
import AuthBottom from "../AuthBottom/AuthBottom";

import { useValidation } from '../../utils/validation';

const Login = ({ onLogin }) => {

    const loggedIn = false;
    const { values, errors, isValid, handleChange } = useValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(values.email, values.password);
    };

    return (
        <section className="login">
            <Welcome
                text="Рады видеть!"
                loggedIn={loggedIn}
            />
            <Form
                name="login"
                onSubmit={handleSubmit}
                noValidate
            >
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
                    buttonText="Войти"
                    paragraph="Ещё не зарегистрированы?"
                    linkText="Регистрация"
                    href="/signup"
                    name="login"
                />
            </Form>
        </section>
    );
};

export default Login;