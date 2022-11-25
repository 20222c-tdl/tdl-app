import React, { FunctionComponent } from 'react';
import { CalificationReviewText, ColumnReviewsDescription, CustomReviewImg, DescriptionText, EmptyContainer, Review, ReviewIcon, ReviewsContainer, ReviewUsernameTitle, RowDiv, RowDivReviews, ServiceText, StarDiv, StarIcon, StarIconTotal, TitleContainer } from './styles';
import { IReviewsProps } from './types';
import person from "../../assets/person.jpg";

const Reviews: FunctionComponent<IReviewsProps> = (props: IReviewsProps) => {
    const { reviews } = props;
    return (
        <ReviewsContainer>
            <RowDivReviews>
                <TitleContainer> Reviews - Total rating: </TitleContainer>
                <StarDiv>
                    <CalificationReviewText>{reviews.totalRating.toFixed(1)}</CalificationReviewText>
                    <StarIconTotal />
                </StarDiv >
            </RowDivReviews>
            {reviews.reviews && reviews.reviews.map((reviewObj: any) => {
                return (
                    <Review key={reviewObj.review.id}>
                        <RowDiv>
                            <CustomReviewImg src={person} alt="Person" />
                            <ColumnReviewsDescription>
                                <RowDiv>
                                    <StarDiv>
                                        <CalificationReviewText>{reviewObj.review.rating ? reviewObj.review.rating.toFixed(1) : 0}</CalificationReviewText>
                                        <StarIcon />
                                    </StarDiv >
                                    <ReviewUsernameTitle>{reviewObj.user.firstName} {reviewObj.user.lastName}</ReviewUsernameTitle>
                                </RowDiv>
                                <DescriptionText> {reviewObj.review.description}</DescriptionText>
                            </ColumnReviewsDescription>
                        </RowDiv>
                    </Review>
                )
            })}
            {(!reviews || !reviews.reviews || !reviews.reviews.length) &&
                <EmptyContainer>
                    <ReviewIcon />
                    <ServiceText isBold>You do not have any review yet</ServiceText>
                </EmptyContainer>
            }
        </ReviewsContainer>
    );
}

export default Reviews;

