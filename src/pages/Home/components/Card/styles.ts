import styled from "styled-components";

export const Timeline = styled.section`
  margin-block: 6rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const BaseCardContainer = styled.div`
  width: 100%;

  background: ${(props) => props.theme.white};

  box-shadow: -1px 7px 7px 0;
  
  div {
    padding: 1.25rem;
  }

  div:nth-child(3) {
    text-align: start;

    h1 {
      margin-bottom: 0.25rem;
      font-size: 1.25rem;

      text-transform: uppercase;
    }
  }
`;

export const FirstDate = styled(BaseCardContainer)`
  svg {
    color: ${(props) => props.theme["dark-red"]};
  }
  div:nth-child(1) {
    background: ${(props) => props.theme.red};
  }

  div:nth-child(2) {
    background: ${(props) => props.theme["dark-red"]};
    color: ${(props) => props.theme.red};
  }
  h1 {
    color: ${(props) => props.theme["dark-red"]};
  }
`;

export const Desilusao = styled(BaseCardContainer)`
  svg {
    color: ${(props) => props.theme["dark-gray"]};
  }
  div:nth-child(1) {
    background: ${(props) => props.theme.gray};
  }

  div:nth-child(2) {
    background: ${(props) => props.theme["dark-gray"]};
    color: ${(props) => props.theme.gray};
  }
  h1 {
    color: ${(props) => props.theme["dark-gray"]};
  }
`;

export const Engano = styled(BaseCardContainer)`
  svg {
    color: ${(props) => props.theme["dark-purple"]};
  }
  div:nth-child(1) {
    background: ${(props) => props.theme.purple};
  }

  div:nth-child(2) {
    background: ${(props) => props.theme["dark-purple"]};
    color: ${(props) => props.theme.purple};
  }
  h1 {
    color: ${(props) => props.theme["dark-purple"]};
  }
`;

export const Decisao = styled(BaseCardContainer)`
  svg {
    color: ${(props) => props.theme["dark-blue"]};
  }
  div:nth-child(1) {
    background: ${(props) => props.theme.blue};
  }

  div:nth-child(2) {
    background: ${(props) => props.theme["dark-blue"]};
    color: ${(props) => props.theme.blue};
  }
  h1 {
    color: ${(props) => props.theme["dark-blue"]};
  }
`;

export const Start = styled(BaseCardContainer)`
  svg {
    color: ${(props) => props.theme["dark-pink"]};
  }
  div:nth-child(1) {
    background: ${(props) => props.theme.pink};
  }

  div:nth-child(2) {
    background: ${(props) => props.theme["dark-pink"]};
    color: ${(props) => props.theme.pink};
  }
  h1 {
    color: ${(props) => props.theme["dark-pink"]};
  }
`;

export const EmBreve = styled(BaseCardContainer)`
  svg {
    color: ${(props) => props.theme["dark-green"]};
  }
  div:nth-child(1) {
    background: ${(props) => props.theme.green};
  }

  div:nth-child(2) {
    background: ${(props) => props.theme["dark-green"]};
    color: ${(props) => props.theme.green};
  }
  h1 {
    color: ${(props) => props.theme["dark-green"]};
  }
`;
