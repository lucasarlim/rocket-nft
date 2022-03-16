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

  @media (max-width: 1024px) {
    gird-template-columns: 100% ;
    grid-template-areas:
    "TI"
    "MI"
    "BI";
  }
`;

export const MiddleInfo = styled.div`
  grid-area: MI;
  display: flex;
  align-items: center;

  width: 100vw;

  @media (max-width: 1024px) {
    padding: 24px 16px;
    flex-direction: column;
    align-items: start;
    grid-gap: 2rem;
  }
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
  height: 4.125rem;

  margin-top: 24px;
`;

export const Input = styled.input`
  padding: 1.25rem;

  font-size: 1.125rem;
  color: var(--subtitle-color);

  background-color: var(--color-input);
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 1.25rem;

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
  padding: 3.5rem 4rem;
  border: 1px solid var(--subtitle-color);
  border-style: solid none;

  > p {
    width: 100%;
    font-size: 1.875rem;
    font-weight: 500;

    color: var(--text-color);

    > span {
      font-size: 1.875rem;
      font-weight: 500;

      color: var(--color-logo);
    }
  }

  @media (max-width: 1024px) {
    border: 0px solid;
    padding: 0px;
  }

`;

export const NavSection = styled.div`
  grid-area: NS;

  display: flex;
  aling-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 3.5rem 4rem;
  border: 1px solid var(--subtitle-color);
  border-style: solid none solid solid;

  > div strong {
    font-size: 1.125rem;
    font-weight: bold;

    color: var(--text-color);
  }

  @media (max-width: 1024px) {
    border: 0 solid;
    padding: 0;
    flex-wrap: wrap;
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

  width: 100vw;
  padding: 72px 80px 60px;

  > a {
    cursor: pointer;
    padding: 24px;

    background-color: var(--color-logo);
  }

  @media (max-width: 1024px) {
    padding: 32px 24px;
  }

  @media (max-width: 768px) {
    padding: 24px 16px;

    > img {
      width: 144px;
    }
  }
`;

export const BottomInfo = styled.div`
  grid-area: BI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  padding: 72px 80px 72px;

  > p {
    font-size: 1.125rem;
    color: var(--subtitle-color);
  }
  
  @media (max-width: 1024px) {
    padding: 32px 24px;
  }

  @media (max-width: 768px) {
    padding: 16px 24px;
    flex-wrap: wrap;
    grid-gap: 1.5rem;
  }
  
`;
