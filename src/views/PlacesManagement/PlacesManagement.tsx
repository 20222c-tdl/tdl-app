import React, { FunctionComponent, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { requiredValidation } from '../../helpers/validations';
import { Edit } from '@mui/icons-material';
import { Modal } from 'components/Modal/Modal';
import { IPlaceFormData, IPlacesProps } from './types';
import { Arrow, Button, ButtonContainer, ColumnDiv, Container, CustomForm, Description, EditDiv, Place, PlacesContainer, RowDiv, Subtitle, Title, Text, Box, EmptyContainer, EmptyPlacesIcon, Label } from './styles';
import PlaceInfoForm from './components/PlaceInfoForm';
import Input from 'components/Input/Input';

const PlacesManagement: FunctionComponent<IPlacesProps> = (props: IPlacesProps) => {
    const { onPostAPlace, places, onEditPlace } = props;

    const [isPostPlaceCollapsed, setIsPostPlaceCollapsed] = useState(true);
    const [isEditable, setIsEditable] = useState(false);
    const [currentPlace, setCurrentPlace] = useState<any>(null);

    const submitForm = (formData: IPlaceFormData) => {
        setIsEditable(false);
        onEditPlace(formData);
    }

    const renderPostPlace = () => (
        <>
            <RowDiv>
                <Title>Create a place</Title>
                <Arrow onClick={() => setIsPostPlaceCollapsed(!isPostPlaceCollapsed)} />
            </RowDiv>
            {!isPostPlaceCollapsed && <>
                <Subtitle>Please fill all the fields to create a place</Subtitle>

                <Form
                    onSubmit={onPostAPlace}
                    initialValues={{}}
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
                                    <div>
                                        <Label>Upload a photo of the place</Label>
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
                                </Container>
                                <ButtonContainer>
                                    <Button type="submit">Create place</Button>
                                </ButtonContainer>
                            </CustomForm>
                        )
                    }}
                />
            </>
            }
            {(places && !places.length)
                ?
                <EmptyContainer>
                    <EmptyPlacesIcon />
                    <Title>You do not have any places yet</Title>
                </EmptyContainer>
                :
                <PlacesContainer>
                    <Title>Your places </Title>
                    {places && places.map((place) => {
                        return (
                            <>
                                <Place key={place.id}>
                                    <>
                                        <ColumnDiv>
                                            <RowDiv>
                                                <Text isBold>{place.name}</Text>
                                                <EditDiv>
                                                    <Edit onClick={() => {
                                                        setIsEditable(true)
                                                        setCurrentPlace(place)
                                                    }} />
                                                </EditDiv>
                                            </RowDiv>
                                            <Description>Description: {place.description}</Description>
                                        </ColumnDiv>
                                    </>
                                </Place>
                                <Modal
                                    isOpen={!!isEditable}
                                    onClose={() => setIsEditable(false)}
                                    title="Edit place information"
                                >
                                    <PlaceInfoForm onSubmit={submitForm} place={currentPlace} goBack={() => setIsEditable(false)} />
                                </Modal>

                            </>
                        )
                    })}

                </PlacesContainer>
            }

        </>
    )

    return (
        <PlacesContainer>
            <Box>
                {renderPostPlace()}
            </Box>

        </PlacesContainer>
    );
}

export default PlacesManagement;

