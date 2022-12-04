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
    Block,
    CustomProfileImg
} from './styles';
import { ILayoutProps } from './types';
import { onLogout } from 'redux/actions/user.actions';
import { useDispatch } from 'react-redux';
import useTypedSelector from 'hooks/useTypedSelector';
import { getCookie } from 'helpers/cookies';

const Layout: FunctionComponent<ILayoutProps> = (props: ILayoutProps) => {
    const { name, children, onSearchNav } = props;
    const dispatch = useDispatch();
    const { user, userPhoto } = useTypedSelector((state) => state.user);
    const { communityPhoto } = useTypedSelector((state) => state.community);
    const { providerData } = useTypedSelector((state) => state.providers);
    const token = getCookie('access_token');


    const [input, setInput] = useState('');
    const [isCollapsed, setIsCollapsed] = useState(true);

    const onClickLogout = () => {
        dispatch(onLogout())
    }

    const isUser = user && (user.role === "user");
    const isProvider = user && (user.role === "provider");
    const isCommunity = user && (user.role === "community");

    return (
        <>
            <TopNav>
                <RowDiv onClick={() => history.push('/home')}>
                    <Logo src={LogoImg} alt="logo" />
                    <p>Denunci.AR</p>
                </RowDiv>
                {isUser &&
                    <SearchContainer>
                        <SearchInput type="text" value={input} placeholder='Search anything' onInput={e => { setInput(e.currentTarget.value); !!onSearchNav && onSearchNav(e.currentTarget.value) }} />
                        <CustomSearchIcon />
                    </SearchContainer>
                }
                {isCommunity && communityPhoto && token &&

                    <CustomProfileImg src={`data:image/jpeg;base64,${communityPhoto.photo}`} alt="Image" onClick={() => setIsCollapsed(!isCollapsed)} />
                }
                {isUser && userPhoto && token &&

                    <CustomProfileImg src={`data:image/jpeg;base64,${userPhoto.photo}`} alt="Image" onClick={() => setIsCollapsed(!isCollapsed)} />
                }
                {isProvider && providerData && token &&

                    <CustomProfileImg src={`data:image/jpeg;base64,${providerData.photo}`} alt="Image" onClick={() => setIsCollapsed(!isCollapsed)} />
                }
                {(!token || (isCommunity && !communityPhoto) || (isUser && !userPhoto) || (isProvider && !providerData)) &&
                    <CustomAccountCircleIcon onClick={() => setIsCollapsed(!isCollapsed)} />
                }
            </TopNav>
            <Block isCollapsed={isCollapsed} >
                {!name && <a onClick={() => history.push('/')}>Sign up</a>}
                {!name && <a onClick={() => history.push('/loginUser')}>Login</a>}

                {!!name && isUser && <a onClick={() => history.push('/home')}>Home</a>}
                {!!name && isUser && <a onClick={() => history.push('/profile')}>Profile</a>}
                {!!name && isUser && <a onClick={() => history.push('/claims')}>Claims</a>}
                {!!name && isUser && <a onClick={() => history.push('/places')}>Places</a>}
                {!!name && isUser && <a onClick={() => history.push('/reservations')}>My reservations</a>}

                {!!name && isProvider && <a onClick={() => history.push('/profile')}>Profile</a>}
                {!!name && isProvider && <a onClick={() => history.push('/services')}>Services</a>}
                {!!name && isProvider && <a onClick={() => history.push('/reviews')}>Reviews</a>}

                {!!name && isCommunity && <a onClick={() => history.push('/claimsManagment')}>Claims</a>}
                {!!name && isCommunity && <a onClick={() => history.push('/placesManagement')}>Places</a>}


                {!!name && <p onClick={() => onClickLogout()}>Logout</p>}

            </Block>
            {children}
        </>
    );
}

export default Layout;
