
import { FunctionComponent } from 'react';
import { CustomForm, SignupContainer, TitleContainer, Button, ButtonContainer, ButtonSignUp, ButtonContainerSignUp, RowDiv } from './styles';
import { Form, Field } from 'react-final-form';
import Input from '../../components/Input/Input';
import { requiredValidation } from '../../helpers/validations';
import { ISignupUserProps } from './types';
import Select from '../../components/Select/Select';


const SignupUser: FunctionComponent<ISignupUserProps> = (props: ISignupUserProps) => {
  const { onSignupClick, onGoToSignupCommunity, onGoToSigninCommunity, onGoToSigninUser, allCommunities } = props;

  const communitiesNames = allCommunities && allCommunities.map((community) => {
    return {
      label: community.name,
      value: community.name
    }
  });

  return (
    <SignupContainer>
      <RowDiv>
        <ButtonContainerSignUp>
          <ButtonSignUp onClick={onGoToSignupCommunity}>Sign up as Community</ButtonSignUp>
        </ButtonContainerSignUp>
        <ButtonContainerSignUp>
          <ButtonSignUp onClick={onGoToSigninCommunity}>Sign in as Community</ButtonSignUp>
        </ButtonContainerSignUp>
        <ButtonContainerSignUp>
          <ButtonSignUp onClick={onGoToSigninUser}>Sign in as User</ButtonSignUp>
        </ButtonContainerSignUp>
      </RowDiv>

      <TitleContainer>
        <p>Sign up</p>
      </TitleContainer>

      <h3> We welcome you to Denunci.AR</h3>

      <Form
        onSubmit={onSignupClick}
        initialValues={{}}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <CustomForm onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                render={Input}
                label="First name"
                name="firstName"
                validate={requiredValidation}
                type="text"
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                render={Input}
                label="Last name"
                name="lastName"
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
            <div>
              <label>Address</label>
              <Field
                render={Input}
                label="Address"
                name="address"
                validate={requiredValidation}
                type="text"
              />
            </div>
            <div>
              <label>Community</label>
              <Field
                label="community"
                placeholder="Community"
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
                      label="community"
                    />
                  </div>
                )}
              </Field>
            </div>
            <div>
              <label>Phone number</label>
              <Field
                render={Input}
                label="Phone number"
                name="phoneNumber"
                validate={requiredValidation}
                type="number"
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

export default SignupUser;
