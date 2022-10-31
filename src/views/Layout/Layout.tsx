import React, { FunctionComponent, useState } from 'react';
import LogoImg from 'assets/denunciar.png';
import history from '../../helpers/history';

import {
    TopNav,
    Logo,
    RowDiv,
    SearchContainer,
    SearchInput,
    CustomSearchIcon,
    CustomAccountCircleIcon,
    Block
} from './styles';
import { ILayoutProps } from './types';

const Layout: FunctionComponent<ILayoutProps> = (props: ILayoutProps) => {
    const { name, children } = props;
    const [input, setInput] = useState('');
    const [isCollapsed, setIsCollapsed] = useState(true);
    
    return (
        <>
            <TopNav>
                <RowDiv onClick={() => history.push('/')}>
                    <Logo src={LogoImg} alt="logo" />
                    <p>Denunci.AR</p>
                </RowDiv>
                <SearchContainer>
                    <SearchInput type="text" value={input} placeholder='Search anything' onInput={e => setInput(e.currentTarget.value)} />
                    <CustomSearchIcon />
                </SearchContainer>
                <CustomAccountCircleIcon onClick={() => setIsCollapsed(!isCollapsed)} />
            </TopNav>
            <Block isCollapsed={isCollapsed} >
                {!name ?
                    <a href="/login">Login</a>
                    :
                    <a href="/profile">Profile</a>
                }
                <a href="/services">Services</a>
                {!!name && <p onClick={() => {}}>Logout</p>}
            </Block>
            {children}
        </>
    );
}

export default Layout;