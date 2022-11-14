
import { FunctionComponent } from 'react';
import { CustomForm, SignupContainer, TitleContainer, Button, ButtonContainer, Box, FormFields, Label } from './styles';
import { ISignupCommunityProps } from './types';
import { Form, Field } from 'react-final-form';
import Input from '../../components/Input/Input';
import { requiredValidation } from '../../helpers/validations';


const SignupCommunity: FunctionComponent<ISignupCommunityProps> = (props: ISignupCommunityProps) => {
    const { onSignupClick } = props;

    return (
        <SignupContainer>
            <TitleContainer>
                <p>Sign up as Community</p>
            </TitleContainer>
            <Box>
                <p>You want to signup as a </p>
                <a href="/">User </a>
                <p>  </p>
                <p> or as a </p>
                <a href="/signupProvider">Provider</a>
            </Box>
            <Form
                onSubmit={onSignupClick}
                initialValues={{}}
                render={({ handleSubmit }) => (
                    <CustomForm onSubmit={handleSubmit}>
                        <FormFields>
                            <div>
                                <Label>Community name</Label>
                                <Field
                                    render={Input}
                                    label="Community name"
                                    name="name"
                                    validate={requiredValidation}
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label>Email</Label>
                                <Field
                                    render={Input}
                                    label="Email address"
                                    name="email"
                                    validate={requiredValidation}
                                    type="email"
                                />
                            </div>
                            <div>
                                <Label>Password</Label>
                                <Field
                                    render={Input}
                                    label="Password"
                                    name="password"
                                    validate={requiredValidation}
                                    type="password"
                                />
                            </div>
                            <div>
                                <Label>Repeat password</Label>
                                <Field
                                    render={Input}
                                    label="Repeat password"
                                    name="repeatPassword"
                                    validate={requiredValidation}
                                    type="password"
                                />
                            </div>
                        </FormFields>
                        <ButtonContainer>
                            <Button type="submit">Sign up</Button>
                        </ButtonContainer>
                        <Box>
                            <p>Do you want to login as a </p>
                            <a href="/loginUser">User</a>
                            <p>,</p>
                            <a href="/loginProvider"> Provider</a>
                            <p>or as</p>
                            <a href="/loginCommunity">Community</a>
                        </Box>
                    </CustomForm>
                )}
            />
        </SignupContainer>
    );
}

export default SignupCommunity;
