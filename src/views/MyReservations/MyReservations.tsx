import React, { FunctionComponent, useState } from 'react';
import Input from '../../components/Input/Input';
import ReactStars from 'react-stars'
import { TitleContainer, ReservationContainer, Reservation, RowDiv, CustomProviderImg, ColumnProviderDescription, EmptyContainer, EmptyText, EmptyIcon, Container, ReservationTitles, ProviderInfo, ProviderTitle, ProviderUsername, ProviderData, RowDivProviderUserName, CategoryName, ServicesContainer, ServiceDescription, Service, ServicesHiredTitle, StatusButtonContainer, StatusButton, LeaveReview, CustomForm, FormFields, Label, ButtonContainer, Button } from './styles';
import { MyReservationsProps } from './types';
import person from "../../assets/person.jpg";
import { Modal } from 'components/Modal/Modal';
import { Field, Form } from 'react-final-form';
import { requiredValidation } from 'helpers/validations';

const MyReservations: FunctionComponent<MyReservationsProps> = (props: MyReservationsProps) => {
    const { onLeaveAReview, onCancelReservation, reservations, userReviews, setReservationId } = props;
    const [isOpenReview, setIsOpenReview] = useState(false);
    const [rating, setRating] = useState(-1);

    const ratingChanged = (newRating: number) => {
        setRating(newRating);
    }

    const leaveAReviewView = (
        <Modal
            title="Leave a review"
            onClose={() => {
                setIsOpenReview(false);
                setReservationId("")
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
                            setRating(-1)
                        }}
                        render={({ handleSubmit, values }) => (

                            <CustomForm onSubmit={handleSubmit}>
                                <FormFields>
                                    <div>
                                        <Label>Description</Label>
                                        <Field
                                            render={Input}
                                            multiline
                                            label="Description"
                                            name="description"
                                            validate={requiredValidation}
                                            type="text"
                                        />
                                    </div>
                                </FormFields>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    value={rating}
                                    size={24}
                                    color2={'#ffd700'} />

                                <ButtonContainer>
                                    <Button type="submit" isDisabled={!values.description || rating < 0}>Save Review</Button>
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
            <ReservationContainer>
                <TitleContainer> My reservations </TitleContainer>
                {reservations && reservations.map((reservation: any) => {
                    const isReviewed = userReviews && userReviews.find((review: any) => {
                        return review.hiredServicesId === reservation.hiredServicesId
                    })

                    const dateReserveEnd = new Date(reservation.reserveEnd).getTime();
                    const dateNow = new Date().getTime();
                    return (
                        <Reservation key={reservation.hiredServicesId}>
                            <RowDiv>
                                <ReservationTitles> Reservation date: "25/11/2022"</ReservationTitles>
                                <StatusButtonContainer>
                                    <StatusButton color={"DEFAULT"}>Go to Pay</StatusButton>
                                </StatusButtonContainer>
                                {!isReviewed &&
                                    <>
                                        {(dateReserveEnd <= dateNow)
                                            ?
                                            <Button onClick={(event) => {
                                                if (event.currentTarget === event.target) {
                                                    event.stopPropagation()
                                                    setIsOpenReview(true)
                                                    setReservationId(reservation.hiredServicesId)
                                                }
                                            }}>Leave review</Button>
                                            :
                                            <Button onClick={(event) => {
                                                if (event.currentTarget === event.target) {
                                                    event.stopPropagation()
                                                    onCancelReservation(reservation.hiredServicesId)
                                                }
                                            }}>Cancel reservation</Button>
                                        }
                                    </>
                                }
                            </RowDiv>
                            <ProviderInfo>
                                <ProviderTitle> Your provider contact information</ProviderTitle>
                                <RowDiv>
                                    <CustomProviderImg src={person} alt="Person" />
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
                                {reservation.hiredServices && reservation.hiredServices.map((service: any) => {
                                    console.log("🚀 ~ {reservations&&reservations.map ~ reservation", reservation, service)
                                    return (
                                        <Service key={service.serviceId}>
                                            <RowDivProviderUserName>
                                                <ProviderUsername>Serviceeee Titleeeee  -  Price p/ hour - 3 hours</ProviderUsername>
                                            </RowDivProviderUserName>
                                            <ServiceDescription>Esta es una muy buena descripcion para un servicio que fue reservado por algun usuario</ServiceDescription>
                                        </Service>
                                    )
                                })}
                            </ServicesContainer>
                            <ReservationTitles> Total Price: $3500</ReservationTitles>
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

