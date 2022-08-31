import React from 'react';

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  return (
    <div className="personCard">
        <h2>{ lastName }, { firstName }</h2>
        <p>Age: { age }</p>
        <p>Hair Color: { hairColor }</p>
        <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
    </div>
  );
}
export default PersonCard;