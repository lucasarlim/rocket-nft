import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;

  padding: 10px 16px;
  cursor: pointer;

  background-color: var(--text-color);

  > span {
      width: auto;
      font-size: 1rem;
      font-weight: bold;

      margin-left: 16px;

      color: var(--black-text);
  }
`