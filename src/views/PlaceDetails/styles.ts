import COLORS from "helpers/colors";
import styled, { css } from "styled-components";

export const ColumnDivPlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1px 8px;
  margin-left: 10px;
`;

export const NameText = styled.p`
  font-size: 35px;
  margin-bottom: 0px;
  font-weight: bold;
  margin: 0;
  flex: 1;
`;

export const DescriptionText = styled.p`
    font-size: 26px;
    margin: 10px 2px 10px;
    font-family: 'Open Sans';
    color: ${COLORS.greyMystic};
`;

export const CustomForm = styled.div`
    width: 30%;
    float: right;
    line-height: 2rem;
    text-align: center;
`;

export const Button = styled.button`
    padding: 5px 10px;
    font-size: 17px;
    border-radius: 6px;
    margin-bottom: 10px;
    cursor: pointer;
    width: 90%;
    background-color: ${COLORS.azure};
    color: ${COLORS.white};
    text-decoration: none;
    border: none;

    ${({ isDisabled }: { isDisabled?: boolean }) =>
    isDisabled &&
    css`
        pointer-events: none;
        background-color: ${COLORS.greyMystic};
        color: ${COLORS.grayPlaceholder};
        border: 1px solid ${COLORS.grayPlaceholder};
    `};
`;

export const PlaceContainer = styled.div`
  max-width: 1024px;
  margin: 50px auto 0;
  border-color: ${COLORS.black};
  border-radius: 10px;
  padding: 0 10px 10px 10px;
`;

export const CustomPlaceImg = styled.img`
  width: 350px;
  margin-right: 8px;
`;

export const ImgDiv = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const TimesContainer = styled.div`
  display: grid;
    margin: 5% 10%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 5px;
    max-width: 1024px;
`;

export const View = styled.div`
    padding: 5px 0;
`;

export const CustomButton = styled.button`
  ${({ isSelected }: { isSelected?: boolean }) =>
    isSelected &&
    css`
        background-color: ${COLORS.blueFire};
        color: ${COLORS.black};
        border: 3px solid ${COLORS.black};
    `};
  background-color: ${COLORS.jellyBean};
  border-radius: 25px;
  padding: 6px 10px;
  margin-bottom: 5px;
  height: 55px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 110px;
`;

export const TimeButton = styled.button`
    padding: 1px 10px;
    font-size: 18px;
    border-radius: 6px;
    height: 40px;
    cursor: pointer;
    width: 95%;
    color: ${COLORS.white};
    background-color: ${COLORS.jellyBean};
    text-decoration: none;
    border: none;
`;

export const CustomView = styled.div`
  flex: 1;
  padding: 8px;
  background-color: ${COLORS.white};
`;