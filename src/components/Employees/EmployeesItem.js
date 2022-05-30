import React, { useState } from "react";
import {
  RowWrapper,
  PrimaryInfoWrapper,
  SecondaryInfoWrapper,
} from "./employees-styling";

const EmployeesItem = ({ name, surname, age, characterClass, ipAdress }) => {
  const [isVisible, setIsVisible] = useState(false);
  const changeVisbilityHandler = () => {
    setIsVisible((e) => !e);
  };

  return (
    <RowWrapper>
      <PrimaryInfoWrapper onClick={changeVisbilityHandler}>
        <p>{name}</p>
        <p>{surname}</p>
      </PrimaryInfoWrapper>
      <SecondaryInfoWrapper isVisible={isVisible}>
        <ul>
          <li>
            <b>Age:</b> {age}
          </li>
          <li>
            <b>Class:</b> {characterClass}
          </li>
          <li>
            <b>IP:</b> {ipAdress}
          </li>
        </ul>
      </SecondaryInfoWrapper>
    </RowWrapper>
  );
};

export default EmployeesItem;
