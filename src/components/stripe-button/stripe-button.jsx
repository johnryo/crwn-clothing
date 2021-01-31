import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IFRJtJLcRvcMCpQFJBsBbQ56ByDaE77NKB9yvB0jvh64gkuN57UGMaf3zwM7D2WbawphgqGOdY3haCCuqHdJVtE007WCbFHgf';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }
  // image='https://sendeyo.com/up/d/f3eb2117da'
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