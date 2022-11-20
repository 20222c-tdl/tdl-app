import Input from 'components/Input/Input';
import { requiredValidation } from 'helpers/validations';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { ButtonContainer, ButtonModal, Container, CustomForm } from '../styles';
import { IClaimInfoFormdataProps } from '../types';


const ClaimInfoForm = (props: IClaimInfoFormdataProps) => {
    const { onSubmit, claim, goBack } = props;
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={claim }
            render={({ handleSubmit, values }) => {
                return (
                    <CustomForm onSubmit={handleSubmit}>
                        <Container>
                            <div>
                                <label>Type</label>
                                <Field
                                    render={Input}
                                    label="Type"
                                    name="type"
                                    validate={requiredValidation}
                                    type="text"
                                />
                            </div>
                            <div>
                                <label>Main issue</label>
                                <Field
                                    render={Input}
                                    name="mainIssue"
                                    label="Main issue"
                                    validate={requiredValidation}
                                    type="text"
                                />
                            </div>
                            <div>
                                <label>Description</label>
                                <Field
                                    render={Input}
                                    name="description"
                                    label="Description"
                                    validate={requiredValidation}
                                    type="text"
                                />
                            </div>
                        </Container>
                        <ButtonContainer>
                            <ButtonModal isInverted onClick={() => goBack}>Cancel</ButtonModal>
                            <ButtonModal type="submit">Update</ButtonModal>
                        </ButtonContainer>
                    </CustomForm>
                )
            }}
        />
    )
}

export default ClaimInfoForm;
