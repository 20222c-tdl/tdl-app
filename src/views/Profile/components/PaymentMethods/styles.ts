import COLORS from 'helpers/colors';
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${COLORS.grayPlaceholder};
`;

export const CustomForm = styled.form`
    line-height: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 500px;
    
    & > input {
        font-size: 1em;
        margin-bottom: 6px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
`;

export const View = styled.div`
    padding: 20px 0;

    & > h1 {
        font-size: 24px;
        font-weight: 400;
        margin: 0;
        text-align: center;
        font-family: 'Open Sans';
    }
`;

export const CardsContainer = styled.div`
    width: 35%;
    margin: 0 auto;
`;

export const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    & > h1 {
        text-align: center;
        margin: 10px 0 0 0;
        font-size: 20px;
        padding-right: 20px;
        flex: 1;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`;


export const Button = styled.button`
    padding: 5px 30px;
    font-size: 20px;
    border-radius: 8px;
    border: none;
    font-family: 'Open Sans';
    margin-top: 10px;
    cursor: pointer;
    background-color: ${COLORS.violetRed};
    color: ${COLORS.white};
`;

export const CardContainer = styled.div`
    width: 300px;
    height: 88px;
    padding-left: 20px;
    padding-right: 20px;
`;
