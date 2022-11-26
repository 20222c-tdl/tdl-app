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
import { onLogout } from 'redux/actions/user.actions';
import { useDispatch } from 'react-redux';

const Layout: FunctionComponent<ILayoutProps> = (props: ILayoutProps) => {
    const { name, children, onSearchNav } = props;
    const dispatch = useDispatch();

    const [input, setInput] = useState('');
    const [isCollapsed, setIsCollapsed] = useState(true);

    const onClickLogout = () => {
        dispatch(onLogout())
    }

    return (
        <>
            <TopNav>
                <RowDiv onClick={() => history.push('/home')}>
                    <Logo src={LogoImg} alt="logo" />
                    <p>Denunci.AR</p>
                </RowDiv>
                <SearchContainer>
                    <SearchInput type="text" value={input} placeholder='Search anything' onInput={e => { setInput(e.currentTarget.value); onSearchNav(e.currentTarget.value)}} />
                    <CustomSearchIcon />
                </SearchContainer>
                <CustomAccountCircleIcon onClick={() => setIsCollapsed(!isCollapsed)} />
            </TopNav>
            <Block isCollapsed={isCollapsed} >
                <a href="/home">Home</a>
                {!name && <a onClick={() => history.push('/')}>Sign up</a>}
                {!name && <a onClick={() => history.push('/loginUser')}>Login</a>}
                {!!name && <a onClick={() => history.push('/profile')}>Profile</a>}
                {!!name && <a onClick={() => history.push('/claims')}>Claims</a>}
                {!!name && <a onClick={() => history.push('/reservations')}>My reservations</a>}
                {!!name && <p onClick={() => onClickLogout()}>Logout</p>}

            </Block>
            {children}
        </>
    );
}

export default Layout;
