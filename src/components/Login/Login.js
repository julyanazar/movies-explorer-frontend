import React, { useState } from 'react';
import "./Login.css";
import Welcome from "../Welcome/Welcome";
import Form from "../Form/Form";
import Input from "../Input/Input";
import AuthBottom from "../AuthBottom/AuthBottom";

const Login = () => {

    const loggedIn = false;
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };

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
                    onChange={handleChangeInput}
                    value={values.email}
                    error={errors.email}
                />

                <Input
                    auth
                    id="password"
                    label="Пароль"
                    name="password"
                    type="password"
                    placeholder="Введите пароль"
                    onChange={handleChangeInput}
                    value={values.password}
                    error={errors.password}
                />

                <AuthBottom
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