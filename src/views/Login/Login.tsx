import React, { FunctionComponent } from 'react';
import { Form, Field } from 'react-final-form';
import Input from '../../components/Input/Input';
import { requiredValidation } from '../../helpers/validations';
import { Button, ButtonContainer, CustomForm, SignInContainer, TitleContainer } from './styles';
import { ILoginProps } from './types';

const Login: FunctionComponent<ILoginProps> = (props: ILoginProps) => {
  const { onLoginClick } = props;
  return (
    <SignInContainer>
            <TitleContainer>
                <p>Please Sign in</p>
            </TitleContainer>
            <Form
                onSubmit={onLoginClick}
                initialValues={{}}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <CustomForm onSubmit={handleSubmit}>
                        <div>
                            <label>Email </label>
                            <Field
                                render={Input}
                                label="Email address"
                                name="email"
                                validate={requiredValidation}
                                type="email"
                            />
                        </div>
                        <div>
                            <label>Password </label>
                            <Field
                                render={Input}
                                label="Password"
                                name="password"
                                validate={requiredValidation}
                                type="password"
                            />
                        </div>
                        <ButtonContainer>
                            <Button type="submit">Sign in</Button>
                        </ButtonContainer>
                    </CustomForm>
                )}
            />
        </SignInContainer>
  );
}

export default Login;

