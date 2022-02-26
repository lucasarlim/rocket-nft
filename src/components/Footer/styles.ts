import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gird-template-columns: auto auto;
  grid-template-areas:
    "TI TI"
    "MI MI"
    "BI BI";

  width: 100%;

  background-color: var(--card-color);
`;

export const MiddleInfo = styled.div`
  grid-area: MI;
  display: flex;
  align-items: center;

  width: 100%;
`;

export const SocialMidias = styled.div`
  display: flex;
  align-items: center;

  grid-gap: 32px;

  > img {
    width: 32px;
    height: 32px;

    transition: transform 0.3s ease-out;
    cursor: pointer;

    &:hover {
      transform: translateY(-8px);
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 66px;

  margin-top: 24px;
`;

export const Input = styled.input`
  padding: 20px;

  font-size: 1.125rem;
  color: var(--subtitle-color);

  background-color: var(--color-input);
`;

export const SubmitButton = styled.button`
  padding: 20px 24px;

  font-size: 1.125rem;
  font-weight: bold;

  cursor: pointer;
  color: var(--black-text);
`;

export const NewsletterSection = styled.div`
  widht: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  grid-area: NW;
  padding: 72px 80px;
  border: 1px solid var(--subtitle-color);
  border-style: solid none;

  > p {
    font-size: 1.875rem;
    font-weight: 500;

    color: var(--text-color);

    > span {
      font-size: 1.875rem;
      font-weight: 500;

      color: var(--color-logo);
    }
  }
`;

export const NavSection = styled.div`
  grid-area: NS;

  display: flex;
  aling-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 72px 80px;
  border: 1px solid var(--subtitle-color);
  border-style: solid none solid solid;

  > div strong {
    font-size: 1.125rem;
    font-weight: bold;

    color: var(--text-color);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 24px;
  grid-gap: 16px;

  > a {
    font-size: 1.125rem;
    font-weight: 400;

    color: var(--subtitle-color);
    text-decoration: none;

    :hover {
      color: var(--text-color);
    }
  }
`;

export const TopInfo = styled.div`
  grid-area: TI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 72px 80px 60px;

  > button {
    cursor: pointer;
    padding: 24px;

    background-color: var(--color-logo);
  }
`;

export const BottomInfo = styled.div`
  grid-area: BI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 72px 80px 72px;

  > p {
    font-size: 1.125rem;
    color: var(--subtitle-color);
  }
`;
