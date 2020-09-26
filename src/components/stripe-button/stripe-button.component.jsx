import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HVdEiCykLHyc2S5doVabHG6aBDiRm9rZb9AVqvlnkJy2g1G6SNDI7uNCdk1JsqMnq6TQxJWMdX2XJwNq3yglQyR00xVRm4Yq6';

  const onToken = (token) => {
    console.log(token);
    alert('Payment processed!');
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Blue Clothing"
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
