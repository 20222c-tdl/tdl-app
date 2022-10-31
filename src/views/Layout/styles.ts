import styled, { css } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import COLORS from '../../helpers/colors';


export const TopNav = styled.div`
  background-color: ${COLORS.lightGray};
  border-bottom: 1px solid ${COLORS.greyMystic};
  align-items: center;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 60px;
  padding: 0 20px;

  & > a {
    color: ${COLORS.black};
    padding: 5px 5%;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
  }
;`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  & > p {
    padding: 0;
    font-size: 18px;
    margin: 0;
    font-family: 'OpenSansItalic';
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 35%;
  margin: 0 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 15px;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.greyMystic};
  padding: 0 10px;
  outline: none;
  line-height: 3.5em;
  font-size: 16px;
  color: ${COLORS.black};
`;

export const CustomSearchIcon = styled(SearchIcon)`
  background-color: ${COLORS.blueFire};
  cursor: pointer;
  color: white;
  border-radius: 50%;
  padding: 3px;
  left: -30px;
  height: 28px !important;
  width: 28px !important;
  position: relative;
`;

export const CustomAccountCircleIcon = styled(AccountCircleIcon)`
  cursor: pointer;
  height: 40px !important;
  width: 40px !important;
  border-radius: 50%;
  padding: 3px;
`;

export const Block = styled.div`
  position: absolute;
  top: 55px;
  right: 20px;
  display: block;
  box-shadow: 0 2px 4px rgba(0,0,0,0.18);
  border-radius: 8px;
  background-color: ${COLORS.grayPlaceholder};
  padding: 10px 20px;
  text-align: center;

  ${({ isCollapsed }: { isCollapsed?: boolean }) =>
    isCollapsed
      ? css`
          opacity:0;
          width:0;
          height:0;
          transition: width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.2s;
        `
      : css`
          opacity:1;
          width:100px;
          height: fit-content;
          transition: width 0.5s, height 0.5s, opacity 0.3s 0.3s;
  `};

  & > a, p {
    text-decoration: none;
    display: block;
    margin: 0;
    cursor: pointer;
    padding: 10px 0;
    font-size: 18px;
    color: ${COLORS.black};
    border-bottom: 1px solid ${COLORS.greyMystic};
    width: 100%;
    font-family: 'OpenSans';
  }
`;