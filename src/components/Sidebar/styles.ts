import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100vh;

  > div{
    width: 100%;
  }

  > button {
    margin-bottom: 2rem;
  }
`

export const IconWrapper = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  padding: 24px;
  align-items: center;
  justify-content: end;

  > img {
    cursor: pointer;
  }

  &::before{
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;

    background-color: var(--border);
    content: '';
    display: inline;
  }

`

export const Pages = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavLink = styled(Link)`
  position: relative;
  font-size: 1.125rem;
  font-weight: 500;
  padding: 16px 24px;

  cursor: pointer;
  color: var(--text-color);
  text-decoration: none;
  transition: 0.3s ease-out;

  &::after {
    position: absolute;
    width: 5px;
    height: 0%;

    left: 0;
    top: 0;

    background-color: var(--color-logo);

    content: '';
    display: none;

    transition: width 0.3s ease-out;
  }

  &::before{
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;

    background-color: var(--border);
    content: '';
  }

  &: hover{
    color: var(--text-color);

    &::after {
      height: 100%;
      display: inline;
    }
  }

  &.active {
    color: var(--color-logo);

    &::after {
      display: inline;
      height: 100%;
    }
  }
`;

