import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active text-lg' : 'text-lg' }  >Button Details</div>
    <div className={props.step2 ? 'active text-lg' : 'text-lg'}>Customer Details</div>
    <div className={props.step3 ? 'active text-lg' : 'text-lg'}>Review and Create</div>
  </div>
}

export default CheckoutSteps;