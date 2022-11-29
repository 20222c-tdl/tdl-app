import React, { FunctionComponent, useState } from 'react';
import ReactStars from 'react-stars'
import { TitleContainer, ReservationContainer, Reservation, RowDiv, CustomProviderImg, ColumnProviderDescription, EmptyContainer, EmptyText, EmptyIcon, Container, ReservationTitles, ProviderInfo, ProviderTitle, ProviderUsername, ProviderData, RowDivProviderUserName, CategoryName, ServicesContainer, ServiceDescription, Service, ServicesHiredTitle, StatusButtonContainer, LeaveReview, CustomForm, FormFields, Label, ButtonContainer, Button, Card, Check, CustomButton, ButtonSaveReview } from './styles';
import { MyReservationsProps } from './types';
import { Modal } from 'components/Modal/Modal';
import { Field, Form } from 'react-final-form';
import { requiredValidation } from 'helpers/validations';
import CheckIcon from 'assets/Sign-check-icon.png';
import Cards from 'react-credit-cards';
import { AddCard } from "@mui/icons-material";
import history from '../../helpers/history';
import Input from 'components/Input/Input';
import { height } from '@mui/system';


const MyReservations: FunctionComponent<MyReservationsProps> = (props: MyReservationsProps) => {
    const { onLeaveAReview, onCancelReservation, onPay, reservations, userReviews, setReservationId, setProviderId, cards, setSelectedCard, selectedCard } = props;
    const [isOpenReview, setIsOpenReview] = useState(false);
    const [rating, setRating] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ratingChanged = (newRating: number) => {
        setRating(newRating);
    }

    const getTotalPrice = (services: any) => {
        let totalPrice = 0;
        services && services.forEach((service: any) => {
            if (service.monetizationType === "FIXED" && service.hours > 0) {
                totalPrice += service.price;
            } else {
                totalPrice += service.price * service.hours;
            }
        });
        return totalPrice;
    };

    const renderPayments = (
        <Modal
            isOpen={isModalOpen}
            title="Select a payment method"
            onClose={() => { setIsModalOpen(false); setSelectedCard(-1) }}
        >
            {(cards && cards.length) ?
                <>
                    <div style={{ padding: '0 50px 200px' }}>
                        {cards.map((card: any) => (
                            <Card key={card.id} onClick={() => { setSelectedCard(card.id); }}>
                                <Check>
                                    {selectedCard === card.id && <img src={CheckIcon} alt="check" width={24} height={24} />}
                                </Check>
                                <Cards
                                    number={card.number || ''}
                                    name={card.name || ''}
                                    expiry={card.expiry || ''}
                                    cvc={card.cvc || ''}
                                />
                            </Card>
                        ))}
                    </div>
                    <CustomButton isDisabled={selectedCard < 0} onClick={() => { setIsModalOpen(false); onPay() }}>Pay</CustomButton>
                </>
                :
                <>
                    <div style={{ padding: '0 50px' }}>
                        <div style={{ width: '100%', textAlign: 'center' }}>
                            <AddCard style={{ width: '100px', height: '100px' }} />
                        </div>
                        <h3>You don't have any payment method saved</h3>
                        <CustomButton onClick={() => history.push('/profile')}>Add paymenth method</CustomButton>
                    </div>
                </>
            }
        </Modal>
    )

    const leaveAReviewView = (
        <Modal
            title="Leave a review"
            onClose={() => {
                setIsOpenReview(false);
                setReservationId("")
                setProviderId("")
                setRating(-1)
            }}
            isOpen={isOpenReview}
        >
            <LeaveReview>
                <div style={{ paddingBottom: '10px' }}>
                    <Form
                        onSubmit={(formData: any) => {
                            onLeaveAReview({ ...formData, rating });
                            setIsOpenReview(false);
                            setReservationId("")
                            setProviderId("")
                            setRating(-1)
                        }}
                        render={({ handleSubmit, values }) => (

                            <CustomForm onSubmit={handleSubmit}>
                                <FormFields>
                                    <div>
                                        <Label>Comment</Label>
                                        <Field
                                            render={Input}
                                            multiline
                                            label="Comment"
                                            name="comment"
                                            validate={requiredValidation}
                                            type="textarea"
                                        />
                                    </div>
                                </FormFields>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    value={rating}
                                    size={50}
                                    color2={'#ffd700'} />

                                <ButtonContainer>
                                    <ButtonSaveReview type="submit" isDisabled={!values.comment || rating < 0}>Save Review</ButtonSaveReview>
                                </ButtonContainer>
                            </CustomForm>
                        )}
                    />
                </div>
            </LeaveReview>
        </Modal>
    )


    return (
        <Container>
            {leaveAReviewView}
            <ReservationContainer>
                <TitleContainer> My reservations </TitleContainer>
                {reservations && reservations.map((reservation: any) => {
                    const isReviewed = userReviews && userReviews.find((review: any) => {
                        return review.hiredServicesId === reservation.hiredServices.id
                    })

                    const dateReserveEnd = new Date(reservation.hiredServices.date).getTime();
                    const dateNow = new Date().getTime();
                    return (
                        <Reservation key={reservation.hiredServices.id}>
                            <RowDiv>
                                <ReservationTitles> Reservation date: {reservation.hiredServices.date.split('T')[0]}</ReservationTitles>
                                {renderPayments}
                                {
                                    reservation.hiredServices.isPaid ?
                                        <StatusButtonContainer>
                                            <Button
                                                isDisabled >Already paid</Button>
                                        </StatusButtonContainer>
                                        :
                                        <StatusButtonContainer>
                                            <Button onClick={(event) => {
                                                setReservationId(reservation.hiredServices.id)
                                                setProviderId(reservation.provider.id)
                                                setIsModalOpen(true)
                                            }}>Go to pay</Button>
                                        </StatusButtonContainer>
                                }
                                {!isReviewed &&
                                    <>
                                        {(dateReserveEnd <= dateNow)
                                            ?
                                            <Button onClick={(event) => {
                                                if (event.currentTarget === event.target) {
                                                    event.stopPropagation()
                                                    setIsOpenReview(true)
                                                    setReservationId(reservation.hiredServices.id)
                                                    setProviderId(reservation.provider.id)
                                                }
                                            }}>Leave review</Button>
                                            :
                                            <Button onClick={(event) => {
                                                if (event.currentTarget === event.target) {
                                                    event.stopPropagation()
                                                    onCancelReservation(reservation.hiredServices.id)
                                                }
                                            }}>Cancel reservation</Button>
                                        }
                                    </>
                                }
                            </RowDiv>
                            <ProviderInfo>
                                <ProviderTitle> Your provider contact information</ProviderTitle>
                                <RowDiv>
                                    <CustomProviderImg src={`data:image/jpeg;base64,${reservation.provider.photo}`} alt="Image" />
                                    <ColumnProviderDescription>
                                        <RowDivProviderUserName>
                                            <ProviderUsername>{reservation.provider.firstName} {reservation.provider.lastName}</ProviderUsername>
                                            <CategoryName> - </CategoryName>
                                            <CategoryName>{reservation.provider.category.name}</CategoryName>
                                        </RowDivProviderUserName>
                                        <RowDiv>
                                            <ProviderData isBold > Phone number: </ProviderData>
                                            <ProviderData>{reservation.provider.phoneNumber}, </ProviderData>
                                            <ProviderData isBold > Email: </ProviderData>
                                            <ProviderData>{reservation.provider.email} </ProviderData>
                                        </RowDiv>
                                    </ColumnProviderDescription>
                                </RowDiv>
                            </ProviderInfo>

                            <ServicesHiredTitle> Your services hired</ServicesHiredTitle>
                            <ServicesContainer>
                                {reservation.services && reservation.services.map((service: any) => {
                                    return (
                                        <Service key={service.id}>
                                            <RowDivProviderUserName>
                                                <ProviderUsername>{service.title}  -  ${service.price} p/ hour - {service.hours} hours</ProviderUsername>
                                            </RowDivProviderUserName>
                                            <ServiceDescription>{service.description}</ServiceDescription>
                                        </Service>
                                    )
                                })}
                            </ServicesContainer>
                            <ReservationTitles> Total Price: ${getTotalPrice(reservation.services)}</ReservationTitles>
                        </Reservation>
                    )
                })}
                {(!reservations || !reservations.length) &&
                    <EmptyContainer>
                        <EmptyIcon />
                        <EmptyText isBold>There are no reservations yet</EmptyText>
                    </EmptyContainer>
                }
            </ReservationContainer>
        </Container>
    );
}

export default MyReservations;

