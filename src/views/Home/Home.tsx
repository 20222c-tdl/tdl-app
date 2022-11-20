import React, { FunctionComponent, useState } from 'react';
import history from '../../helpers/history';
import { Navbar, TitleContainer, Text, ProvidersContainer, Provider, ProviderText, EmptyContainer, ProviderIcon, ColumnDiv, StarDiv, RowDiv, CalificationText, ReviewsText, CategoryText } from './styles';
import { IHomeProps } from './types';
import { Star } from '@mui/icons-material';

const Home: FunctionComponent<any> = (props: IHomeProps) => {
    const { categoryNames, onFilterCategory, providers, allProviders } = props;
    const [categoryName, setCategoryName] = useState("");

    const handleFilterCategory = (category: string) => {
        setCategoryName(category)
        onFilterCategory(category)
    }
    const handleCleanFilter = () => {
        setCategoryName("")
    }

    const NavLinks: any = () => categoryNames && categoryNames.map((category: any) =>
        <CategoryText isSelected={category === categoryName} key={category} onClick={() => { handleFilterCategory(category) }} >{category}</CategoryText>);

    return (
        <>
            <Navbar>
                <Text onClick={() => { handleCleanFilter() }}>Categories:</Text>
                <NavLinks />
            </Navbar >
            {categoryName === "" && allProviders && allProviders.length &&
                <ColumnDiv>
                    <TitleContainer> All providers available</TitleContainer>
                    <ProvidersContainer>
                        {allProviders && allProviders.map((provider) => (
                            <Provider key={provider.id} onClick={() => history.push(`/providers/${provider.id}`)}>
                                <RowDiv>
                                    <ProviderText isBold>{provider.firstName} {provider.lastName}</ProviderText>
                                    <StarDiv>
                                        <CalificationText>6.7</CalificationText>
                                        <Star />
                                    </StarDiv>
                                </RowDiv>
                                <RowDiv>
                                    <ReviewsText>{provider.category.name} - </ReviewsText>
                                    <ReviewsText>7 REVIEWS</ReviewsText>
                                </RowDiv>
                            </Provider>
                        ))}
                    </ProvidersContainer>
                </ColumnDiv>
            }
            {categoryName && providers && providers.length &&
                <ColumnDiv>
                    <TitleContainer> Providers available</TitleContainer>
                    <ProvidersContainer>
                        {providers && providers.map((provider) => {
                            return (<Provider key={provider.id} onClick={() => history.push(`/providers/${provider.id}`)}>
                                <RowDiv>
                                    <ProviderText isBold>{provider.firstName} {provider.lastName}</ProviderText>
                                    <StarDiv>
                                        <CalificationText>6.7</CalificationText>
                                        <Star />
                                    </StarDiv>
                                </RowDiv>
                                <ReviewsText>7 REVIEWS</ReviewsText>
                            </Provider>)
                        })}
                    </ProvidersContainer>
                </ColumnDiv>
            }
            {((!allProviders || !allProviders.length) && (!providers || !providers.length)) &&
                <EmptyContainer>
                    <ProviderIcon />
                    <ProviderText isBold>There are no providers that match your filters</ProviderText>
                </EmptyContainer>
            }
        </>
    );
}

export default Home;

