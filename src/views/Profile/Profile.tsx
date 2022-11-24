import React, { FunctionComponent, useState } from 'react';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SelectSearch from 'react-select-search';

import { IProfileProps } from './types';
import {
    BoxInfo,
    Title,
    Arrow,
    CurrencyDiv,
    Subtitle,
    Container,
    Box,
    RowDiv,
} from './styles'
import PersonalInfo from './components/PersonalInformation/Profile';
import PaymentMethods from './components/PaymentMethods/PaymentMethods';

const Profile: FunctionComponent<IProfileProps> = (props: IProfileProps) => {
    const {
        user,
        onEditProfileClick,
        onEditPassClick,
        cards,
        onAddCard,
        onRemoveCard,
    } = props;
    const [isECColapsed, setIsECColapsed] = useState(true);
    const [isPaymentsCollapsed, setIPaymentsCollapsed] = useState(true);

    return (
        <Container>
            <Title>Welcome to your profile {user.firstName}!</Title>
            <BoxInfo>
                <PersonalInfo onSubmit={onEditProfileClick} user={user} onSubmitPassword={onEditPassClick} />
            </BoxInfo>
            <BoxInfo>
                <Box>
                    <RowDiv>
                        <CreditCardIcon />
                        <Title hasNoMargin>Payments Methods</Title>
                        <Arrow onClick={() => setIPaymentsCollapsed(!isPaymentsCollapsed)} />
                    </RowDiv>
                    <Subtitle>In this section you can see your debit/credit cards, add a new one or delete an existing one.</Subtitle>
                    {!isPaymentsCollapsed &&
                        <PaymentMethods 
                            cards={cards}
                            onAddCard={onAddCard}
                            onRemoveCard={onRemoveCard}
                        />
                    }
                </Box>
            </BoxInfo>
        </Container>
    );
}

export default Profile;
