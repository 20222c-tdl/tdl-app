
import styled, { css } from 'styled-components';
import COLORS from 'helpers/colors';

export const CustomForm = styled.form`
    line-height: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 500px;
    padding-top: 15px;
    
    & > input{
        height: 2.5rem;
    }

    & > h1 {
        font-size: 1.5em;
    }
`;

export const Button = styled.button`
    padding: 5px 10px;
    font-size: 20px;
    border-radius: 8px;
    border: none;
    font-family: 'Open Sans';
    margin-top: 10px;
    cursor: pointer;
    background-color: ${COLORS.violetRed};
    color: ${COLORS.white};

    ${({ isInverted }: { isInverted?: boolean }) =>
        isInverted &&
        css`
        background-color: white;
        color: ${COLORS.violetRed};
        border: 1px solid ${COLORS.violetRed};
    `};
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.p`
  font-size: 16px;
  font-family: 'Open Sans';
  margin: 0;
`;
