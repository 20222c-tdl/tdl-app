import React, { FunctionComponent, useState } from 'react';
import history from '../../helpers/history';
import { Navbar, TitleContainer, Text, ProvidersContainer, Provider, ProviderText, EmptyContainer, ProviderIcon, ColumnDiv, StarDiv, RowDiv, CalificationText, ReviewsText, CategoryText, CustomProviderImg, StarIcon } from './styles';
import { IHomeProps } from './types';
import { Star } from '@mui/icons-material';

const Home: FunctionComponent<any> = (props: IHomeProps) => {
    const { categoryNames, onFilterCategory, allProviders, onClearFilter } = props;
    const [categoryName, setCategoryName] = useState("");

    const handleFilterCategory = (category: string) => {
        setCategoryName(category)
        onFilterCategory(category)
    }
    const handleCleanFilter = () => {
        setCategoryName("")
        onClearFilter()
    }

    const NavLinks: any = () => categoryNames && categoryNames.map((category: any) =>
        <CategoryText isSelected={category === categoryName} key={category} onClick={() => { handleFilterCategory(category) }} >{category}</CategoryText>);

    return (
        <>
            <Navbar>
                <Text onClick={() => { handleCleanFilter() }}>Categories:</Text>
                <NavLinks />
            </Navbar >
            {allProviders && allProviders.length > 0 &&
                <ColumnDiv>
                    <TitleContainer> All providers available</TitleContainer>
                    <ProvidersContainer>
                        {allProviders && allProviders.map((providerObj) => {
                            const userProvider = providerObj.provider;
                            return (
                                <Provider key={userProvider.id} onClick={() => history.push(`/providers/${userProvider.id}`)}>

                                    <RowDiv>
                                        <CustomProviderImg src={`data:image/jpeg;base64,${userProvider.photo}`} alt="Image" />
                                        <ColumnDiv>
                                            <RowDiv>
                                                <ProviderText isBold>{userProvider.firstName} {userProvider.lastName}</ProviderText>
                                                <StarDiv>
                                                    <CalificationText>{Number(providerObj.totalRating).toFixed(1)}</CalificationText>
                                                    <StarIcon />
                                                </StarDiv>
                                            </RowDiv>
                                            <RowDiv>
                                                <ReviewsText>{userProvider.category.name} - </ReviewsText>
                                                <ReviewsText>{providerObj.reviewCount} REVIEWS</ReviewsText>
                                            </RowDiv>
                                        </ColumnDiv>
                                    </RowDiv>
                                </Provider>
                            )
                        })}
                    </ProvidersContainer>
                </ColumnDiv>
            }
            {(!allProviders || !allProviders.length) &&
                <EmptyContainer>
                    <ProviderIcon />
                    <ProviderText isBold>There are no providers that match your filters</ProviderText>
                </EmptyContainer>
            }
        </>
    );
}

export default Home;

