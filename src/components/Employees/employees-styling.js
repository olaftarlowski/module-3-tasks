import styled from "styled-components";

const EmployeesWrapper = styled.div`
  font-size: 0.7em;
  margin: 30px 0;
  text-align: left;
  width: 70%;
  border: 1px solid #fff;
  border-radius: 16px;

  .employeesWrapper__headline {
    text-align: center;
  }
`;

const RowWrapper = styled.div`
  border-top: 1px solid #fff;
  display: flex;
  flex-direction: row;

  div {
    box-sizing: border-box;
    padding: 4px 24px;
    width: 50%;
  }
`;

const PrimaryInfoWrapper = styled.div`
  border-right: 1px solid #fff;
`;

const SecondaryInfoWrapper = styled.div`
  transition: 0.2s ease-out;
  cursor: ${(props) => (props.isVisible ? "" : "default")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};

  ul {
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export {
  EmployeesWrapper,
  RowWrapper,
  PrimaryInfoWrapper,
  SecondaryInfoWrapper,
};
