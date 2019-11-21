import React, { useEffect } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const Checkout = ({ selectedProduct, history }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <StripeProvider>
            <Elements>
                <CheckoutForm />
            </Elements>
        </StripeProvider>
    )
}

export default Checkout;