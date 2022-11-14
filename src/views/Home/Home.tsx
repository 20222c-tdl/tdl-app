import React, { FunctionComponent } from 'react';
import { Brand, Navbar, TitleContainer, Text, ProvidersContainer, Provider, ProviderText, EmptyContainer, ProviderIcon, ColumnDiv, StarDiv, RowDiv } from './styles';
import { IHomeProps } from './types';
import { Star } from '@mui/icons-material';


const Home: FunctionComponent<any> = (props: IHomeProps) => {
    const { brand, categoryNames, onFilterCategory, providers } = props;

    const handleFilterCategory = (category: string) => {
        onFilterCategory(category)
    }

    const NavLinks: any = () => categoryNames && categoryNames.map((category: any) =>
        <Text key={category} onClick={() => { handleFilterCategory(category) }} >{category}</Text>);

    return (
        <>
            <Navbar>
                <Brand>{brand.name}</Brand>
                <NavLinks />
            </Navbar >

            {providers && providers.length &&
                <ColumnDiv>
                    <TitleContainer> Providers available</TitleContainer>
                    <ProvidersContainer>
                        {providers && providers.map((provider) => (
                            <Provider key={provider.id}>
                                <RowDiv>
                                    <ProviderText isBold>{provider.firstName} {provider.lastName}</ProviderText>
                                    <StarDiv>
                                        <Star />
                                    </StarDiv>
                                </RowDiv>

                                <ProviderText>{provider.phoneNumber}  -  {provider.email}</ProviderText>

                            </Provider>
                        ))}
                    </ProvidersContainer>
                </ColumnDiv>
            }
            {(!providers || !providers.length) &&
                <EmptyContainer>
                    <ProviderIcon />
                    <ProviderText isBold>There are no providers that match your filters</ProviderText>
                </EmptyContainer>
            }
        </>
    );
}

export default Home;

