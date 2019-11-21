import React, { usestate } from 'react';
import { Link } from 'react-router-dom';
import {
    CardNumberElement,
    CardExpiryElement,
    CardCVCElement,
    injectStripe
}from 'react-stripe-elements';
import axios from 'axios';
import './CheckoutForm.scss';

const CheckoutForm = ({ selectedProduct, stripe, history }) => {
    if(selectedProduct === null) {
        history.push('/')
        return null
    }

    const [receiptUrl, setReceiptUrl] = useState('');

    const handleSubmit = async e => {
        e.preventDefault()

        const { token } = await stripe.createToken({
            name: 'customer name'
        })

        const order = await axios.post('http://localhost:3000/api/stripe/charge', {
            amount: selectedProduct.price.toString().replace('.', ''),
            source: token.id,
            receipt_email: 'customer@example.com'
        })
    }
}