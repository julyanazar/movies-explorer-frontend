import React, { useState } from 'react';
import "./Register.css";
import Welcome from "../Welcome/Welcome";
import Form from "../Form/Form";
import Input from "../Input/Input";
import AuthBottom from "../AuthBottom/AuthBottom";

const Register = () => {

    const loggedIn = false;
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name: "",
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
                    onChange={handleChangeInput}
                    value={values.name}
                    error={errors.name}
                />
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