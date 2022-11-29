import COLORS from "helpers/colors";
import styled, { css } from "styled-components";
import EngineeringIcon from '@mui/icons-material/Engineering';

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

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${COLORS.grayAlto};
  text-align: center;
  font-weight: bold ;
  font-size: 24px;
  width: 100%;
  margin: 20px 10px;

  & > p {
    margin: 10px 0;
  }
`;

export const PlacesContainer = styled.div`
    display: grid;
    margin: 1% 10%;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 10px;
    max-width: 1024px;
`;

export const Place = styled.div`
    width: calc(100vw/4 - 30px);
    padding: 25px 25px 30px;
    border-radius: 10px;
    border: 1px solid ${COLORS.grayAlto};
    cursor: pointer;
`;

export const PlaceText = styled.p`
    font-size: 18px;
    margin: 0 0 2px;
    font-family: 'Open Sans';

    ${({ isBold }: { isBold?: boolean }) =>
        isBold &&
        css`
        font-weight: bold;
        font-size: 20px;
        white-space: nowrap;
    `};
`;

export const EmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    height: 100%;
    width: 100%;
`;

export const PlaceIcon = styled(EngineeringIcon)`
    width: 150px !important;
    height: 150px !important;
`;

export const DescriptionText = styled.p`
  font-size: 20px;
  margin: 0 0 0 5px;
  font-family: 'Open Sans';
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${COLORS.greyMystic};
`;