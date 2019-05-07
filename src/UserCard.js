import React from "react";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

function UserCard(props) {
  const { name, cardNumber, cvc, expiry } = props;

  return (
    <Cards
      number={cardNumber}
      name={name}
      expiry={expiry}
      cvc={cvc}
      preview
    />
  );
}

export default UserCard;