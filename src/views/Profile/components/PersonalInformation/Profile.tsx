import React, { FunctionComponent, useState } from 'react';

import ContactMailIcon from '@mui/icons-material/ContactMail';
import PasswordIcon from '@mui/icons-material/Password';
import PasswordForm from '../PasswordForm/PasswordForm';
import { IPasswordFormData } from '../PasswordForm/types';
import PersonalInfoForm from '../PersonalInfoForm/PersonalInfoForm';
import { IPersonalInfoFormData } from '../PersonalInfoForm/types';
import {
    Button,
    ButtonContainer,
    Container,
    Label,
    RowDiv,
    Title,
    Value,
    View,
    BoxInfo,
    Subtitle,
    Box,
    Arrow,
} from './styles';
import { IPersonalInfoProps } from './types';
import { Modal } from 'components/Modal/Modal';

const PersonalInfo: FunctionComponent<IPersonalInfoProps> = (props: IPersonalInfoProps) => {
    const { onSubmit, user, onSubmitPassword } = props;

    const [isEditable, setIsEditable] = useState(false);
    const [isPersonalInfoCollapsed, setIsPersonalInfoCollapsed] = useState(true);
    const [isPasswordCollapsed, setIsPasswordCollapsed] = useState(true);

    const submitForm = (formData: any) => {
        setIsEditable(false);
        onSubmit(formData);
    }

    const submitPassForm = (formData: IPasswordFormData) => {
        setIsPasswordCollapsed(true);
        onSubmitPassword(formData);
    }

    const renderView = () => {
        return user.role === "user"
            ?
            <View>
                <ButtonContainer>
                    <Button onClick={() => setIsEditable(true)}> Edit</Button>
                </ButtonContainer>
                <RowDiv>
                    <Label>Name:</Label>
                    <Value>{user.firstName}</Value>
                </RowDiv>
                <RowDiv>
                    <Label>Last Name:</Label>
                    <Value>{user.lastName}</Value>
                </RowDiv>
                <RowDiv>
                    <Label>Email:</Label>
                    <Value>{user.email}</Value>
                </RowDiv>
                <RowDiv>
                    <Label>Address:</Label>
                    <Value>{user.address}</Value>
                </RowDiv>
                <RowDiv>
                    <Label>Phone number:</Label>
                    <Value>{user.phoneNumber}</Value>
                </RowDiv>
            </View>
            :
            <View>
                <ButtonContainer>
                    <Button onClick={() => setIsEditable(true)}> Edit</Button>
                </ButtonContainer>
                <RowDiv>
                    <Label>Name:</Label>
                    <Value>{user.firstName}</Value>
                </RowDiv>
                <RowDiv>
                    <Label>Last Name:</Label>
                    <Value>{user.lastName}</Value>
                </RowDiv>
                <RowDiv>
                    <Label>Identity number:</Label>
                    <Value>{user.identityNumber}</Value>
                </RowDiv>
                <RowDiv>
                    <Label>Email:</Label>
                    <Value>{user.email}</Value>
                </RowDiv>
                <RowDiv>
                    <Label>Phone number:</Label>
                    <Value>{user.phoneNumber}</Value>
                </RowDiv>
            </View>
    }

    const renderPasswordView = () => (
        <>
            <RowDiv>
                <PasswordIcon />
                <Title>Password</Title>
                <Arrow onClick={() => setIsPasswordCollapsed(!isPasswordCollapsed)} />
            </RowDiv>
            <Subtitle>For security reasons, make sure to change your password periodically</Subtitle>
            {!isPasswordCollapsed && <PasswordForm onSubmit={submitPassForm} />}
        </>
    )

    return (
        <Container>
            <BoxInfo>
                <Box>
                    <RowDiv>
                        <ContactMailIcon />
                        <Title>Personal information</Title>
                        <Arrow onClick={() => setIsPersonalInfoCollapsed(!isPersonalInfoCollapsed)} />
                    </RowDiv>
                    <Subtitle>Make sure that every field is up to date, so the reservations are easier to make</Subtitle>
                    {!isPersonalInfoCollapsed && (
                        <>
                            {!isEditable && renderView()}
                            <Modal
                                isOpen={!!isEditable}
                                onClose={() => setIsEditable(false)}
                                title="Edit personal information"
                            >
                                <PersonalInfoForm onSubmit={submitForm} user={user} goBack={() => setIsEditable(false)} />
                            </Modal>
                        </>
                    )}
                </Box>
            </BoxInfo>
            <BoxInfo>
                <Box>
                    {renderPasswordView()}
                </Box>
            </BoxInfo>
        </Container>
    );
}

export default PersonalInfo;
