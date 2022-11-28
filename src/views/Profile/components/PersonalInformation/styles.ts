import { KeyboardArrowDown } from "@mui/icons-material";
import COLORS from "helpers/colors";
import styled from "styled-components";

export const View = styled.div`
    padding: 5px 0;
`;

export const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ChangePasswordContainer = styled.div`
  border-top: 1px solid #ccc;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    float: right;
`;

export const Button = styled.button`
    padding: 5px 20px;
    font-size: 20px;
    border: none;
    border-radius: 6px;
    margin-top: 10px;
    cursor: pointer;
    background-color: ${COLORS.violetRed};
    color: ${COLORS.white};
    font-family: 'Open Sans';
    float: right;
`;

export const Label = styled.p`
    font-size: 20px;
    font-weight: bold;
    padding-right: 6px;
    margin: 7px 5px;
`;


export const Value = styled.p`
    margin: 7px 5px;
    font-size: 20px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Title = styled.p`
  font-size: 24px;
  margin: 0;
  font-weight: bold;
  text-align: center;
  font-family: 'Open Sans';
  display: flex;
  flex: 1;
  justify-content: center;
;`

export const Subtitle = styled.p`
  font-size: 20px;
  margin: 0;
  text-align: center;
  font-family: 'Open Sans';
;`

export const Arrow = styled(KeyboardArrowDown)`
  cursor: pointer;
;`

export const Box = styled.div`
    padding: 20px 0;
    max-width: 1024px;
    width: 100%;
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
