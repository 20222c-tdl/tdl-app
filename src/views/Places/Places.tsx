import React, { FunctionComponent } from 'react';
import history from '../../helpers/history';
import { ColumnDiv, CustomPlaceImg, DescriptionText, EmptyContainer, Place, PlaceIcon, PlacesContainer, PlaceText, RowDiv, TitleContainer } from './styles';
import { IPlacesProps } from './types';

const Places: FunctionComponent<IPlacesProps> = (props: IPlacesProps) => {
    const { places } = props;

    return (
        <>
            {places && places.length > 0 &&
                <ColumnDiv>
                    <TitleContainer> All places available</TitleContainer>
                    <PlacesContainer>
                        {places && places.map((place) => {
                            return (
                                <Place key={place.id} onClick={() => history.push(`/place/${place.id}`)}>
                                    <RowDiv>
                                        <CustomPlaceImg src={`data:image/jpeg;base64,${place.photo}`} alt="Image" />
                                        <ColumnDiv>
                                            <PlaceText isBold>{place.name}</PlaceText>
                                            <DescriptionText>{place.description}</DescriptionText>
                                        </ColumnDiv>
                                    </RowDiv>
                                </Place>
                            )
                        })}
                    </PlacesContainer>
                </ColumnDiv>
            }
            {(!places || !places.length) &&
                <EmptyContainer>
                    <PlaceIcon />
                    <PlaceText isBold>There are no places that match your filters</PlaceText>
                </EmptyContainer>
            }
        </>
    );
}

export default Places;

