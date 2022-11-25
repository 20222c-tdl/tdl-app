import COLORS from "helpers/colors";
import styled, { css } from "styled-components";
import { Star } from '@mui/icons-material';
import ReviewsIcon from '@mui/icons-material/Reviews';

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1px 8px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${COLORS.grayAlto};
  text-align: center;
  font-weight: bold ;
  font-size: 26px;
  width: 100%;
  margin: 20px 10px;

  & > p {
    margin: 10px 0;
  }
;`

export const Review = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex: 1;
    padding-bottom: 20px;
    width: 70%
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const CustomReviewImg = styled.img`
  width: 100%;
  max-width:65px;
  height: 65px;
  width: auto;
  border-radius: 50%;
`;

export const ColumnReviewsDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1px 8px;
  width: 100%;
`;

export const StarDiv = styled.div`
  color: ${COLORS.gold};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CalificationReviewText = styled.p`
  font-size: 22px;
  margin: 0 0 0 5px;
  text-overflow: ellipsis;
  font-family: 'OpenSans';
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const StarIcon = styled(Star)`
    margin: 0;
    font-size: 2.5rem;
`;

export const ReviewUsernameTitle = styled.p`
  font-size: 20px;
  margin-bottom: 0px;
  font-weight: bold;
  margin: 0 5px;
  flex: 1;
`;

export const DescriptionText = styled.p`
  font-size: 20px;
  margin: 0 0 0 5px;
  font-family: 'OpenSans';
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${COLORS.greyMystic};
`;

export const EmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 0 20px 0;
    height: 100%;
    width: 100%;
`;

export const ReviewIcon = styled(ReviewsIcon)`
    width: 150px !important;
    height: 150px !important;
`;

export const ServiceText = styled.p`
    font-size: 18px;
    margin: 0 0 2px;
    text-overflow: ellipsis;
    font-family: 'OpenSans';
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;

    ${({ isBold }: { isBold?: boolean }) =>
    isBold &&
    css`
        font-weight: bold;
        font-size: 20px;
        white-space: nowrap;
    `};
`;