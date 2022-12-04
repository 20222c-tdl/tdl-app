import Input from 'components/Input/Input';
import { requiredValidation } from 'helpers/validations';
import React from 'react';
import { Form, Field } from 'react-final-form';

import { CustomForm, Button, ImageContainer, Label } from './styles';
import { IPersonalInfoFormdataProps, IProfileFormData } from './types';

const PersonalInfoForm = (props: IPersonalInfoFormdataProps) => {
    const { onSubmit, user, goBack } = props;
    return (
        <>
            {user.role === "user"
                ?
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
                                <label>Phone number</label>
                                <Field
                                    render={Input}
                                    label="Phone number"
                                    name="phoneNumber"
                                    validate={requiredValidation}
                                    type="number"
                                />
                            </div>
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
                            <Button isInverted onClick={() => goBack}>Cancel</Button>
                            <Button type="submit">Update</Button>
                        </CustomForm>
                    )}
                />
                :
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
                                <label>identityNumber</label>
                                <Field
                                    render={Input}
                                    label="Identity number"
                                    name="identityNumber"
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
                            <Button isInverted onClick={() => goBack}>Cancel</Button>
                            <Button type="submit">Update</Button>
                        </CustomForm>
                    )}
                />
            }
        </>
    )
}

export default PersonalInfoForm;
