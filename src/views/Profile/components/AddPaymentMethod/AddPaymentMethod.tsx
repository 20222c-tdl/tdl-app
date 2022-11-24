import React from 'react';
import { Form, Field } from 'react-final-form';
import Cards from 'react-credit-cards'

import { requiredValidation } from 'helpers/validations';
import 'react-credit-cards/es/styles-compiled.css';
import { CustomForm, Button } from './styles';
import { IAddPaymentMethodProps } from './types';
import Input from 'components/Input/Input';
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from 'helpers/payments';

const AddPaymentMethod = (props: IAddPaymentMethodProps) => {
    const { onSubmit, onCancel } = props;

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, values, active }) => (
                <CustomForm onSubmit={handleSubmit}>
                    <div style={{ paddingBottom: '20px' }}>
                        <Cards
                            number={values.number || ''}
                            name={values.name || ''}
                            expiry={values.expiry || ''}
                            cvc={values.cvc || ''}
                        />
                    </div>
                    <label>Card Number</label>
                    <Field
                        render={Input}
                        label="Card Number"
                        name="number"
                        validate={requiredValidation}
                        type="text"
                        format={formatCreditCardNumber}
                    />
                    <div>
                        <label>Full name (As shown in card)</label>
                        <Field
                            render={Input}
                            label="Full name (As shown in card)"
                            name="name"
                            validate={requiredValidation}
                            type="text"
                        />
                    </div>
                    <div>
                        <label>Valid thru</label>
                        <Field
                            render={Input}
                            label="Valid thru"
                            name="expire"
                            validate={requiredValidation}
                            type="text"
                            pattern="\d\d/\d\d"
                            format={formatExpirationDate}
                        />
                    </div>
                    <div>
                        <label>CVC</label>
                        <Field
                            render={Input}
                            label="CVC"
                            name="cvv"
                            validate={requiredValidation}
                            type="text"
                            pattern="\d{3,4}"
                            format={formatCVC}
                        />
                    </div>
                    <Button isInverted onClick={onCancel}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </CustomForm>
            )}
        />
    )
}

export default AddPaymentMethod;
