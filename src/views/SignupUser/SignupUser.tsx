
import { FunctionComponent } from 'react';
import { Box, Button, ButtonContainer, CustomForm, FormFields, ImageContainer, Label, SignupContainer, TitleContainer } from './styles';
import { Form, Field } from 'react-final-form';
import Input from '../../components/Input/Input';
import { requiredValidation } from '../../helpers/validations';
import { ISignupUserProps } from './types';
import Select from '../../components/Select/Select';


const SignupUser: FunctionComponent<ISignupUserProps> = (props: ISignupUserProps) => {
  const { onSignupClick, allCommunities } = props;

  const communitiesNames = allCommunities && allCommunities.map((community) => {
    return {
      label: community.name,
      value: community.name
    }
  });

  return (
    <SignupContainer>
      <TitleContainer>
        <p>Sign up as User</p>
      </TitleContainer>
      <Box>
        <p>You want to signup as a Community?</p>
        <a href="/signupCommunity">Sign up</a>
      </Box>
      <Box>
        <p>You want to signup as a Provider?</p>
        <a href="/signupProvider">Sign up</a>
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
                <Label>Address</Label>
                <Field
                  render={Input}
                  label="Address"
                  name="address"
                  validate={requiredValidation}
                  type="text"
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
                <Label>Community</Label>
                <Field
                  label="Community"
                  placeholder="community"
                  name="community"
                >
                  {({ input, meta }) => (
                    <div style={{ marginBottom: 10 }}>
                      <Select
                        disabled
                        options={communitiesNames}
                        showError={false}
                        input={input}
                        meta={meta}
                        label="Community"
                      />
                    </div>
                  )}
                </Field>
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
            </FormFields>
            <ImageContainer>
              <Label>Profile picture </Label>
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
            </ImageContainer>
            <ButtonContainer>
              <Button type="submit">Sign up</Button>
            </ButtonContainer>
            <Box>
              <p>Already have an User account?</p>
              <a href="/loginUser">Login</a>
            </Box>
            <Box>
              <p>Already have a Community account?</p>
              <a href="/loginCommunity">Login</a>
            </Box>
            <Box>
              <p>Already have a Provider account?</p>
              <a href="/loginProvider">Login</a>
            </Box>
          </CustomForm>
        )}
      />
    </SignupContainer>
  );
}

export default SignupUser;
