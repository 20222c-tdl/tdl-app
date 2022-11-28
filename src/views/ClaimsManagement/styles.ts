import COLORS from "helpers/colors";
import styled, { css } from "styled-components";

export const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%
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
  font-family: 'OpenSans';
  color: ${COLORS.cerulean};
  text-decoration: underline;
  font-weight: bold;
  border: 0;
  background-color: white;
`;

export const Comment = styled.div`
    margin: 1px 1px 1px 40px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 80%;
    padding-bottom: 5px;
    border-bottom: 1px solid ${COLORS.grayPlaceholder};
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
  padding: 7px 16%;
  margin: 0 0 4px 3px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${COLORS.azure};
  color: ${COLORS.white};
  font-family: 'OpenSans';
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
  width: 20%;
`;
