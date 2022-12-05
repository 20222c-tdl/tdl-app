import styled, { css } from "styled-components";
import COLORS from "helpers/colors";
import { Star } from '@mui/icons-material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { ICircleButtonProps } from "./types";

export const Text = styled.p`
  font-size: 18px;
  padding-right: 50px;
  text-overflow: ellipsis;
  font-style: italic;
  color: ${COLORS.black};
  cursor: pointer;
`;

export const CustomImg = styled.img`
  width: 100%;
  max-width:90px;
  height: 90px;
  width: auto;
  border-radius: 50%;
`;

export const ProviderContainer = styled.div`
  max-width: 1024px;
  margin: 50px auto 0;
  border-color: ${COLORS.black};
  border-radius: 10px;
  padding: 0 10px 10px 10px;
;`

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const NameText = styled.p`
  font-size: 30px;
  margin-bottom: 0px;
  font-weight: bold;
  margin: 0;
  flex: 1;
`;

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1px 8px;
  margin-left: 10px;
`;

export const ColumnDivProviderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1px 8px;
  margin-left: 10px;
  width: 70%;
`;

export const ColumnDivReview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1px 8px;
  margin-left: 10px;
`;


export const CategoryName = styled.p`
font-size: 20px;
margin: 0 2px 2px;
text-overflow: ellipsis;
font-family: 'Open Sans';
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
color: ${COLORS.greyMystic};
`;

export const StarDiv = styled.div`
  color: ${COLORS.gold};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const CalificationText = styled.p`
  font-size: 35px;
  margin: 0 5px;
  text-overflow: ellipsis;
  font-family: 'Open Sans';
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const StarIcon = styled(Star)`
    margin: 0;
    font-size: 2.5rem;
`;

export const ReviewsText = styled.p`
  font-size: 20px;
  margin: 0;
  font-family: 'Open Sans';
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${COLORS.greyMystic};
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid ${COLORS.grayAlto};
  text-align: center;
  font-weight: bold ;
  font-size: 26px;
  width: 100%;
  margin: 10px 10px 20px;

  & > p {
    margin: 10px 0;
  }
;`

export const ServicesContainer = styled.div`
    display: grid;
    margin: 0 2% 1%;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 10px;
    max-width: 1024px;
    width: 100%;
`;

export const Service = styled.div`
    width: 85%;
    padding: 25px;
    margin: 0;
    border-radius: 10px;
    border: 1px solid ${COLORS.grayAlto};
    cursor: pointer;
`;


export const ServiceTitle = styled.p`
  font-size: 20px;
  margin-bottom: 0px;
  font-weight: bold;
  margin: 0;
  flex: 1;
;`

export const ServicesColumn = styled.div`
  border-bottom: 1px solid ${COLORS.grayAlto};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1px 8px 10px 8px;
  margin-left: 10px;
  width: 100%;
`;

export const DescriptionText = styled.p`
  font-size: 20px;
  margin: 0 0 2px 5px;
  font-family: 'Open Sans';
  display: -webkit-box;
  -webkit-line-clamp: 1;
  color: ${COLORS.greyMystic};
`;

export const PriceText = styled.p`
  font-size: 20px;
  margin: 10px 0 0 0;
  font-family: 'Open Sans';
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${COLORS.black};
`;

export const CircleButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${COLORS.brightTurquoise};
  text-align: center;
  margin: 0 4px;

  ${(props: ICircleButtonProps) => props.isClicked
    && css`
      background-color: ${COLORS.white};
      border: 1px solid ${COLORS.black};
  `}
`;

export const CircleButtonText = styled.div`
  font-size: 30px;
  line-height: ${(props: ICircleButtonProps) => (props.isMinus ? '18px' : '25px')};
  padding: ${(props: ICircleButtonProps) => (props.isMinus ? '0px 7px' : '0 4px')};
  font-family: 'Montserrat_500Medium';
  color: ${COLORS.black};

  ${(props: ICircleButtonProps) => props.isClicked
    && css`
        line-height: 31px;
    `}
`;

export const ColumnDivPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1px 8px;
  width: 100%;
`;

export const MonetizationTypeText = styled.p`
  font-size: 15px;
  margin-top: 1px;
  font-family: 'Open Sans';
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${COLORS.greyMystic};
`;

export const PriceByDurationDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 40%;
`;

export const TotalPriceContainer = styled.div`
  font-size: 26px;
  width: 100%;
  margin: 20px 10px 20px 10%;
;`

export const TotalPriceText = styled.p`
  font-size: 20px;
  margin: 10px 5px 0 0;
  font-weight: bold;
  font-family: 'Open Sans';
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${COLORS.black};
`;


export const RowFormDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
    padding-bottom: 20px;
    justify-content: center;
`;

export const CustomForm = styled.div`
    line-height: 2rem;
    text-align: center;
    flex-direction: column;
`;

export const Button = styled.button`
    padding: 5px 10px;
    font-size: 15px;
    border-radius: 6px;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    width: 90%;
    background-color: ${COLORS.azure};
    color: ${COLORS.white};
    text-decoration: none;
    border: none;

    ${({ isDisabled }: { isDisabled?: boolean }) =>
    isDisabled &&
    css`
        pointer-events: none;
        background-color: ${COLORS.greyMystic};
        color: ${COLORS.grayPlaceholder};
        border: 1px solid ${COLORS.grayPlaceholder};
    `};
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

export const ServiceIcon = styled(EngineeringIcon)`
    width: 150px !important;
    height: 150px !important;
`;

export const ServiceText = styled.p`
    font-size: 18px;
    margin: 0 0 2px;
    text-overflow: ellipsis;
    font-family: 'Open Sans';
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

export const Review = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex: 1;
    padding-bottom: 20px;
    width: 70%
`;

export const ReviewUsernameTitle = styled.p`
  font-size: 20px;
  margin-bottom: 0px;
  font-weight: bold;
  margin: 0 5px;
  flex: 1;
`;

export const CalificationReviewText = styled.p`
  font-size: 22px;
  margin: 0 0 0 5px;
  text-overflow: ellipsis;
  font-family: 'Open Sans';
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
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

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1px 8px;
  width: 100%;
`;

export const ReviewIcon = styled(ReviewsIcon)`
    width: 150px !important;
    height: 150px !important;
`;