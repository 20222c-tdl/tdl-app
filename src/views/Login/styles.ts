import styled from 'styled-components';
import COLORS from '../../helpers/colors';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background: ${COLORS.lightBlue};
  margin: 20px;
  border-radius: 8px;
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${COLORS.grayPlaceholder};
  text-align: center;
  font-weight: bold ;
  font-size: 24px;
  width: 100%;
;`

export const CustomForm = styled.form`
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;
    margin-top: 2%;

    & > div {
      width: 500px;
    }
;`

export const ButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  width: 100%;
  margin: 10px 0 10px;
`;

export const Button = styled.button`
  padding: 7px 30%;
  font-size: 16px;
  border: 1px solid #ccc;
  font-weight: bold ;
  border-radius: 8px;
  margin-top: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  background-color: ${COLORS.blue};
  color: ${COLORS.white};
;`
