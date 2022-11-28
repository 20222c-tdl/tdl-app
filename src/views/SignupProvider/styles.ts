import styled from 'styled-components';
import COLORS from '../../helpers/colors';

export const CustomForm = styled.form`
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;
;`

export const ButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${COLORS.grayAlto};
  text-align: center;
  font-weight: bold ;
  font-size: 24px;
  width: 100%;
  margin-bottom: 10px;

  & > p {
    margin: 10px 0;
  }
;`

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

  &:hover {
    background-color: ${COLORS.violetPigment};
  }
;`

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5% 10%;
  border-radius: 8px;
  max-width: 1024px;
  margin: 0 auto;
`;

export const ButtonContainerSignUp = styled.div`
  width: 100%;
`;

export const Label = styled.p`
  font-size: 16px;
  font-family: 'Open Sans';
  margin: 0;
`;

export const FormFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;

  & > div {
      width: 400px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 18px;

  & > p {
    margin: 0 5px 0 0;
    font-family: 'Open Sans', sans-serif;
  }

  & > a {
    text-decoration: none;
    color: ${COLORS.blueFire};
    font-style: italic;
  }
`;
