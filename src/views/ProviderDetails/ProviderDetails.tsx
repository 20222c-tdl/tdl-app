import React, { FunctionComponent } from 'react';
import { IHiredService, IProviderDetailsProps, IServiceData } from './types';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, CalificationReviewText, CalificationText, CategoryName, CircleButton, CircleButtonText, ColumnDiv, ColumnDivPrice, ColumnDivProviderInfo, ColumnDivReview, ColumnReviewsDescription, CustomForm, CustomImg, CustomReviewImg, DescriptionText, EmptyContainer, MonetizationTypeText, NameText, PriceByDurationDiv, PriceText, ProviderContainer, Review, ReviewIcon, ReviewsContainer, ReviewsText, ReviewUsernameTitle, RowDiv, RowFormDiv, Service, ServiceIcon, ServicesColumn, ServicesContainer, ServiceText, ServiceTitle, StarDiv, StarIcon, TitleContainer, TotalPriceContainer, TotalPriceText } from './styles';
import COLORS from 'helpers/colors';

const ProviderDetails: FunctionComponent<IProviderDetailsProps> = (props: IProviderDetailsProps) => {
    const { provider, hiredServices, providerServices, providerReviews, setHiredServices, onMakeReservation, date, setDate } = props;

    const getTotalPrice = () => {
        let totalPrice = 0;
        hiredServices && hiredServices.forEach((service: IHiredService, index: number) => {
            if (providerServices[index]) {
                if (service.isFixed && service.duration > 0) {
                    totalPrice += providerServices[index].price;
                } else {
                    totalPrice += service.duration * providerServices[index].price;
                }
            }
        });
        return totalPrice;
    };

    const getTotalDuration = () => {
        let totalDuration = 0;
        hiredServices && hiredServices.forEach((service: IHiredService) => {
            totalDuration += service.duration;
        });
        return totalDuration;
    };

    return (
        <>
            {provider && <ProviderContainer>
                <RowDiv>
                    <CustomImg src={`data:image/jpeg;base64,${provider.photo}`} alt="Image" />
                    <ColumnDivProviderInfo>
                        <NameText>{provider.firstName} {provider.lastName}</NameText>
                        <CategoryName> {provider.category.name}</CategoryName>
                    </ColumnDivProviderInfo>
                    <ColumnDivReview>
                        <StarDiv>
                            <CalificationText>{providerReviews ? Number(providerReviews.totalRating).toFixed(1) : 0}</CalificationText>
                            <StarIcon />
                        </StarDiv >
                        <ReviewsText>{providerReviews ? providerReviews.reviews.length : 0} REVIEWS</ReviewsText>
                    </ColumnDivReview>
                </RowDiv>
                <ServicesColumn>
                    <TitleContainer> Services </TitleContainer>
                    <ServicesContainer>
                        {providerServices && providerServices.map((service: IServiceData, index: number) => {
                            const isByDuration = service.monetizationType === 'BY_THE_HOUR';
                            const sameService = hiredServices && hiredServices.find((hiredService: IHiredService) => {
                                return hiredService.id === service.id
                            })
                            return sameService && (
                                <Service key={index} >
                                    <ServiceTitle>{service.title}</ServiceTitle>
                                    <DescriptionText>{service.description}</DescriptionText>
                                    <RowDiv>
                                        <ColumnDivPrice>
                                            <PriceText>$ {service.price} {service.monetizationType === "BY_THE_HOUR" && `/per hour`}</PriceText>
                                            <MonetizationTypeText>{service.monetizationType === "FIXED" ? "Price fixed" : "Price by duration"}</MonetizationTypeText>
                                        </ColumnDivPrice>
                                        {isByDuration ?
                                            <ColumnDiv>
                                                <PriceByDurationDiv>
                                                    {sameService.duration > 0 ?
                                                        <CircleButton onClick={() => {
                                                            const services = [...hiredServices];
                                                            const index = services.findIndex((hiredService: IHiredService) => hiredService.id === service.id);
                                                            services[index].duration -= 1;
                                                            setHiredServices(services);
                                                        }}>
                                                            <CircleButtonText isMinus>-</CircleButtonText>
                                                        </CircleButton>
                                                        :
                                                        <div style={{ width: 40 }} />
                                                    }
                                                    <PriceText>${service.price * hiredServices[index].duration}</PriceText>
                                                    {
                                                        sameService.duration < 10
                                                            ?
                                                            <CircleButton onClick={() => {
                                                                const services = [...hiredServices];
                                                                const index = services.findIndex((hiredService: IHiredService) => hiredService.id === service.id);
                                                                services[index].duration += 1;
                                                                setHiredServices(services);

                                                            }}>
                                                                <CircleButtonText>+</CircleButtonText>
                                                            </CircleButton>
                                                            :
                                                            <div style={{ width: 40 }} />
                                                    }
                                                </PriceByDurationDiv>
                                                {isByDuration &&
                                                    <div style={{ alignItems: 'center' }}>
                                                        {hiredServices[index].duration > 0 &&
                                                            <p style={{ color: COLORS.grayAlto, margin: "0" }}>
                                                                {hiredServices[index].duration} hour{hiredServices[index].duration > 1 && 's'}*
                                                            </p>}
                                                    </div>
                                                }
                                            </ColumnDiv>
                                            :
                                            <RowDiv style={{ justifyContent: 'flex-end', width: '53%' }}>
                                                <CircleButton isClicked={sameService.duration === 0}
                                                    onClick={() => {
                                                        const services = [...hiredServices];
                                                        const index = services.findIndex((hiredService: IHiredService) => hiredService.id === service.id);
                                                        services[index].duration === 0 ? services[index].duration = providerServices[index].duration || 1 : services[index].duration = 0;
                                                        setHiredServices(services);
                                                    }}>
                                                    <CircleButtonText style={{ fontSize: 16, lineHeight: "27px" }}>???</CircleButtonText>
                                                </CircleButton>
                                            </RowDiv>
                                        }
                                    </RowDiv>
                                </Service>
                            )
                        })}
                    </ServicesContainer>
                    {(!providerServices || !providerServices.length) &&
                        <EmptyContainer>
                            <ServiceIcon />
                            <ServiceText isBold>There are no services yet</ServiceText>
                        </EmptyContainer>
                    }
                </ServicesColumn>

                {providerServices && providerServices.length > 0 && <TotalPriceContainer>
                    <RowDiv>
                        <ColumnDiv style={{ width: '53%' }}>
                            <RowDiv>
                                <TotalPriceText >Total price: </TotalPriceText>
                                <PriceText> ${getTotalPrice()} </PriceText>
                            </RowDiv>
                            <RowDiv>
                                <TotalPriceText >Total duration: </TotalPriceText>
                                {getTotalDuration() > 0 ?
                                    <PriceText > {getTotalDuration()} hour{getTotalDuration() > 1 && 's'}*</PriceText>
                                    :
                                    <PriceText > 0 hours</PriceText>
                                }
                            </RowDiv>
                        </ColumnDiv>
                        <CustomForm >
                            <RowFormDiv>
                                <ReactDatePicker
                                    selected={date}
                                    onChange={(date) => {
                                        setDate(date)
                                    }}
                                    //excludeDateIntervals={datesDisabled}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="Select date"
                                    isClearable={true}
                                    className="datePicker"
                                />
                            </RowFormDiv>
                            <Button isDisabled={/*date < new Date() || */getTotalPrice() <= 0} onClick={() => onMakeReservation()}>Make reservation</Button>
                        </CustomForm>
                    </RowDiv>
                </TotalPriceContainer>}

                <ReviewsContainer>
                    <TitleContainer> Reviews </TitleContainer>
                    {providerReviews && providerReviews.reviews && providerReviews.reviews.map((reviewObj: any) => {
                        return (
                            <Review key={reviewObj.review.id}>
                                <RowDiv>
                                    <CustomReviewImg src={`data:image/jpeg;base64,${reviewObj.user.photo}`} alt="Image" />
                                    <ColumnReviewsDescription>
                                        <RowDiv>
                                            <StarDiv>
                                                <CalificationReviewText>{Number(reviewObj.review.rating).toFixed(1) ? Number(reviewObj.review.rating).toFixed(1) : 0}</CalificationReviewText>
                                                <StarIcon />
                                            </StarDiv >
                                            <ReviewUsernameTitle>{reviewObj.user.firstName} {reviewObj.user.lastName}</ReviewUsernameTitle>
                                        </RowDiv>
                                        <DescriptionText> {reviewObj.review.comment}</DescriptionText>
                                    </ColumnReviewsDescription>
                                </RowDiv>
                            </Review>
                        )
                    })}
                    {(!providerReviews || !providerReviews.reviews || !providerReviews.reviews.length) &&
                        <EmptyContainer>
                            <ReviewIcon />
                            <ServiceText isBold>There are no reviews yet</ServiceText>
                        </EmptyContainer>
                    }
                </ReviewsContainer>

            </ProviderContainer >
            }
        </>
    );
}

export default ProviderDetails;
