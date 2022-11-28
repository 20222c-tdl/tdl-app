import COLORS from "helpers/colors";
import styled, { css } from "styled-components";
import { KeyboardArrowDown } from "@mui/icons-material";

export const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

export const Title = styled.p`
  font-size: 28px;
  margin: 0;
  font-weight: bold;
  text-align: center;
  font-family: 'OpenSans';
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Arrow = styled(KeyboardArrowDown)`
  cursor: pointer;
  width: 30px;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  margin: 0;
  text-align: center;
  font-family: 'OpenSans';
`;

export const CustomForm = styled.form`
    line-height: 2rem;
    font-size: 17px;
    width: 100%;
    align-items: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;

export const ButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 7px 16%;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  background-color: ${COLORS.blueFire};
  color: ${COLORS.white};
  font-family: 'OpenSans';
`;

export const PlacesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 10%;
  border-radius: 8px;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Place = styled.div`
    margin: 1px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 80%;
    padding-bottom: 5px;
    border-bottom: 2px solid ${COLORS.greyMystic};
`;

export const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    width:100%;
    padding: 10px 0 5px 0;
    text-overflow: ellipsis;
    & > p {
        margin: 0 5px 0 5px;
    }
`;

export const EditDiv = styled.div`
  color: ${COLORS.black};
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Description = styled.p`
    margin: 0 5px 0 5px;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Text = styled.p`
    font-size: 20px;
    margin: 0 5px 0 5px;
    text-overflow: ellipsis;

    ${({ isBold }: { isBold?: boolean }) =>
        isBold &&
        css`
        font-weight: bold;
        white-space: nowrap;
        text-overflow: ellipsis;
    `};
`;

export const ButtonModal = styled.button`
    padding: 5px 10px;
    font-size: 20px;
    border-radius: 8px;
    border: none;
    font-family: 'OpenSans';
    margin-top: 10px;
    cursor: pointer;
    background-color: ${COLORS.cerulean};
    color: ${COLORS.white};

    ${({ isInverted }: { isInverted?: boolean }) =>
    isInverted &&
    css`
        background-color: white;
        color: ${COLORS.black};
        border: 1px solid ${COLORS.cerulean};
    `};
`;

export const Box = styled.div`
    padding: 20px 0;
    max-width: 1024px;
    width: 100%;
`;