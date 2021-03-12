import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IFRJtJLcRvcMCpQFJBsBbQ56ByDaE77NKB9yvB0jvh64gkuN57UGMaf3zwM7D2WbawphgqGOdY3haCCuqHdJVtE007WCbFHgf';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful!');
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert('There was an issue with your payment. Please make sure you use the provided credit card.');
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='DLUX Clothing, Inc.'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
