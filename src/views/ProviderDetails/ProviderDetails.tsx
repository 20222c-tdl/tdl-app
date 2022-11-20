import React, { FunctionComponent } from 'react';
import { IProviderDetailsProps } from './types';
import ReactDatePicker from "react-datepicker";
import { Button, CalificationText, CategoryName, CircleButton, CircleButtonText, ColumnDiv, ColumnDivPrice, ColumnDivProviderInfo, ColumnDivReview, CustomForm, CustomImg, DescriptionText, MonetizationTypeText, NameText, PriceByDurationDiv, PriceText, ProviderContainer, ReviewsText, RowDiv, RowFormDiv, Service, ServicesColumn, ServicesContainer, ServiceTitle, StarDiv, StarIcon, TitleContainer, TotalPriceContainer, TotalPriceText } from './styles';
import person from "../../assets/person.jpg";
import COLORS from 'helpers/colors';

const ProviderDetails: FunctionComponent<any> = (props: IProviderDetailsProps) => {
    const { provider, hiredServices, setHiredServices, onMakeReservation, date, setDate } = props;
    const services = provider.services;


    const getTotalPrice = () => {
        let totalPrice = 0;
        hiredServices && hiredServices.forEach((service: any, index: number) => {
            if (service.isFixed && service.duration > 0) {
                totalPrice += services[index].pricePerHour;
            } else {
                totalPrice += service.duration * services[index].pricePerHour;
            }
        });
        return totalPrice;
    };

    const getTotalDuration = () => {
        let totalDuration = 0;
        hiredServices && hiredServices.forEach((service: any) => {
            totalDuration += service.duration;
        });
        return totalDuration;
    };

    return (
        <>
            <ProviderContainer>
                <RowDiv>
                    <CustomImg src={person} alt="Person" />
                    <ColumnDivProviderInfo>
                        <NameText>{provider.firstName} {provider.lastName}</NameText>
                        <CategoryName> {provider.category.name}</CategoryName>
                    </ColumnDivProviderInfo>
                    <ColumnDivReview>
                        <StarDiv>
                            <CalificationText>9</CalificationText>
                            <StarIcon />
                        </StarDiv >
                        <ReviewsText>7 REVIEWS</ReviewsText>
                    </ColumnDivReview>
                </RowDiv>

                <ServicesColumn>
                    <TitleContainer> Services </TitleContainer>
                    <ServicesContainer>
                        {services && services.map((service: any, index: number) => {
                            const isByDuration = service.monetizationType === 'byDuration';
                            const sameService = hiredServices && hiredServices.find((hiredService: any) => {
                                return hiredService.serviceId === service.serviceId
                            })
                            return sameService && (
                                <Service key={index} >
                                    <ServiceTitle>{service.title}</ServiceTitle>
                                    <DescriptionText>{service.description}</DescriptionText>
                                    <RowDiv>
                                        <ColumnDivPrice>
                                            <PriceText>$ {service.pricePerHour} /per hour</PriceText>
                                            <MonetizationTypeText>{service.monetizationType === "fixed" ? "Price fixed" : "Price by duration"}</MonetizationTypeText>
                                        </ColumnDivPrice>
                                        {isByDuration ?
                                            <ColumnDiv>
                                                <PriceByDurationDiv>
                                                    {sameService.duration > 0 ?
                                                        <CircleButton onClick={() => {
                                                            const services = [...hiredServices];
                                                            const index = services.findIndex((hiredService: any) => hiredService.serviceId === service.serviceId);
                                                            services[index].duration -= 1;
                                                            setHiredServices(services);
                                                        }}>
                                                            <CircleButtonText isMinus>-</CircleButtonText>
                                                        </CircleButton>
                                                        :
                                                        <div style={{ width: 40 }} />
                                                    }
                                                    <PriceText>${service.pricePerHour * hiredServices[index].duration}</PriceText>
                                                    {
                                                        sameService.duration < 10
                                                            ?
                                                            <CircleButton onClick={() => {

                                                                const services = [...hiredServices];
                                                                const index = services.findIndex((hiredService: any) => hiredService.serviceId === service.serviceId);
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
                                                        const index = services.findIndex((hiredService: any) => hiredService.serviceId === service.serviceId);
                                                        services[index].duration === 0 ? services[index].duration = provider.services[index].duration || 1 : services[index].duration = 0;
                                                        setHiredServices(services);
                                                    }}>
                                                    <CircleButtonText style={{ fontSize: 16, lineHeight: 20 }}>✓</CircleButtonText>
                                                </CircleButton>
                                            </RowDiv>
                                        }
                                    </RowDiv>




                                </Service>
                            )
                        })}
                    </ServicesContainer>
                </ServicesColumn>

                <TotalPriceContainer>
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
                            <Button isDisabled={date < new Date()} onClick={() => onMakeReservation()}>Make reservation</Button>
                        </CustomForm>
                    </RowDiv>
                </TotalPriceContainer>

            </ProviderContainer>
        </>
    );
}

export default ProviderDetails;
