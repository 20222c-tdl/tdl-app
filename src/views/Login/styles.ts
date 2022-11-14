import styled from 'styled-components';
import COLORS from '../../helpers/colors';


export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  border-radius: 8px;
  width: 1024px;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${COLORS.grayAlto};
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
  margin: 10px 0 0;
`;

export const Button = styled.button`
  padding: 7px 30%;
  font-size: 16px;
  border: none;
  font-weight: bold ;
  border-radius: 8px;
  margin: 0 0 15px 0;
  cursor: pointer;
  background-color: ${COLORS.blueFire};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.violetPigment};
  }

;`

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 17px;

  & > p {
    margin: 0 1px 0 0;
    font-family: 'OpenSans', sans-serif;
  }

  & > a {
    margin: 0 5px 0 0;
    text-decoration: none;
    color: ${COLORS.blueFire};
    font-style: italic;
  }
`;
