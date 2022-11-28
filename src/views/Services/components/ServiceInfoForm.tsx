import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import { requiredValidation } from 'helpers/validations';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { ButtonContainer, ButtonModal, Container, CustomForm } from '../styles';
import { IServiceInfoFormdataProps } from '../types';


const ServiceInfoForm = (props: IServiceInfoFormdataProps) => {
    const { onSubmit, service, goBack } = props;
    const monetizationTypes = [{
        label: "Fixed",
        value: "FIXED"
    },
    {
        label: "By hours",
        value: "BY_THE_HOUR"
    }]

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={service}
            render={({ handleSubmit, values }) => {
                return (
                    <CustomForm onSubmit={handleSubmit}>
                        <Container>
                            <div>
                                <label>Title</label>
                                <Field
                                    render={Input}
                                    label="Title"
                                    name="title"
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
                            <div>
                                <label>Price</label>
                                <Field
                                    render={Input}
                                    name="price"
                                    label="Price"
                                    validate={requiredValidation}
                                    type="number"
                                />
                            </div>
                            <div>
                                <label>Monetization type</label>
                                <Field
                                    label="monetizationType"
                                    placeholder="Monetization type"
                                    name="monetizationType"
                                >
                                    {({ input, meta }) => (
                                        <div style={{ marginBottom: 10 }}>
                                            <Select
                                                disabled
                                                options={monetizationTypes}
                                                showError={false}
                                                input={input}
                                                meta={meta}
                                                label="Monetization type"
                                            />
                                        </div>
                                    )}
                                </Field>
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

export default ServiceInfoForm;
