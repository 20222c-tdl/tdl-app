import React, { FunctionComponent, useState } from 'react';
import { Form, Field } from 'react-final-form';
import Input from '../../components/Input/Input';
import { requiredValidation } from '../../helpers/validations';
import { Edit } from '@mui/icons-material';
import { Arrow, Box, Button, ButtonContainer, ColumnDiv, Container, CustomForm, RowDiv, Service, ServicesContainer, Subtitle, Title, Text, EditDiv, Description } from './styles';
import { IServiceFormData, IServicesProps } from './types';
import { Modal } from 'components/Modal/Modal';
import ServiceInfoForm from './components/ServiceInfoForm';
import Select from 'components/Select/Select';

const Services: FunctionComponent<IServicesProps> = (props: IServicesProps) => {
    const { onPostAService, providerServices, onEditService } = props;

    const [isPostServiceCollapsed, setIsPostServiceCollapsed] = useState(true);
    const [isEditable, setIsEditable] = useState(false);
    const [currentService, setCurrentService] = useState<any>(null);

    const monetizationTypes = [{
        label: "Fixed",
        value: "Fixed"
    },
    {
        label: "By hours",
        value: "By hours"
    }]

    const submitForm = (formData: IServiceFormData) => {
        setIsEditable(false);
        onEditService(formData);
    }

    const renderPostService = () => (
        <>
            <RowDiv>
                <Title>Create your service</Title>
                <Arrow onClick={() => setIsPostServiceCollapsed(!isPostServiceCollapsed)} />
            </RowDiv>
            {!isPostServiceCollapsed && <>
                <Subtitle>Please fill all the fields to create the service</Subtitle>

                <Form
                    onSubmit={onPostAService}
                    initialValues={{}}
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
                                    <Button type="submit">Create service</Button>
                                </ButtonContainer>
                            </CustomForm>
                        )
                    }}
                />
            </>
            }
            {(providerServices && !providerServices.length)
                ?
                <Title>You do not have any service</Title>
                :
                <ServicesContainer>
                    <Title>Your services </Title>
                    {providerServices && providerServices.map((service) => {
                        return (
                            <>
                                <Service key={service.id}>
                                    <>
                                        <ColumnDiv>
                                            <RowDiv>
                                                <Text isBold>{service.title}</Text>
                                                <EditDiv>
                                                    <Edit onClick={() => {
                                                        setIsEditable(true)
                                                        setCurrentService(service)
                                                    }} />
                                                </EditDiv>
                                            </RowDiv>
                                            <ColumnDiv>
                                                <Description>Type: {service.monetizationType === "FIXED" ? "Price fixed" : "Price by duration"} </Description>
                                                <Description>Description: {service.description}</Description>
                                                <Description>Price: {service.price}</Description>
                                            </ColumnDiv>
                                        </ColumnDiv>
                                    </>
                                </Service>
                                <Modal
                                    isOpen={!!isEditable}
                                    onClose={() => setIsEditable(false)}
                                    title="Edit service information"
                                >
                                    <ServiceInfoForm onSubmit={submitForm} service={currentService} goBack={() => setIsEditable(false)} />
                                </Modal>

                            </>
                        )
                    })}

                </ServicesContainer>
            }

        </>
    )

    return (
        <ServicesContainer>
            <Box>
                {renderPostService()}
            </Box>

        </ServicesContainer>
    );
}

export default Services;

