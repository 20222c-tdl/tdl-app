import COLORS from "helpers/colors";
import styled, { css } from "styled-components";
import { ICommentProps } from './types';

export const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;

export const Description = styled.p`
    margin: 10px 5px 0 5px;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const CommentDescription = styled.p`
    margin: 0 5px 0 5px;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const CommentsDiv = styled.div`
  cursor: pointer;
  width: 200px;
  div:last-child{
    border-bottom: 10px solid ${COLORS.grayPlaceholder};
  }
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
    !props.isAdmin &&
    css`
        background-color: ${COLORS.grayAlto};
        color: black;
    `};
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
