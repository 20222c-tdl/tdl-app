import Input from 'components/Input/Input';
import Select from 'components/Select/Select';
import { requiredValidation } from 'helpers/validations';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { ButtonContainer, ButtonModal, Container, CustomForm } from '../styles';
import { IPlaceInfoFormdataProps } from '../types';


const PlaceInfoForm = (props: IPlaceInfoFormdataProps) => {
    const { onSubmit, place, goBack } = props;

    return (
        <Form
            onSubmit={onSubmit}
            initialValues={place}
            render={({ handleSubmit, values }) => {
                return (
                    <CustomForm onSubmit={handleSubmit}>
                        <Container>
                            <div>
                                <label>Place's name</label>
                                <Field
                                    render={Input}
                                    label="Name"
                                    name="name"
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

export default PlaceInfoForm;
