import Input from 'components/Input/Input';
import { requiredValidation } from 'helpers/validations';
import React from 'react';
import { Form, Field } from 'react-final-form';

import { CustomForm, Button } from './styles';
import { IPersonalInfoFormdataProps } from './types';

const PersonalInfoForm = (props: IPersonalInfoFormdataProps) => {
    const { onSubmit, user, goBack } = props;
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={user}
            render={({ handleSubmit }) => (
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
                        <label>Phone number</label>
                        <Field
                            render={Input}
                            label="Phone number"
                            name="phoneNumber"
                            validate={requiredValidation}
                            type="number"
                        />
                    </div>
                    <Button isInverted onClick={() => goBack}>Cancel</Button>
                    <Button type="submit">Update</Button>
                </CustomForm>
            )}
        />
    )
}

export default PersonalInfoForm;
