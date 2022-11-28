import React, { FunctionComponent, useState } from 'react';
import history from '../../helpers/history';
import { ColumnDiv, DescriptionText, EmptyContainer, Place, PlaceIcon, PlacesContainer, PlaceText, RowDiv, TitleContainer } from './styles';
import { IPlacesProps } from './types';

const Places: FunctionComponent<IPlacesProps> = (props: IPlacesProps) => {
    const { places } = props;

    return (
        <>
            {places && places.length &&
                <ColumnDiv>
                    <TitleContainer> All places available</TitleContainer>
                    <PlacesContainer>
                        {places && places.map((place) => {
                            return (
                                <Place key={place.id} onClick={() => history.push(`/place/${place.id}`)}>
                                    <PlaceText isBold>{place.name}</PlaceText>
                                    <DescriptionText>{place.description}</DescriptionText>
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
