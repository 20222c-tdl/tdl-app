import React, { FunctionComponent, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, List, ListItem } from '@mui/material';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import { Modal } from 'components/Modal/Modal';
import { Container, Button, View, CardsContainer, ButtonContainer, CardContainer } from './styles';
import { IPaymentMethodsProps } from './types';
import AddPaymentMethod from '../AddPaymentMethod/AddPaymentMethod';
import { getCreditCardType } from 'helpers/payments';

const PaymentMethods: FunctionComponent<IPaymentMethodsProps> = (props: IPaymentMethodsProps) => {
    const { cards, onRemoveCard, onAddCard } = props;

    const [isARegister, setIsARegister] = useState(false);

    const submitForm = (formData: any) => {
        setIsARegister(false);
        onAddCard(formData);
    }

    const renderView = () => (
        <View>
            {cards && !cards.length ?
                <>
                    <h1>You don't have any payment method. Add one to make a reservation!</h1>
                    <ButtonContainer>
                        <Button onClick={() => setIsARegister(true)}>Add payment method</Button>
                    </ButtonContainer>
                </>
                :
                <CardsContainer>
                    <ButtonContainer>
                        <Button onClick={() => setIsARegister(true)}>Add a new payment method</Button>
                    </ButtonContainer>
                    <List>
                        {cards && cards.map((card: any) => (
                            <ListItem
                                key={card.id}
                                disableGutters
                                secondaryAction={
                                    <>
                                        <IconButton aria-label="delete" onClick={() => onRemoveCard(card.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </>
                                }>
                                <CardContainer>
                                    <Cards
                                        number={card.number || ''}
                                        name={card.name || ''}
                                        expiry={card.expire || ''}
                                        cvc={card.cvv || ''}
                                        preview={true}
                                        issuer={getCreditCardType(card.number)}
                                    />
                                </CardContainer>
                            </ListItem>
                        ))}
                    </List>
                    
                </CardsContainer>
            }
        </View>
    )

    return (
        <Container>
            <div>
                {!isARegister && renderView()}
                <Modal
                    isOpen={isARegister}
                    onClose={() => setIsARegister(false)}
                    title="New Payment Method"
                >
                    <AddPaymentMethod onSubmit={submitForm} onCancel={() => setIsARegister(false)} />
                </Modal>

            </div>
        </Container>
    );
}

export default PaymentMethods;
