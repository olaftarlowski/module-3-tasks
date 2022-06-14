import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ElementsWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin: 40px 0;
  width: 100%;
`;

export { ContentWrapper, ElementsWrapper };
