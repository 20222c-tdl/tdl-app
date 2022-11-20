
import { FunctionComponent, useState } from 'react';
import { Form, Field } from 'react-final-form';
import Input from '../../components/Input/Input';
import { requiredValidation } from '../../helpers/validations';
import { IClaimFormData, IClaimsProps } from './types';
import { Arrow, Box, Button, ButtonContainer, Claim, ClaimsContainer, Container, CustomForm, RowDiv, Subtitle, Title, Text, ColumnDiv, Description, EditDiv, Status, StatusText, CommentsButton, CommentsDiv, Comment, CommentButtonContainer, CommentCustomForm, CommentButton, LeaveACommentDiv } from './styles';
import { Edit } from '@mui/icons-material';
import { Modal } from 'components/Modal/Modal';
import ClaimInfoForm from './components/ClaimInfoForm';
import CommentForm from './components/CommentForm';


const Claims: FunctionComponent<IClaimsProps> = (props: IClaimsProps) => {
    const { onRegisterAClaim, claims, onEditClaim, onPostComment } = props;
    const [isRegisterClaimsCollapsed, setIsRegisterClaimsCollapsed] = useState(true);
    const [isEditable, setIsEditable] = useState(false);
    const [openComments, setOpenComments] = useState(true);
    const [currentClaim, setCurrentClaim] = useState<any>(null);
    const [claimId, setClaimId] = useState<any>(null);


    const submitForm = (formData: IClaimFormData) => {
        setIsEditable(false);
        onEditClaim(formData);
    }

    const onHandlePostComment = (formData: any) => {
        const form = {
            ...formData,
            claimId
        }
    }

    const renderRegisterClaims = () => (
        <>
            <RowDiv>
                <Title>Register a claim</Title>
                <Arrow onClick={() => setIsRegisterClaimsCollapsed(!isRegisterClaimsCollapsed)} />
            </RowDiv>
            {!isRegisterClaimsCollapsed && <>
                <Subtitle>Leave your claim, we will resolve it for you</Subtitle>

                <Form
                    onSubmit={onRegisterAClaim}
                    initialValues={{}}
                    render={({ handleSubmit, values }) => {
                        return (
                            <CustomForm onSubmit={handleSubmit}>
                                <Container>
                                    <div>
                                        <label>Type</label>
                                        <Field
                                            render={Input}
                                            label="Type"
                                            name="type"
                                            validate={requiredValidation}
                                            type="text"
                                        />
                                    </div>
                                    <div>
                                        <label>Main issue</label>
                                        <Field
                                            render={Input}
                                            name="mainIssue"
                                            label="Main issue"
                                            validate={requiredValidation}
                                            type="text"
                                        />
                                    </div>
                                    <div>
                                        <label>Description</label>
                                        <Field
                                            render={Input}
                                            name="description"
                                            label="Description"
                                            validate={requiredValidation}
                                            type="text"
                                        />
                                    </div>
                                </Container>
                                <ButtonContainer>
                                    <Button type="submit">Register claim</Button>
                                </ButtonContainer>
                            </CustomForm>
                        )
                    }}
                />
            </>
            }
            {(claims && !claims.length)
                ?
                <Title>There are no claims yet</Title>
                :
                <ClaimsContainer>
                    <Title>Your claims </Title>
                    {claims && claims.map((claim) => {
                        return (
                            <>
                                <Claim key={claim.id}>
                                    <>
                                        <ColumnDiv>
                                            <RowDiv>
                                                <Text isBold>{claim.mainIssue}</Text>
                                                <EditDiv>
                                                    <Edit onClick={() => {
                                                        setIsEditable(true)
                                                        setCurrentClaim(claim)
                                                    }} />
                                                </EditDiv>
                                            </RowDiv>
                                            <ColumnDiv>
                                                <Description>Type: {claim.type} </Description>
                                                <Description>Description: {claim.description}</Description>
                                            </ColumnDiv>
                                            <RowDiv>
                                                <CommentsDiv>
                                                    <CommentsButton onClick={() => {
                                                        setOpenComments(!openComments)
                                                        setCurrentClaim(claim)
                                                    }}>{openComments && claim && currentClaim && currentClaim.id === claim.id ? "Close comments" : "View comments"}</CommentsButton>
                                                </CommentsDiv>
                                                <Status>
                                                    <StatusText color={claim.status}>{claim.status}</StatusText>
                                                </Status>
                                            </RowDiv>
                                        </ColumnDiv>

                                        {openComments && claim && currentClaim && currentClaim.id === claim.id && claim.comments && claim.comments.map((comment) => {
                                            return (
                                                <>
                                                    <Comment key={comment.id}>
                                                        <RowDiv>
                                                            <Text isBold>{comment.userName}:</Text>
                                                            <Description>{comment.comment}</Description>
                                                        </RowDiv>
                                                    </Comment>
                                                </>
                                            )
                                        })
                                        }
                                        <CommentForm
                                            onPostComment={onPostComment}
                                            claimId={claim.id}
                                        />
                                    </>
                                </Claim>
                                <Modal
                                    isOpen={!!isEditable}
                                    onClose={() => setIsEditable(false)}
                                    title="Edit claim information"
                                >
                                    <ClaimInfoForm onSubmit={submitForm} claim={currentClaim} goBack={() => setIsEditable(false)} />
                                </Modal>

                            </>
                        )
                    })}

                </ClaimsContainer>
            }

        </>
    )

    return (
        <ClaimsContainer>
            <Box>
                {renderRegisterClaims()}
            </Box>

        </ClaimsContainer>
    );
}

export default Claims;
