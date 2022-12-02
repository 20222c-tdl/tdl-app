
import { FunctionComponent, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { requiredValidation } from '../../helpers/validations';
import { IClaimFormData, IClaimsProps } from './types';
import { Arrow, Box, Button, ButtonContainer, Claim, ClaimsContainer, Container, CustomForm, RowDiv, Subtitle, Title, Text, ColumnDiv, Description, EditDiv, Status, StatusText, CommentsButton, CommentsDiv, Comment, CommentButtonContainer, CommentCustomForm, CommentButton, LeaveACommentDiv, TimeText } from './styles';
import { Edit } from '@mui/icons-material';
import CommentIcon from '@mui/icons-material/Comment';
import { Modal } from 'components/Modal/Modal';
import ClaimInfoForm from './components/ClaimInfoForm';
import CommentForm from './components/CommentForm';
import COLORS from 'helpers/colors';
import Input from 'components/Input/Input';


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

    const handleNameStatus = (status: any) => {
        if (status === "OPEN") return "OPEN";
        if (status === "TAKING_ACTION") return "TAKING ACTION";
        if (status === "RESOLVED") return "RESOLVED";
    };

    const renderRegisterClaims = () => (
        <>
            <RowDiv isHeader>
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
                                                <RowDiv>
                                                    <Status>
                                                        <StatusText color={claim.status}>{handleNameStatus(claim.status)}</StatusText>
                                                    </Status>
                                                    <Text isBold style={{ fontSize: 24, paddingLeft: 10 }}>{claim.mainIssue}</Text>
                                                </RowDiv>
                                                <EditDiv>
                                                    <Edit onClick={() => {
                                                        setIsEditable(true)
                                                        setCurrentClaim(claim)
                                                    }} />
                                                </EditDiv>
                                            </RowDiv>
                                            <ColumnDiv>
                                                <Description><b>Type</b></Description>
                                                <Description style={{ paddingLeft: 6, paddingBottom: 10 }}>{claim.type}</Description>
                                                <Description><b>Description</b></Description>
                                                <Description style={{ paddingLeft: 6, paddingBottom: 20 }}> {claim.description}</Description>
                                            </ColumnDiv>
                                            <RowDiv>
                                                <CommentsDiv>
                                                    <CommentsButton onClick={() => {
                                                        setOpenComments(!openComments)
                                                        setCurrentClaim(claim)
                                                    }}>{openComments && claim && currentClaim && currentClaim.id === claim.id ? "Close comments" : "View comments"}</CommentsButton>
                                                </CommentsDiv>

                                            </RowDiv>
                                        </ColumnDiv>

                                        {openComments && claim && currentClaim && currentClaim.id === claim.id && claim.claimComments && claim.claimComments.map((comment) => {
                                            let commentType;
                                            if (comment.comment.includes("RESOLVED")) commentType = "resolved"
                                            else if (comment.comment.includes("TAKING ACTION")) commentType = "taking action"
                                            else commentType = comment.role

                                            const commentDate = comment.date.split('T')[0]
                                            const commentTime0 = comment.date.split('T')[1].split(':')[0]
                                            const commentTime1 = comment.date.split('T')[1].split('.')[0].split(':')[1]

                                            return (
                                                <Comment typeComment={commentType} key={comment.id}>
                                                    <RowDiv>
                                                        <Text isBold>{comment.role === "user" ? "Me" : "Admin"}</Text>
                                                        <TimeText>{commentDate + ' ' + commentTime0 + ':' + commentTime1}</TimeText>
                                                    </RowDiv>
                                                    <Description style={{ paddingLeft: 6 }}>{comment.comment}</Description>
                                                </Comment>
                                            )
                                        })
                                        }
                                        {
                                            openComments && claim && currentClaim && currentClaim.id === claim.id && claim.claimComments && !claim.claimComments.length &&
                                            <RowDiv>
                                                <CommentIcon />
                                                <Description>There are no comments yet</Description>
                                            </RowDiv>
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
