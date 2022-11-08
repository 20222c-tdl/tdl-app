import COLORS from "helpers/colors";
import styled from "styled-components";

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${COLORS.grayPlaceholder};
  text-align: center;
  font-weight: bold ;
  font-size: 24px;
  width: 100%;
;`

export const ClaimContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background: ${COLORS.lightBlue};
  margin: 1% 10%;
  border-radius: 8px;
`;

export const CustomForm = styled.form`
    line-height: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;

    & > div {
      width: 500px;
    }
;`

export const ButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 7px 30%;
  font-size: 20px;
  border: 1px solid #ccc;
  font-weight: bold ;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  background-color: ${COLORS.blue};
  color: ${COLORS.white};
;`