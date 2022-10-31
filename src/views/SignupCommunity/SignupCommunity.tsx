
import { FunctionComponent } from 'react';
import { CustomForm, SignupContainer, TitleContainer, Button, ButtonContainer, ButtonSignUp, ButtonContainerSignUp } from './styles';
import { ISignupCommunityProps } from './types';
import { Form, Field } from 'react-final-form';
import Input from '../../components/Input/Input';
import { requiredValidation } from '../../helpers/validations';


const SignupCommunity: FunctionComponent<ISignupCommunityProps> = (props: ISignupCommunityProps) => {
    const { onSignupClick, onGoToSignIn } = props;

    return (
        <SignupContainer>
            <ButtonContainerSignUp>
                <ButtonSignUp onClick={onGoToSignIn}>Sign in</ButtonSignUp>
            </ButtonContainerSignUp>

            <TitleContainer>
                <p>Sign up</p>
            </TitleContainer>

            <h3> We welcome you to Denunci.AR</h3>

            <Form
                onSubmit={onSignupClick}
                initialValues={{}}
                render={({ handleSubmit}) => (
                    <CustomForm onSubmit={handleSubmit}>
                        <div>
                            <label>Community name</label>
                            <Field
                                render={Input}
                                label="Community name"
                                name="name"
                                validate={requiredValidation}
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <Field
                                render={Input}
                                label="Email address"
                                name="email"
                                validate={requiredValidation}
                                type="email"
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <Field
                                render={Input}
                                label="Password"
                                name="password"
                                validate={requiredValidation}
                                type="password"
                            />
                        </div>
                        <div>
                            <label>Repeat password</label>
                            <Field
                                render={Input}
                                label="Repeat password"
                                name="repeatPassword"
                                validate={requiredValidation}
                                type="password"
                            />
                        </div>
                        <ButtonContainer>
                            <Button type="submit">Sign up</Button>
                        </ButtonContainer>
                    </CustomForm>
                )}
            />
        </SignupContainer>
    );
}

export default SignupCommunity;
