import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { onLoginRequested } from "../redux/actions/user.actions";
import LoginView from "../views/Login/LoginView";

const LoginContainer: FunctionComponent = () => {
    const dispatch = useDispatch();
    const name = "Juancito";
    const lastname = "Gonzalez";

    const loginFormData = {
        email: "jg@gmail.com",
        password: "12345678"
    }


    const onLoginClick = () => {
        dispatch(onLoginRequested(loginFormData));
    }

    return (
        <LoginView
            name = {name}
            lastname = {lastname}
            onLoginClick = {onLoginClick}
        />
    )
}
export default LoginContainer;
