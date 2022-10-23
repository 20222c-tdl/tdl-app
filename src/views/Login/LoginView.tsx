import React, { FunctionComponent } from "react";
import { ILoginViewProps } from "./types";

const LoginView: FunctionComponent<ILoginViewProps> = (props: ILoginViewProps) => {
    const { name, lastname, onLoginClick } = props
    return (
        <div>
            <h2> Hi {name} {lastname}, you logged in successfully</h2>

            <button onClick={onLoginClick}>
                Login
            </button>
        </div>
    )
}
export default LoginView;
