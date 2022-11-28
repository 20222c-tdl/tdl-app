import COLORS from "helpers/colors";
import styled, { css } from "styled-components";

export const ColumnDivPlaceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1px 8px;
  margin-left: 10px;
  width: 70%;
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
    margin: 0 2px 2px;
    text-overflow: ellipsis;
    font-family: 'Open Sans';
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
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
    font-size: 15px;
    border-radius: 6px;
    margin-top: 10px;
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
;`
