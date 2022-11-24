import Input from 'components/Input/Input';
import { requiredValidation } from 'helpers/validations';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { Button, CustomForm } from './styles';
import { IPasswordFormdataProps } from './types';

const PasswordForm = (props: IPasswordFormdataProps) => {
  const { onSubmit } = props;

  return (
    <>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <CustomForm onSubmit={handleSubmit}>
            <div>
              <label>Old password</label>
              <Field
                render={Input}
                label="Old Password"
                name="oldPassword"
                validate={requiredValidation}
                type="password"
              />
            </div>
            <div>
              <label>New Password</label>
              <Field
                render={Input}
                label="Password"
                name="newPassword"
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
            <Button type="submit">Change password</Button>
          </CustomForm>
        )}
      />
    </>
  )
}

export default PasswordForm;
