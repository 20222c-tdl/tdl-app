import COLORS from "helpers/colors";
import styled, { css } from "styled-components";
import { KeyboardArrowDown } from "@mui/icons-material";
import { ICommentProps } from './types';

export const ClaimsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 10%;
  border-radius: 8px;
  max-width: 1024px;
  margin: 0 auto;
`;

export const CustomForm = styled.form`
    line-height: 2rem;
    font-size: 17px;
    width: 100%;
    align-items: center;
;`

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
  font-family: 'Open Sans';
;`

export const Box = styled.div`
    padding: 20px 0;
    max-width: 1024px;
    width: 100%;
`;

export const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    ${({ isHeader }: { isHeader?: boolean }) =>
    isHeader &&
    css`
        border-bottom: 1px solid ${COLORS.lightGray};
        margin-bottom: 15px;
        padding-bottom: 15px;
    `};
`;

export const Title = styled.p`
  font-size: 28px;
  margin: 0;
  font-weight: bold;
  text-align: center;
  font-family: 'Open Sans';
  display: flex;
  flex: 1;
  justify-content: center;
;`

export const Arrow = styled(KeyboardArrowDown)`
  cursor: pointer;
  width: 30px;
;`

export const Subtitle = styled.p`
  font-size: 20px;
  margin: 0;
  text-align: center;
  font-family: 'Open Sans';
;`

export const Claim = styled.div`
    margin: 1px;
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid ${COLORS.grayAlto};
    border-radius: 15px;
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

export const Description = styled.p`
    margin: 5px 5px 10px;
    font-size: 18px;
`;

export const EditDiv = styled.div`
  color: ${COLORS.black};
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const Status = styled.div`
  display: flex;
`

const handleColorType = (color: any) => {
  switch (color) {
    case "OPEN":
      return "#00B7FF";
    case "TAKING_ACTION":
      return "#FFD100";
    case "RESOLVED":
      return "#61FF7E";
    case "CLOSED":
      return "#F25407";
    default:
      return "#FFFFFF";
  }
};

export const StatusText = styled.p`
  font-size: 15px;
  margin: 0;
  padding: 10px 20px;
  text-overflow: ellipsis;
  border-radius: 10px;
  background-color: ${({ color }) => handleColorType(color)};
`;

export const ButtonModal = styled.button`
    padding: 5px 10px;
    font-size: 20px;
    border-radius: 8px;
    border: none;
    font-family: 'Open Sans';
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

export const CommentsButton = styled.button`
  font-size: 17px;
  margin: 0;
  font-family: 'Open Sans';
  color: ${COLORS.cerulean};
  cursor: pointer;
  font-weight: bold;
  border: 0;
  background-color: white;
`;

export const CommentsDiv = styled.div`
  cursor: pointer;
  width: 200px;
  div:last-child{
    border-bottom: 10px solid ${COLORS.grayPlaceholder};
  }
`;

export const Comment = styled.div`
    margin: 10px 1px 0 40px;
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 10px;
    background-color: #66b3ed;
    border-radius: 20px;
    color: white;

    ${(props: ICommentProps) =>
    !props.isMe &&
    css`
        background-color: ${COLORS.grayAlto};
        color: black;
    `};
`;

export const CommentCustomForm = styled.form`
    line-height: 2rem;
    font-size: 17px;
    width: 100%;
    align-items: center;
`;

export const LeaveACommentDiv = styled.div`
  width: 70%;
`;

export const CommentButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  width: 30%;
`;

export const CommentButton = styled.button`
  padding: 7px 18%;
  margin: 0 0 4px 3px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${COLORS.azure};
  color: ${COLORS.white};
  font-family: 'Open Sans';
`;
