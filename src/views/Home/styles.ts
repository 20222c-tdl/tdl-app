import COLORS from "helpers/colors";
import styled from "styled-components";

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