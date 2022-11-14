
import { FunctionComponent, useState } from 'react';
import { Form, Field } from 'react-final-form';
import Input from '../../components/Input/Input';
import { requiredValidation } from '../../helpers/validations';
import { IClaimsProps } from './types';
import { Arrow, Box, Button, ButtonContainer, Claim, ClaimsContainer, Container, CustomForm, RowDiv, Subtitle, Title, Text, ColumnDiv, Description, EditDiv } from './styles';
import { Edit } from '@mui/icons-material';


const Claims: FunctionComponent<IClaimsProps> = (props: IClaimsProps) => {
    const { onRegisterAClaim, claims, onEditClaim } = props;
    const [isRegisterClaimsCollapsed, setIsRegisterClaimsCollapsed] = useState(true);


    const renderRegisterClaims = () => (
        <>
            <RowDiv>
                <Title>Register a claim</Title>
                <Arrow onClick={() => setIsRegisterClaimsCollapsed(!isRegisterClaimsCollapsed)} />
            </RowDiv>
            {!isRegisterClaimsCollapsed && <>
                <Subtitle>Leave your claim, we will resolve it for you</Subtitle>

                <Form
                    onSubmit={onRegisterAClaim}
                    initialValues={{}}
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
                                    <Button type="submit">Register claim</Button>
                                </ButtonContainer>
                            </CustomForm>
                        )
                    }}
                />
            </>
            }
            {(claims && !claims.length)
                ?
                <Title>There are no saved accommodations yet</Title>
                :
                <ClaimsContainer>
                    <Title>Your claims </Title>
                    {claims && claims.map((claim) => {
                        return (
                            <Claim key={claim.id}>
                                <ColumnDiv>
                                    <RowDiv>
                                        <Text isBold>{claim.mainIssue}</Text>
                                        <EditDiv>
                                            <Edit onClick={(event) => {
                                                onEditClaim()
                                                event.stopPropagation()
                                            }} />
                                        </EditDiv>
                                    </RowDiv>
                                    <ColumnDiv>
                                        <Description>Type: {claim.type} </Description>
                                        <Description>Description: {claim.description}</Description>
                                    </ColumnDiv>

                                </ColumnDiv>
                            </Claim>)
                    })}
                </ClaimsContainer>
            }

        </>
    )

    return (
        <ClaimsContainer>
            <Box>
                {renderRegisterClaims()}
            </Box>

        </ClaimsContainer>
    );
}

export default Claims;
