import React, { useEffect } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const Checkout = ({ selectedProduct, history }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <StripeProvider apiKey="pk_test_YO4hCduILG2Vkvaecq4Th13V007ILyXZUw">
            <Elements>
                <CheckoutForm selectedProduct={selectedProduct} history={history} />
            </Elements>
        </StripeProvider>
    )
}

export default Checkout;