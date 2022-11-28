import React, { FunctionComponent } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ColumnDivPlaceInfo, NameText, DescriptionText, CustomForm, Button, PlaceContainer } from './styles';

const PlaceDetails: FunctionComponent<any> = (props: any) => {
    const { place, date, setDate, onMakeReservation } = props;

    return (
        <PlaceContainer>
            <ColumnDivPlaceInfo>
                <NameText>{place.name} </NameText>
                <DescriptionText> {place.description}</DescriptionText>
            </ColumnDivPlaceInfo>

            <CustomForm >
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
                <Button isDisabled={date < new Date()} onClick={() => onMakeReservation()}>Make reservation</Button>
            </CustomForm>
        </PlaceContainer>
    );
}

export default PlaceDetails;

