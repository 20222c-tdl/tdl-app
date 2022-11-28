import Input from 'components/Input/Input';
import { requiredValidation } from 'helpers/validations';
import React from 'react';
import { Form, Field } from 'react-final-form';
import {  CommentButton, CommentButtonContainer, CommentCustomForm, LeaveACommentDiv, RowDiv } from '../styles';


const CommentForm = (props: any) => {
    const { claimId, onPostComment } = props;

    const onSubmit = (values:any) =>{
        onPostComment({...values, claimId})
    } 

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, values }) => {
                return (
                    <CommentCustomForm onSubmit={handleSubmit}>
                        <RowDiv>
                            <LeaveACommentDiv>
                                <label>Leave a comment</label>
                                <Field
                                    render={Input}
                                    label="Write your comment"
                                    name="comment"
                                    validate={requiredValidation}
                                    multiline
                                    type="text"
                                />
                            </LeaveACommentDiv>
                            <CommentButtonContainer>
                                <CommentButton type="submit">Post comment</CommentButton>
                            </CommentButtonContainer>
                        </RowDiv>
                    </CommentCustomForm>
                )
            }}
        />
    )
}

export default CommentForm;
