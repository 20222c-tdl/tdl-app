import { KeyboardArrowDown } from '@mui/icons-material';

import styled, { css } from 'styled-components';
import COLORS from '../../helpers/colors';

export const CustomButton = styled.button`
  justify-content: flex-end;
  border-color: ${COLORS.black};
  background-color: ${COLORS.grayPlaceholder};
  border-radius: 8px;
  border-width: 2px;
  padding: 9px 13px;
  align-items: center;
  margin: 5px;
  font-weight: bold ;
  cursor: pointer;
  
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  border-radius: 8px;
`;

export const Container = styled.div`
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
  border-radius: 8px;
`;

export const CurrencyDiv = styled.div`
  display: flex;
  align-items: flex-end;
  align-items: center;
  justify-content: right;
  padding-bottom: 20px;
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  &:before {
    border-bottom: 1px solid ${COLORS.violetRed};
    content: '';
    width: 50%;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  font-family: 'OpenSans';

  ${({ hasNoMargin }: { hasNoMargin?: boolean }) =>
    hasNoMargin &&
    css`
        margin: 0;
        flex: 1;
        justify-content: center;
    `};
;`

export const Subtitle = styled.p`
  font-size: 20px;
  font-family: 'OpenSans';
  text-align: center;
  margin: 0;
;`


export const Arrow = styled(KeyboardArrowDown)`
  cursor: pointer;
;`

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Box = styled.div`
    padding: 20px 0;
    max-width: 1024px;
    width: 100%;
`;
