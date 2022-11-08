
import { FunctionComponent } from 'react';
import { Form, Field } from 'react-final-form';
import Input from '../../components/Input/Input';
import { requiredValidation } from '../../helpers/validations';
import { IClaimsProps } from './types';
import { Button, ButtonContainer, ClaimContainer, CustomForm, TitleContainer } from './styles';


const Claims: FunctionComponent<IClaimsProps> = (props: IClaimsProps) => {
    const { onRegisterAClaim } = props;

    return (
        <ClaimContainer>

            <TitleContainer>
                <p>Make your claim</p>
            </TitleContainer>

            <h3> We will resolve it for you</h3>

            <Form
                onSubmit={onRegisterAClaim}
                initialValues={{}}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <CustomForm onSubmit={handleSubmit}>
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
                                label="Main issue"
                                name="mainIssue"
                                validate={requiredValidation}
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Description</label>
                            <Field
                                render={Input}
                                label="Description"
                                name="description"
                                validate={requiredValidation}
                                type="text"
                            />
                        </div>

                        <ButtonContainer>
                            <Button type="submit">Register claim</Button>
                        </ButtonContainer>
                    </CustomForm>

                )}

            />
        </ClaimContainer>
    );
}

export default Claims;
