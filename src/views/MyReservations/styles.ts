import styled, { css } from 'styled-components';
import COLORS from '../../helpers/colors';
import EventBusyIcon from '@mui/icons-material/EventBusy';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  text-align: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`;

export const ReservationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  text-align: center;
  align-items: center;
  padding: 1px 8px;
  width: 100%;
  max-width: 1024px;
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${COLORS.grayAlto};
  text-align: center;
  font-weight: bold ;
  font-size: 30px;
  padding: 10px;
  width: 100%;
;`

export const Reservation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 15px;
    width: 90%;
    border-bottom: 1px solid ${COLORS.grayPlaceholder};
    padding: 0 0 10px 0
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const CustomProviderImg = styled.img`
  width: 100%;
  max-width:65px;
  height: 65px;
  width: auto;
  border-radius: 50%;
`;

export const ColumnProviderDescription = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 1px 15px;
  width: 100%;
`;

export const EmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 20px 0;
    height: 100%;
    width: 100%;
`;

export const EmptyText = styled.p`
    font-size: 18px;
    margin: 0 0 2px;
    text-overflow: ellipsis;
    font-family: 'Open Sans';
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    ${({ isBold }: { isBold?: boolean }) =>
    isBold &&
    css`
        font-weight: bold;
        font-size: 20px;
        white-space: nowrap;
    `};
`;

export const EmptyIcon = styled(EventBusyIcon)`
    width: 150px !important;
    height: 150px !important;
`;

export const ReservationTitles = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: start;
  margin: 0;
  flex: 1;
;`

export const ProviderInfo = styled.div`
    margin: 5px 20px 5px 30px;
    width: 100%;
`;

export const ProviderTitle = styled.p`
  font-size: 22px;
  margin-bottom: 0px;
  text-align: start;
  font-family: 'Open Sans';
  font-style: italic;
  margin: 0;
  flex: 1;
;`

export const ProviderUsername = styled.p`
  font-size: 21px;
  font-family: 'Open Sans';
  margin: 0;
;`

export const CategoryName = styled.p`
  font-size: 20px;
  margin: 0 2px 2px 20px;
  font-family: 'Open Sans';
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${COLORS.greyMystic};
`;

export const ProviderData = styled.p`
  font-size: 20px;
  margin-bottom: 0px;
  font-family: 'Open Sans';
  text-align: start;
  margin: 0 30px 0 0;

  ${({ isBold }: { isBold?: boolean }) =>
    isBold &&
    css`
        margin: 0 10px 0 0;
        font-size: 18px;
        font-weight: bold;
        text-align: start;
    `};
;`

export const RowDivProviderUserName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
`;

export const ServicesContainer = styled.div`
    display: grid;
    margin: 0 2% 0 2%;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    width: 100%;
`;

export const ServiceDescription = styled.p`
  font-size: 20px;
  margin: 0;
  text-align: center;
  color: ${COLORS.greyMystic};
`;


export const Service = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px;
    margin: 0 15px 15px 15px;
    width: 100%;
    border-radius: 10px;
    border: 1px solid ${COLORS.grayPlaceholder};
`;

export const ServicesHiredTitle = styled.p`
  font-size: 22px;
  text-align: start;
  font-family: 'Open Sans';
  font-style: italic;
  margin: 8px 0 0 30px;
  flex: 1;
;`

export const StatusButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  width: 20%;
`;

export const LeaveReview = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-height:70vh;
    align-items: center;
    margin: 10px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid ${COLORS.greyMystic};
`;

export const CustomForm = styled.form`
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 17px;
    & > div {
      width: 50%;
    }
;`


export const FormFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;

  & > div {
      width: 400px;
  }
`;

export const Label = styled.p`
  font-size: 16px;
  font-family: 'Open Sans';
  margin: 0;
`;

export const ButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  flex-direction: row;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0 0;
  padding: 5px 30px;
  border-radius: 6px;
  border: none;
  background-color: ${COLORS.violetRed};
  color: white;
  text-align: center;
  cursor: pointer;

  ${({ isDisabled }: { isDisabled?: boolean }) =>
    isDisabled && 
    css`
        pointer-events: none;
        background-color: ${COLORS.greyMystic};
        color: ${COLORS.grayPlaceholder};
        border: 1px solid ${COLORS.grayPlaceholder};
    `};
;`

export const Card = styled.div`
  max-height: 110px;
  cursor: pointer;
`;

export const Check = styled.div`
  position: relative;
  top: 20px;
  z-index: 21;
  left: 270px;
  width: 20px;
  height: 20px;
`;

export const CustomButton = styled.div`
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    margin: 10px 0;
    padding: 10px 20px;
    border-radius: 6px;
    background-color: ${COLORS.violetRed};
    color: white;
    text-align: center;
    cursor: pointer;

    ${({ isDisabled }: { isDisabled?: boolean }) =>
    isDisabled &&
    css`
        pointer-events: none;
        background-color: ${COLORS.greyMystic};
        color: ${COLORS.grayPlaceholder};
        border: 1px solid ${COLORS.grayPlaceholder};
    `};
`;