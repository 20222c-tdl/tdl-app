import React, { FunctionComponent } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ColumnDivPlaceInfo, NameText, DescriptionText, CustomForm, Button, PlaceContainer, CustomPlaceImg, ImgDiv, TimesContainer, View, CustomButton, CustomView, TimeButton } from './styles';
import { IPlaceDetailsProps } from './types';

const PlaceDetails: FunctionComponent<IPlaceDetailsProps> = (props: IPlaceDetailsProps) => {
    const { place, date, setDate, onMakeReservation, times, selectedTime, setSelectedTime } = props;
    return (
        <PlaceContainer>
            <ColumnDivPlaceInfo>
                <NameText>{place.name} </NameText>
                <DescriptionText> {place.description}</DescriptionText>
            </ColumnDivPlaceInfo>
            <ImgDiv>
                <CustomPlaceImg src={`data:image/jpeg;base64,${place.photo}`} alt="Image" />
            </ImgDiv>
            <CustomView>
                <TimesContainer>
                    {times.map((time: string, index: number) => {
                        const nextElement = (index !== times.length - 1) && times[index + 1];
                        return (
                            <>
                                {(index !== times.length - 1) && <View key={`${index}${Math.random()}`}>
                                    <CustomButton
                                        isSelected={selectedTime === time}
                                    >
                                        <TimeButton onClick={() => setSelectedTime(time)}>{time} - {nextElement}</TimeButton>
                                    </CustomButton>
                                </View>}
                            </>
                        );
                    })}
                </TimesContainer>
            </CustomView>

            <CustomForm >
                <ReactDatePicker
                    selected={date}
                    onChange={(date) => {
                        setDate(date)
                    }}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select date"
                    isClearable={true}
                    className="datePicker"
                />
                <Button isDisabled={date < new Date() || selectedTime === ''} onClick={() => onMakeReservation()}>Make reservation</Button>
            </CustomForm>
        </PlaceContainer>
    );
}

export default PlaceDetails;

