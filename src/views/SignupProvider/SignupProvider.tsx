
import Select from 'components/Select/Select';
import { FunctionComponent } from 'react';
import { Form, Field } from 'react-final-form';
import Input from '../../components/Input/Input';
import { requiredValidation } from '../../helpers/validations';
import { Box, Button, ButtonContainer, CustomForm, FormFields, Label, SignupContainer, TitleContainer } from './styles';
import { ISignupProviderProps } from './types';


const SignupProvider: FunctionComponent<ISignupProviderProps> = (props: ISignupProviderProps) => {
    const { onSignupClick, allCategories } = props;

    const categoriesNames = allCategories && allCategories.map((category) => {
        return {
            label: category.name,
            value: category.name
        }
    });

    return (
        categoriesNames && <SignupContainer>
            <TitleContainer>
                <p>Sign up as Provider</p>
            </TitleContainer>
            <Box>
                <p>You want to signup as a </p>
                <a href="/">User</a>
                <p>  </p>
                <p>or as a</p>
                <a href="/signupCommunity">Community</a>
            </Box>
            <Form
                onSubmit={onSignupClick}
                initialValues={{}}
                render={({ handleSubmit }) => (
                    <CustomForm onSubmit={handleSubmit}>
                        <FormFields>
                            <div>
                                <Label>First Name</Label>
                                <Field
                                    render={Input}
                                    label="First name"
                                    name="firstName"
                                    validate={requiredValidation}
                                    type="text"
                                />
                            </div>
                            <div>
                                <Label>Last Name</Label>
                                <Field
                                    render={Input}
                                    label="Last name"
                                    name="lastName"
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
                            <div>
                                <Label>Identity number</Label>
                                <Field
                                    render={Input}
                                    label="Identity number"
                                    name="identityNumber"
                                    validate={requiredValidation}
                                    type="number"
                                />
                            </div>
                            <div>
                                <Label>Phone number</Label>
                                <Field
                                    render={Input}
                                    label="Phone number"
                                    name="phoneNumber"
                                    validate={requiredValidation}
                                    type="number"
                                />
                            </div>
                            <div>
                                <Label>Category</Label>
                                <Field
                                    label="Category"
                                    placeholder="category"
                                    name="category"
                                >
                                    {({ input, meta }) => (
                                        <div style={{ marginBottom: 10 }}>
                                            <Select
                                                disabled
                                                options={categoriesNames}
                                                showError={false}
                                                input={input}
                                                meta={meta}
                                                label="Category"
                                            />
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div>
                                <Label>Upload a profile photo</Label>
                                <Field name="base64Picture" validate={requiredValidation}>
                                    {({ input: { value, onChange, ...input } }) => (
                                        <input
                                            {...input}
                                            type="file"
                                            onChange={({ target }) => onChange(target.files)} // instead of the default target.value
                                            {...props}
                                        />
                                    )}
                                </Field>
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

export default SignupProvider;
